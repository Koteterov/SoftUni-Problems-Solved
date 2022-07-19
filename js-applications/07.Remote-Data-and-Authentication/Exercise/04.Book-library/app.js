function solve() {
  const titleInput = document.querySelector("body > form > input:nth-child(3)");
  const authorInput = document.querySelector(
    "body > form > input:nth-child(5)"
  );
  const submitBtn = document.querySelector("body > form > button");
  const formH3 = document.querySelector("body > form > h3");


  const loadBtn = document.getElementById("loadBooks");
  loadBtn.addEventListener("click", load);

  const form = document.querySelector("body > form");
  form.addEventListener("submit", submit);

const url = `http://localhost:3030/jsonstore/collections/books/`;

async function load() {
  const tableBody = document.querySelector("body > table:nth-child(2) > tbody");
  const res = await fetch(url);
  const data = await res.json();

  tableBody.replaceChildren();
  Object.entries(data).forEach((x) => {
    const editBtn = el("button", { id: `${x[0]}` }, "Edit");
    const delBtn = el("button", { id: `${x[0]}` }, "Delete");
    const trEl = el(
      "tr",
      {},
      el("td", {}, `${x[1].title}`),
      el("td", {}, `${x[1].author}`),
      el("td", {}, editBtn, delBtn)
    );
    tableBody.appendChild(trEl);

    editBtn.addEventListener("click", edit);
    delBtn.addEventListener("click", toDelete);
  });
}

function edit(e) {

  titleInput.value =
    e.target.parentElement.parentElement.children[0].textContent;
  authorInput.value =
    e.target.parentElement.parentElement.children[1].textContent;
  submitBtn.textContent = "Save";
  submitBtn.id = e.target.id;
  formH3.textContent = "Edit FORM";

  //if needed to remove the book for editting from the list:
  // e.target.parentElement.parentElement.remove();
}

async function toDelete(e) {
  const id = e.target.id;
  await fetch(url + id, { method: "DELETE" });
  e.target.parentElement.parentElement.remove();
}

async function submit(e) {
  e.preventDefault();

  submitBtn.textContent = "Submit";
  formH3.textContent = "FORM";

  const formData = new FormData(e.currentTarget);
  const titleInput = formData.get("title");
  const authorInput = formData.get("author");

  if (submitBtn.id) {

    if (titleInput == "" || authorInput == "") {
      return alert("Please fill in!");
    }

    const info = {
      author: authorInput,
      title: titleInput,
    };
    await fetch(url + submitBtn.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify(info),
    });
    submitBtn.id = "";
  } else {

    if (titleInput == "" || authorInput == "") {
      return alert("Please fill in!");
    }

    const info = {
      author: authorInput,
      title: titleInput,
    };
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify(info),
    });
  }

  e.target.reset();

  // if needed to render info right away:
  load();
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

solve();


