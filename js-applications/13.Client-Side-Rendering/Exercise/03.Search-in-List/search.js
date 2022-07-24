import { towns } from "./towns.js";
import { html, render } from "../../node_modules/lit-html/lit-html.js";

const divElTowns = document.getElementById("towns");
const divElResult = document.getElementById("result");
const inputEl = document.getElementById("searchText");

document.querySelector("button").addEventListener("click", search);

const template = (data) => html`
  <ul>
    ${data.map((t) => html` <li>${t}</li> `)}
  </ul>
`;


let counter = 0;

function search() {

   
  const inputLowerCase = inputEl.value.toLocaleLowerCase();

  const liEls = divElTowns.querySelectorAll("li");

  if (inputEl.value == "") {
    return;
  }

  liEls.forEach((li) => {
    if (li.textContent.toLocaleLowerCase().includes(inputLowerCase)) {
      li.classList.add("active");
      counter++;

    } else {
      li.classList.remove("active");
    }
  });

  inputEl.value = "";
  showCount();
}

const result = template(towns);
render(result, divElTowns);

function showCount() {
  divElResult.textContent = `${counter} matches found`;

  counter = 0;
}



