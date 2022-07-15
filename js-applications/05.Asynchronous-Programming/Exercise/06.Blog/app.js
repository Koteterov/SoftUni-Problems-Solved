function attachEvents() {
  const urlPosts = "http://localhost:3030/jsonstore/blog/posts";
  const urlComments = "http://localhost:3030/jsonstore/blog/comments";

  const loadBtn = document.getElementById("btnLoadPosts");
  const viewBtn = document.getElementById("btnViewPost");
  const selectMenue = document.getElementById("posts");

  const title = document.getElementById("post-title");
  const content = document.getElementById("post-body");
  const ulEl = document.getElementById("post-comments");

  loadBtn.addEventListener("click", loadData);

  //loading data
  async function loadData() {
    const resPosts = await fetch(urlPosts);
    const resultPosts = await resPosts.json();

    const resComments = await fetch(urlComments);
    const resultComments = await resComments.json();

    Object.values(resultPosts).forEach((x) => {
      const optionEl = el("option", { value: `${x.id}` }, `${x.title}`);
      selectMenue.appendChild(optionEl);
    });

    //viewing data
    viewBtn.addEventListener("click", view);
    function view() {
      ulEl.replaceChildren();

      Object.values(resultComments).forEach((x) => {
        if (selectMenue.value == x.postId) {
          const liEl = el("li", { id: "x.postId" }, `${x.text}`);
          ulEl.appendChild(liEl);
        }
      });
      Object.values(resultPosts).forEach((x) => {
        if (selectMenue.value == x.id) {
          title.textContent = x.title;
          content.textContent = x.body;
        }
      });
    }
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

attachEvents();


