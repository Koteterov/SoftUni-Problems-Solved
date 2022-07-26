import { html, render } from "../../node_modules/lit-html/lit-html.js";

async function solve() {
  const url = "http://localhost:3030/jsonstore/advanced/table";
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  const tableSection = document.querySelector("tbody");

  const template = (info) => html`
    ${info.map(
      (x) => html`
        <tr>
          <td>${x.firstName} ${x.lastName}</td>
          <td>${x.email}</td>
          <td>${x.course}</td>
        </tr>
      `
    )}
  `;

  const data = Object.values(await getData());
  const result = template(data);
  render(result, tableSection);

  getData();
  async function getData() {
    const res = await fetch(url);
    const result = await res.json();

    return result;
  }

  function onClick() {
    const data = Array.from(document.getElementsByTagName("tr"));
    const inputData = document.getElementById("searchField");

    if (inputData.value == "") {
      return
    }

    data.map((x) => (x.className = ""));
    data.map((x) => {
      if (x.textContent.includes(inputData.value)) {
        x.className = "select";
        // or:
        // x.classList.add("select")
      }
      console.log(x);
      return x;
    });
    inputData.value = "";
  }
}

solve();

