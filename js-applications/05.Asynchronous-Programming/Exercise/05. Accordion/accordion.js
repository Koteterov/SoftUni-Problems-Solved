async function solution() {
  const main = document.getElementById("main");

  const urlArticles = "http://localhost:3030/jsonstore/advanced/articles/list";
  const urlContent = "http://localhost:3030/jsonstore/advanced/articles/details/";

  const response = await fetch(urlArticles);
  const result = await response.json();

  result.forEach((x) => {
    getDetails(x._id);
  });

  async function getDetails(id) {
    const resDetails = await fetch(urlContent + id);
    const resultDetails = await resDetails.json();

    const newEl =
      el('div',{className:"accordion"},
          el('div',{className:"head"},
              el('span',{},`${resultDetails.title}`),
              el('button',{className:"button", id:`${resultDetails._id}`},'More')
              ),
          el('div',{},
              el('div',{className:"extra"},
                  el('p',{},`${resultDetails.content}`))
          )
      );
      main.appendChild(newEl);

    //by event delegation:
    newEl.addEventListener("click", (e) => {
      if (e.target.tagName != "BUTTON") return;
      console.log('target ..', e.target);
      console.log('cyrrenttarget ..', e.currentTarget);

      const divEl = e.target.parentElement.parentElement.children[1].firstChild;
      e.target.textContent = e.target.textContent == "LESS" ? "MORE" : "LESS";
      divEl.style.display = divEl.style.display == "block" ? "none" : "block";
    });

    //// by selecting each button:
    // newEl.querySelector(".button").addEventListener("click", show);
    // function show(e) {
    //   const divEl = e.target.parentElement.parentElement.children[1].firstChild;

    //   e.target.textContent = e.target.textContent == "LESS" ? "MORE" : "LESS";
    //   divEl.style.display = divEl.style.display == "block" ? "none" : "block";
    // }
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
