import { html } from "../lib.js";
import { createArticle } from "../api/data.js";


const createTemplate = (onSubmit) => html`
  <section id="create-page" class="content">
    <h1>Create Article</h1>

    <form @submit=${onSubmit} id="create" action="#" method="">
      <fieldset>
        <p class="field title">
          <label for="create-title">Title:</label>
          <input
            type="text"
            id="create-title"
            name="title"
            placeholder="Enter article title"
          />
        </p>

        <p class="field category">
          <label for="create-category">Category:</label>
          <input
            type="text"
            id="create-category"
            name="category"
            placeholder="Enter article category"
          />
        </p>
        <p class="field">
          <label for="create-content">Content:</label>
          <textarea name="content" id="create-content"></textarea>
        </p>

        <p class="field submit">
          <input class="btn submit" type="submit" value="Create" />
        </p>
      </fieldset>
    </form>
  </section>
`;

export async function creatPage(ctx) {
  ctx.render(createTemplate(onSubmit));


  const validCategory = ["JavaScript", "C#", "Java", "Python"];

  async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const title = formData.get("title").trim();
    const category = formData.get("category").trim();
    const content = formData.get("content").trim();

    try {
      if (!title || !category || !content) {
        throw new Error("Please fill in all fields!");
      }

      if (validCategory.includes(category) == false) {
        throw new Error(
          'Invalid category! The category must - "JavaScript", "C#", "Java", or "Python".'
        );
      }

      await createArticle({ title, category, content });

      e.target.reset();

      ctx.page.redirect("/");

    } catch (error) {
      alert(error.message);
    }
  }
}

