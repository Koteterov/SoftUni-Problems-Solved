import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { edit, toDelete } from "./editData.js";

const url = "http://localhost:3030/jsonstore/collections/books/";

export async function load() {
  const tableBody = document.querySelector("body > table > tbody");

  try {
    const res = await fetch(url);
    const dataServer = await res.json();

    const template = (info) => html`
      ${info.map(
        (x) => html`
          <tr>
            <td>${x[1].title}</td>
            <td>${x[1].author}</td>
            <td>
              <button data-id=${x[0]} @click=${(e) => edit(e)}>Edit</button>
              <button data-id=${x[0]} @click=${(e) => toDelete(e)}>
                Delete
              </button>
            </td>
          </tr>
        `
      )}
    `;

    const dataToRender = Object.entries(dataServer);
    const result = template(dataToRender);
    render(result, tableBody);
  } catch (error) {
    console.log(error.message);
  }
}
