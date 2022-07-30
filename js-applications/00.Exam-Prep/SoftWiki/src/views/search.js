import { html } from "../lib.js";
import { search } from "../api/data.js";

const searchTemplate = (onSearch, data, title) => html`
  <section id="search-page" class="content">
    <h1>Search</h1>
    <form @submit=${onSearch} id="search-form">
      <p class="field search">
        <input type="text" placeholder="Search by article title" name="search" .value=${title || ""}
        />
      </p>
      <p class="field submit">
        <input class="btn submit" type="submit" value="Search" />
      </p>
    </form>
    <div class="search-container"></div>
    ${data.length == 0
      ? html` <h3 class="no-articles">No matching articles</h3>`
      : data.map(articleTemplate)}
  </section>
`;

const articleTemplate = (article) => html`
  <a class="article-preview" href="/details/${article._id}">
    <article>
      <h3>Topic: <span>${article.title}</span></h3>
      <p>Category: <span>${article.category}</span></p>
    </article>
  </a>
`;

export async function searchPage(ctx) {
  const title = ctx.querystring.split("=")[1];
  const data = title == undefined ? [] : await search(title);



  ctx.render(searchTemplate(onSearch, data, title));

  async function onSearch(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);

    const query = formData.get("search").trim();

    ctx.page.redirect(`search?query=${query}`);
  }
}

