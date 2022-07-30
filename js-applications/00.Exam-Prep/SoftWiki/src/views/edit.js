import { html } from "../lib.js";
import { editArticle, getArticleById } from "../api/data.js";

const editTemplate = (article, onSubmit) => html `

<section id="edit-page" class="content">
            <h1>Edit Article</h1>

            <form @submit=${onSubmit} id="edit" action="#" method="">
                <fieldset>
                    <p class="field title">
                        <label for="title">Title:</label>
                        <input type="text" name="title" id="title" placeholder="Enter article title" value=${article.title}>
                    </p>

                    <p class="field category">
                        <label for="category">Category:</label>
                        <input type="text" name="category" id="category" placeholder="Enter article category" value=${article.category}>
                    </p>
                    <p class="field">
                        <label for="content">Content:</label>
                        <textarea name="content" id="content" .value=${article.content}></textarea>
                    </p>

                    <p class="field submit">
                        <input class="btn submit" type="submit" value="Save Changes">
                    </p>

                </fieldset>
            </form>
        </section>

`

export async function editPage(ctx) {
    const article = await getArticleById(ctx.params.id);
    ctx.render(editTemplate(article, onSubmit));

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
  
        await editArticle(article._id, { title, category, content });
  
        e.target.reset();
  
        ctx.page.redirect(`/details/${article._id}`);
  
      } catch (error) {
        alert(error.message);
      }
  

    }  
    
}


