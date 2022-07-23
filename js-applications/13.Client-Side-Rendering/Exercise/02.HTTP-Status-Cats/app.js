import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";

const sectionCats = document.getElementById("allCats");

const template = (data) => html`
  <ul>
    ${data.map((c) => html`
    <li>
        <img src="./images/${c.imageLocation}.jpg" width="250" height="250" alt="Card image cap"/>
        <div class="info">
          <button class="showBtn" @click=${(e) => toggle(e)}
          >Show status code</button>
          <div class="status" style="display: none" id="100">
            <h4>Status Code: ${c.statusCode}</h4>
            <p>${c.statusMessage}</p>
          </div>
        </div>
      </li>`)}
  </ul>`;

function toggle(e) {
        e.target.textContent =
          e.target.textContent == "Show status code"
            ? "Hide status code"
            : "Show status code";
        let div = e.target.parentElement.children[1];
        div.style.display = div.style.display == "none" ? "block" : "none";
    
}
const result = template(cats);
render(result, sectionCats);



