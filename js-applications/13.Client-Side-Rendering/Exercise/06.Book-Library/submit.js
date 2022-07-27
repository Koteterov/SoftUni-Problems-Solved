import { load } from "./load.js";

const url = "http://localhost:3030/jsonstore/collections/books/";

export async function submit(e) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const titleInput = formData.get("title");
  const authorInput = formData.get("author");

  if (titleInput == "" || authorInput == "") {
    return alert("Please fill in!");
  }

  try {
    const info = {
      author: authorInput,
      title: titleInput,
    };
    const res = await fetch(url, {
      method: "post",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify(info),
    });

    load();
    e.target.reset();
  } catch (error) {
    console.log(error.message);
  }
}
