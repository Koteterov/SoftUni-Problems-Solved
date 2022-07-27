import { load } from "./load.js";

const url = "http://localhost:3030/jsonstore/collections/books/";

export async function save(e) {
  e.preventDefault();

  hideSection(document.getElementById("edit-form"));
  const titleInput = document.querySelector("#edit-form > input:nth-child(4)");
  const authorInput = document.querySelector("#edit-form > input:nth-child(6)");
  const saveBtn = document.querySelector("#edit-form > input:nth-child(7)");

  const id = saveBtn.dataset.id;

  if (titleInput.value == "" || authorInput.value == "") {
    return alert("Please fill in!");
  }
  try {
    const info = {
      author: authorInput.value,
      title: titleInput.value,
    };
    await fetch(url + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify(info),
    });

    load();
  } catch (error) {
    console.log(error.message);
  }
}

export function edit(e) {
  showSection(document.getElementById("edit-form"));
  const titleInput = document.querySelector("#edit-form > input:nth-child(4)");
  const authorInput = document.querySelector("#edit-form > input:nth-child(6)");
  const saveBtn = document.querySelector("#edit-form > input:nth-child(7)");
  const id = e.target.dataset.id;

  saveBtn.dataset.id = id;

  titleInput.value =
    e.target.parentElement.parentElement.children[0].textContent;
  authorInput.value =
    e.target.parentElement.parentElement.children[1].textContent;
}

const editB = edit.bind(null)
console.log(editB);

export async function toDelete(e) {
  const id = e.target.dataset.id;
  try {
    await fetch(url + id, { method: "DELETE" });
    load();
    
  } catch (error) {
    console.log(error.message);
  }
}

function hideSection(section) {
  section.style.display = "none";
}

function showSection(section) {
  section.style.display = "block";
}
