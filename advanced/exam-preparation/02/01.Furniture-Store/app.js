window.addEventListener("load", solve);

function solve() {
  const modelField = document.getElementById("model");
  const yearField = document.getElementById("year");
  const descriptionField = document.getElementById("description");
  const priceField = document.getElementById("price");
  const addBtn = document.getElementById("add");
  const furnList = document.getElementById("furniture-list");
  const totalField = document.querySelector(".total-price");

  addBtn.addEventListener("click", onClick);

  function onClick(e) {
    e.preventDefault();

    const year = Number(yearField.value);
    const price = Number(priceField.value);

    if (
      modelField.value != "" &&
      descriptionField.value != "" &&
      year > 0 &&
      price > 0
    ) {
      const priceFixed = Number(priceField.value).toFixed(2);
      const trElInfo = el(
        "tr",
        el("td", modelField.value),
        el("td", priceFixed)
      );

      const btnTd = el("td");

      const btnMoreInfo = el("button", "More Info");
      btnMoreInfo.classList.add("moreBtn");

      const btnBuyIt = el("button", "Buy it");
      btnBuyIt.classList.add("buyBtn");

      btnTd.appendChild(btnMoreInfo);
      btnTd.appendChild(btnBuyIt);
      trElInfo.appendChild(btnTd);
      trElInfo.classList.add("info");
      furnList.appendChild(trElInfo);

      const trElHide = el("tr");
      const tdYear = el("td", `Year: ${yearField.value}`);
      const tdDescr = el("td", `Description: ${descriptionField.value}`);
      tdDescr.setAttribute("colspan", "3");
      trElHide.appendChild(tdYear);
      trElHide.appendChild(tdDescr);

      trElHide.classList.add("hide");
      furnList.appendChild(trElHide);


      btnMoreInfo.addEventListener("click", moreInfo);

      function moreInfo() {
        if (btnMoreInfo.textContent == "More Info") {
          btnMoreInfo.textContent = "Less Info";
          trElHide.style.display = "contents";
          btnMoreInfo.classList.add("moreBtn");
        } else {
          btnMoreInfo.textContent = "More Info";
          trElHide.style.display = "none";
          btnMoreInfo.classList.add("moreBtn");
        }
      }

      btnBuyIt.addEventListener("click", buy);

      function buy() {
        const price = trElInfo.querySelectorAll("td")[1].textContent;
        totalField.textContent = (
          Number(totalField.textContent) + Number(price)
        ).toFixed(2);
        trElInfo.style.display = "none";
        trElHide.style.display = "none";
      }
    }

    modelField.value = "";
    yearField.value = "";
    descriptionField.value = "";
    priceField.value = "";
  }


  function el(type, ...content) {
    const element = document.createElement(type);
    for (let item of content) {
      if (typeof item == "string" || typeof item == "number") {
        item = document.createTextNode(item);
      }
      element.appendChild(item);
    }
    return element;
  }
}

