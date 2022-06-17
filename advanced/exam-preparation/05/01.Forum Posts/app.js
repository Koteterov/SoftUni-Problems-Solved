window.addEventListener("load", solve);

function solve() {
  const titleField = document.getElementById("post-title");
  const categoryField = document.getElementById("post-category");
  const textArea = document.getElementById("post-content");
  const publishBtn = document.getElementById("publish-btn");
  const clearBtn = document.getElementById("clear-btn");

  const ulReview = document.getElementById("review-list");
  const ulPublish = document.getElementById("published-list");

  publishBtn.addEventListener("click", publish);

  function publish() {
    let valid =
      titleField.value != "" &&
      categoryField.value != "" &&
      textArea.value != "";

    if (valid) {
      const elements = 
      el("li", "rpost",
        el("article", "",
          el("h4", "", `${titleField.value}`),
          el("p", "", `Category: ${categoryField.value}`),
          el("p", "", `Content: ${textArea.value}`)
        ),
        el("button", "action-btn edit", "Edit"),
        el("button", "action-btn approve", "Approve")
      );

      ulReview.appendChild(elements);

      //   `<li class="rpost">
      // <article>
      // <h4>${titleField.value}</h4>
      // <p>Category: ${categoryField.value}</p>
      // <p>Content: ${textArea.value}</p>
      // </article>
      // <button class="action-btn edit">Edit</button>
      // <button class="action-btn approve">Approve</button>
      // </li>`;

      // ulReview.innerHTML = elements;
    }
    titleField.value = "";
    categoryField.value = "";
    textArea.value = "";
    const editBtn = document.querySelector("button.action-btn:nth-child(2)");
    const approveBtn = document.querySelector("button.action-btn:nth-child(3)");

    editBtn.addEventListener("click", edit);

    function edit(e) {
      let contents = document.querySelector(".rpost > article:nth-child(1)");
      titleField.value = contents.children[0].textContent;
      categoryField.value = contents.children[1].textContent.split(": ")[1];
      textArea.value = contents.children[2].textContent.split(": ")[1];

      document.querySelector(".rpost").remove();
    }

    approveBtn.addEventListener("click", approve);

    function approve() {
      let contents = document.querySelector(".rpost");
      document.querySelector("button.action-btn:nth-child(3)").remove();
      document.querySelector("button.action-btn:nth-child(2)").remove();

      ulPublish.appendChild(contents);
    }
  }

  clearBtn.addEventListener("click", clear);

  function clear() {
    document.querySelector(".rpost").remove();
  }

  function el(type, className, ...content) {
    const element = document.createElement(type);
    if (className != "") {
      element.className = className;
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
