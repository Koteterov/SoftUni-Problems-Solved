let url = "http://localhost:3030/jsonstore/cookbook/details";


async function getDetails() {
  response = await fetch(url);
  result = await response.json();
  return result;
}
window.addEventListener("load", async () => {
  let pElLoading =  document.querySelector("body > main> p")
  let main = document.querySelector("main");

  let details = await getDetails();

  function creatTitle() {
    //Recipe 1...
    Object.values(details).forEach((x) => {
      let firstArtPreview =
        el('article',{className:"preview"},
          el('div',{className:"title"},
              el("h2", {},`${x.name}`)),
          el('div',{className:"small"},
              el('img',{src:`${x.img}`})),
            );
        main.appendChild(firstArtPreview);
        pElLoading.remove()

      //Ingredients:
      let ulEl = el("ul", {});
      x.ingredients.forEach((x) => {
        let liEl = el('li',{},x)
        ulEl.appendChild(liEl);
      });

      //Preparation:
      let divEl = el("div", { className: "description" },
        el("h3", {}, `Preparation:`)
      );
      x.steps.forEach((x) => {
       let pEl = el('p',{},x)
        divEl.appendChild(pEl);
      });

      let secondArtPreview =
        el('article',{},
          el('h2',{},`${x.name}`),
          el('div',{className:"band"},
              el('div',{className:"thumb"},
                  el('img',{src:`${x.img}`})),
              el('div',{},
                  el('div',{className:"ingredients"},
                      el('h3',{},`Ingredients:`),
                      ulEl))),
          divEl);


        firstArtPreview.addEventListener("click", () => {
          firstArtPreview.replaceWith(secondArtPreview);
        });
    });
  }

  creatTitle();
});

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
