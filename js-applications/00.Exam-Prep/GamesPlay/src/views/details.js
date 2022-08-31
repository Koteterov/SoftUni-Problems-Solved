import { html, nothing } from "../lib.js";
import { getSingleGame } from "../api/data.js";
import { deleteGame } from "../api/data.js";
import { getComment } from "../api/data.js";
import { addComment } from "../api/data.js";

const detailsTemplate = (game, user, isCreator, onDelete, commentInfo, onSubmit) => html`
  <section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">
      <div class="game-header">
        <img class="game-img" src=${game.imageUrl} />
        <h1>${game.title}</h1>
        <span class="levels">MaxLevel: ${game.maxLevel}</span>
        <p class="type">${game.category}</p>
      </div>

      <p class="text">${game.summary}</p>

      <!-- Bonus ( for Guests and Users ) -->
      <div class="details-comments">
        <h2>Comments:</h2>
        <ul>
          ${commentInfo.length == 0
            ? html` <p class="no-comment">No comments.</p> `
            : commentInfo.map(
                (c) => html`
                  <li class="comment">
                    <p>Content: ${c.comment}</p>
                  </li>
                `
              )}
        </ul>
      </div>

      <!-- Edit/Delete buttons ( Only for creator of this game )  -->
      <div class="buttons">
        ${isCreator
          ? html`
              <a href="/edit/${game._id}" class="button">Edit</a>
              <a @click=${onDelete} href="javascript:void(0)" class="button"
                >Delete</a
              >
            `
          : nothing}
      </div>
    </div>

    <!-- Add Comment ( Only for logged-in users, which are not creators of the current game ) -->
    ${!isCreator && user != null
      ? html`
    <article class="create-comment">
      <label>Add new comment:</label>
      <form @submit=${onSubmit} class="form">
        <textarea name="comment" placeholder="Comment......"></textarea>
        <input class="btn submit" type="submit" value="Add Comment" />
      </form>
    </article>
  </section>
    `
      : nothing}
  </section>
`;

export async function detailsPage(ctx) {
  const gameId = ctx.params.id;

  const game = await getSingleGame(gameId);
  const commentInfo = await getComment(gameId);

  const user = sessionStorage.getItem("userId");
  const isCreator = user == game._ownerId;

  ctx.render(
    detailsTemplate(game, user, isCreator, onDelete, commentInfo, onSubmit)
  );

  async function onDelete() {
    const confirmed = confirm("Are you sure you want to delete this game?");

    if (confirmed) {
      await deleteGame(game._id);
      ctx.page.redirect("/");
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const comment = formData.get("comment").trim();

    try {
      if (comment == "") {
        throw new Error("Please fill in !");
      }
      await addComment({ gameId, comment });
      e.target.reset();
      ctx.page.redirect(`/details/${gameId}`);

    } catch (error) {
      alert(error.message);
    }
  }
}

