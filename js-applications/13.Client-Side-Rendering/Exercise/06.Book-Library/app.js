import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { load } from "./load.js";
import { submit } from "./submit.js";
import { save } from "./editData.js";

const body = document.querySelector("body");

const template = () => html`
  <button id="loadBooks" @click=${(e) => load(e)}>LOAD ALL BOOKS</button>
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>

  <form id="add-form" @submit=${(e) => submit(e)}>
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title..." />
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author..." />
    <input type="submit" value="Submit" />
  </form>

  <form id="edit-form" @submit=${(e) => save(e)}>
    <input type="hidden" name="id" />
    <h3>Edit book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title..." />
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author..." />
    <input type="submit" value="Save" />
  </form>
`;

const result = template();
render(result, body);

document.getElementById("edit-form").style.display = "none";
