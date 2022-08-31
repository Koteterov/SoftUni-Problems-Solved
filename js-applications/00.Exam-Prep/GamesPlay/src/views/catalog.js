import { html } from "../lib.js";
import { getAllGames } from "../api/data.js";

const catalogTemplate = (data) => html`
  <section id="catalog-page">
    <h1>All Games</h1>
    <!-- Display div: with information about every game (if any) -->
    ${data.length == 0
      ? html`<h3 class="no-articles">No articles yet</h3>`
      : data.map((x) => html`
            <div class="allGames">
              <div class="allGames-info">
                <img src=${x.imageUrl} />
                <h6>${x.category}</h6>
                <h2>${x.title}</h2>
                <a href="/details/${x._id}" class="details-button">Details</a>
              </div>
            </div>
          `
        )}

  </section>
`;

export async function catalogPage(ctx) {
  const data = await getAllGames();

  ctx.render(catalogTemplate(data));

}

