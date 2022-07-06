window.addEventListener("load", solve);

function solve() {
  let make = document.getElementById("make");
  let model = document.getElementById("model");
  let year = document.getElementById("year");
  let fuel = document.getElementById("fuel");
  let originalCost = document.getElementById("original-cost");
  let sellingPrice = document.getElementById("selling-price");

  let tableBody = document.getElementById("table-body");

  let ulCarsList = document.getElementById("cars-list");

  let publishBtn = document.getElementById("publish");

  let profit = document.getElementById("profit");

  publishBtn.addEventListener("click", publish);

  let total = 0;

  function publish(e) {
    e.preventDefault();

    if (
      make.value == "" ||
      model.value == "" ||
      year.value == "" ||
      fuel.value == "" ||
      originalCost.value == "" ||
      sellingPrice.value == "" ||
      originalCost.value > sellingPrice.value
    ) {
      return;
    }

    let editBtn = el("button", { className: "action-btn edit" }, "Edit");
    let sellBtn = el("button", { className: "action-btn sell" }, "Sell");
    let trEl = 
    el("tr", { className: "row" },
      el("td", {}, `${make.value}`),
      el("td", {}, `${model.value}`),
      el("td", {}, `${year.value}`),
      el("td", {}, `${fuel.value}`),
      el("td", {}, `${originalCost.value}`),
      el("td", {}, `${sellingPrice.value}`),
      el("td", {}, editBtn, sellBtn)
    );
    tableBody.appendChild(trEl);

    editBtn.addEventListener("click", edit);

    function edit(e) {
      let make1 = e.target.parentElement.parentElement.children[0].textContent;
      let model1 = e.target.parentElement.parentElement.children[1].textContent;
      let year1 = e.target.parentElement.parentElement.children[2].textContent;
      let fuel1 = e.target.parentElement.parentElement.children[3].textContent;
      let orCost1 =
        e.target.parentElement.parentElement.children[4].textContent;
      let sellPrice1 =
        e.target.parentElement.parentElement.children[5].textContent;

      make.value = make1;
      model.value = model1;
      year.value = year1;
      fuel.value = fuel1;
      originalCost.value = orCost1;
      sellingPrice.value = sellPrice1;

      e.target.parentElement.parentElement.remove();
    }

    sellBtn.addEventListener("click", sell);

    function sell(e) {
      let make1 = e.target.parentElement.parentElement.children[0].textContent;
      let model1 = e.target.parentElement.parentElement.children[1].textContent;
      let year1 = e.target.parentElement.parentElement.children[2].textContent;
      let orCost1 =
        e.target.parentElement.parentElement.children[4].textContent;
      let sellPrice1 =
        e.target.parentElement.parentElement.children[5].textContent;

      let diff = Number(sellPrice1) - Number(orCost1);
      total += diff;

      let liEl = 
      el("li", { className: "each-list" },
        el("span", {}, `${make1} ${model1}`),
        el("span", {}, `${year1}`),
        el("span", {}, `${diff}`)
      );

      ulCarsList.appendChild(liEl);

      e.target.parentElement.parentElement.remove();

      profit.textContent = total.toFixed(2);
    }

    make.value = "";
    model.value = "";
    year.value = "";
    fuel.value = "";
    originalCost.value = "";
    sellingPrice.value = "";
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
