import { html, render } from "../../node_modules/lit-html/lit-html.js";

const btn = document.getElementById("btnLoadTowns");
btn.addEventListener("click", add);
const divEl = document.getElementById("root");

const template = (data) => html`
  <ul>
    ${data.map((t) => html`<li>${t}</li>`)}
  </ul>
`;

function add(e) {
  e.preventDefault();
  const input = document.getElementById("towns");
  const inputData = input.value.split(", ");

  if (input.value == "") {
    return;
  }

  const result = template(inputData);

  render(result, divEl);

  input.value = "";
}
