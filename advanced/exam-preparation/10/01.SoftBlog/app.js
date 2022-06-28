function solve() {
  const artSection = document.querySelector(
    ".site-content > main:nth-child(1) > section"
  );
  const creatorInput = document.getElementById("creator");
  const titleInput = document.getElementById("title");
  const categoryInput = document.getElementById("category");
  const contentInput = document.getElementById("content");

  const archiveSection = document.querySelector(".archive-section > ol");

  const creatBtn = document.querySelector(".btn");

  // button Creat functionality
  creatBtn.addEventListener("click", creat);

  function creat(e) {
    e.preventDefault();
    const deleteBtn = el("button", { className: "btn delete" }, "Delete");
    const archiveBtn = el("button", { className: "btn archive" }, "Archive");
    const article =
       el('article',{},
          el('h1',{},`${titleInput.value}`),
          el('p',{},`Category: `,el('strong',{},`${categoryInput.value}`)),
          el('p',{},`Creator: `,el('strong',{},`${creatorInput.value}`)),
          el('p',{},`${contentInput.value}`),
          el('div',{className:"buttons"},
             deleteBtn,
             archiveBtn));

      artSection.appendChild(article);

    // archive button functionality
    archiveBtn.addEventListener("click", (e) => {
      const title = e.target.parentElement.parentElement.children[0];
      const liEl = el("li", {}, `${title.textContent}`);
      archiveSection.appendChild(liEl);
      article.remove();
      // sorting li elements
      const liElements = Array.from(document.querySelectorAll("li"));
      liElements
        .sort((a, b) => a.textContent.localeCompare(b.textContent))
        .forEach((li) => archiveSection.appendChild(li));
    });

    // delete button funtionality
    deleteBtn.addEventListener("click", () => {
      article.remove();
    });

    creatorInput.value = "";
    titleInput.value = "";
    categoryInput.value = "";
    contentInput.value = "";
  }

  function el(type, attr, ...content) {
    const element = document.createElement(type);
    for (let prop in attr) {
      element[prop] = attr[prop];
    }
    for (let item of content) {
      if (typeof item == "string" || typeof item == "number") {
        item = document.createTextNode(item);
      }
      element.appendChild(item);
    }
    return element;
  }
}

