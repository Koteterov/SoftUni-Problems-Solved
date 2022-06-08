function solve() {
  const task = document.getElementById("task");
  const description = document.getElementById("description");
  const date = document.getElementById("date");

  const addBtn = document.getElementById("add");

  const divSections = document.querySelectorAll("section > div:nth-child(2)");
  const divOpen = divSections[1];
  const divInProgress = divSections[2];
  const divComplete = divSections[3];

  addBtn.addEventListener("click", add);

  function add(e) {
    e.preventDefault();

    const valid =
      task.value != "" && description.value != "" && date.value != "";

    if (valid) {
      const startBtn = el("button", { className: "green" }, "Start");
      const deleteBtn = el("button", { className: "red" }, "Delete");
      const divEl = el("div", { className: "flex" }, startBtn, deleteBtn);
      const artEl = el('article',{},
      el('h3',{},`${task.value}`),
      el('p',{},`Description: ${description.value}`),
      el('p',{},`Due Date: ${date.value}`),
      divEl);

      divOpen.appendChild(artEl);

      startBtn.addEventListener("click", start);
      deleteBtn.addEventListener("click", toDelete);

      function start() {
        startBtn.remove();
        deleteBtn.remove();
          const delBtnProgress = el("button", { className: "red" }, "Delete");
          const finishBtnProgress = el("button", { className: "orange" },"Finish");

        divEl.appendChild(delBtnProgress);
        divEl.appendChild(finishBtnProgress);

        divInProgress.appendChild(artEl);

        delBtnProgress.addEventListener("click", (e) => {
          e.target.parentElement.parentElement.remove();
        });

        finishBtnProgress.addEventListener("click", (e) => {
          const art = e.target.parentElement.parentElement;
          divComplete.appendChild(art);
          e.target.parentElement.remove();
        });
      }

      function toDelete() {
        artEl.remove();
      }
    }

    task.value = "";
    description.value = "";
    date.value = "";
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

