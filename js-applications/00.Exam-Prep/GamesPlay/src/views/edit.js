import { html, nothing } from "../lib.js";
import { getSingleGame } from "../api/data.js";
import { editGame } from "../api/data.js";

const editTemplate = (game, onSubmit) => html`
  <section id="edit-page" class="auth">
    <form @submit=${onSubmit} id="edit">
      <div class="container">
        <h1>Edit Game</h1>
        <label for="leg-title">Legendary title:</label>
        <input type="text" id="title" name="title" value=${game.title} />

        <label for="category">Category:</label>
        <input
          type="text"
          id="category"
          name="category"
          value=${game.category}
        />

        <label for="levels">MaxLevel:</label>
        <input
          type="number"
          id="maxLevel"
          name="maxLevel"
          min="1"
          value=${game.maxLevel}
        />

        <label for="game-img">Image:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value=${game.imageUrl}
        />

        <label for="summary">Summary:</label>
        <textarea name="summary" id="summary" .value=${game.summary}></textarea>
        <input class="btn submit" type="submit" value="Edit Game" />
      </div>
    </form>
  </section>
`;

export async function editPage(ctx) {
  const id = ctx.params.id;
  const game = await getSingleGame(id);

  ctx.render(editTemplate(game, onSubmit));

  async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const title = formData.get("title").trim();
    const category = formData.get("category").trim();
    const maxLevel = formData.get("maxLevel").trim();
    const imageUrl = formData.get("imageUrl").trim();
    const summary = formData.get("summary").trim();

    try {
      if (!title || !category || !maxLevel || !imageUrl || !summary) {
        throw new Error("Please fill in all fields!");
      }

      await editGame(id, {
        title,
        category,
        maxLevel,
        imageUrl,
        summary,
      });

      e.target.reset();
      ctx.page.redirect(`/details/${id}`);
      
    } catch (error) {
      alert(error.message);
    }
  }
}
