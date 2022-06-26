window.addEventListener("load", solve);

function solve() {
  const inputFields = Array.from(document.getElementsByTagName("input"));

  const divAllHits = document.querySelector(".all-hits-container");
  const divSaved = document.querySelector(".saved-container");
  const divLikes = document.querySelector(".likes");
  const addBtn = document.getElementById("add-btn");

  const totalLikes = divLikes.children[0];


  addBtn.addEventListener("click", add);

  let total = 0;


  function add(e) {
    e.preventDefault();

    // const valid = inputFields.every(f => f.value != "");
    // if (valid) {
    // }
      
    // check input validity 
    const invalid = inputFields.some(f => f.value == "");

    if (invalid) {
      return
    }

    const saveBtn = el("button", { className: "save-btn" }, "Save song");
    const likeBtn = el("button", { className: "like-btn" }, "Like song");
    const deleteBtn = el("button", { className: "delete-btn" }, "Delete");

    const divHits =
    el('div',{className:"hits-info"},
    el('img',{src:"./static/img/img.png"}),
    el('h2',{},`Genre: ${inputFields[0].value}`),
    el('h2',{},`Name: ${inputFields[1].value}`),
    el('h2',{},`Author: ${inputFields[2].value}`),
    el('h3',{},`Date: ${inputFields[3].value}`),
    saveBtn,
    likeBtn,
    deleteBtn);

    divAllHits.appendChild(divHits);

    // Like btn functionality
    likeBtn.addEventListener("click", (e) => {
      total++;
      totalLikes.textContent = `Total Likes: ${total}`;
      e.target.disabled = "false";

      console.log(totalLikes.textContent);
    });


    // Save btn functionality
    saveBtn.addEventListener("click", (e) => {
      divSaved.appendChild(e.target.parentElement);
      e.target.nextElementSibling.remove();
      e.target.remove();
    });


    // Delete btn functionality
    deleteBtn.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });


    
    inputFields.forEach((f) => (f.value = ""));
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
