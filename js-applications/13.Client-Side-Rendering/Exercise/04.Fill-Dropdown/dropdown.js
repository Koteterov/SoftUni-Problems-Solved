import { html, render } from "../../node_modules/lit-html/lit-html.js";

const url = "http://localhost:3030/jsonstore/advanced/dropdown";

const selectEl = document.getElementById("menu");
const input = document.getElementById("itemText");

document.querySelector("form").addEventListener("submit", addItem);

const template = (data) => html`
  ${data.map((x) => html`<option value=${x._id}>${x.text}</option>`)}
`;

getData();
async function getData() {
  const res = await fetch(url);
  const data = await res.json();

  const info = Object.values(data);
  const result = template(info);
  render(result, selectEl);
}

async function addItem(e) {
  e.preventDefault();

  const city = input.value;

  if (city == "") {
    return;
  }

  try {
    const response = await fetch(url, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: city }),
    });

    getData();

  } catch (error) {
    console.log(error.message);
  }

  e.target.reset();
}
