window.addEventListener("load", solution);

function solution() {
  const labelElements = Array.from(document.querySelectorAll("#form label"));
  const inputElements = Array.from(document.querySelectorAll("#form input"));
  inputElements.pop();

  const ulPreview = document.getElementById("infoPreview");
  const submitBtn = document.getElementById("submitBTN");
  const editBtn = document.getElementById("editBTN");
  const continueBtn = document.getElementById("continueBTN");
  const blockElement = document.getElementById("block");

  let temp = [];
  submitBtn.addEventListener("click", submit);

  function submit(e) {
    if (inputElements[0].value != "" && inputElements[1].value != "") {
      labelElements.forEach((l, iindex) => {
        let liElements = el(
          "li",
          `${l.textContent} ${inputElements[iindex].value}`
        );
        ulPreview.appendChild(liElements);
      });

      inputElements.forEach((i) => {
        temp.push(i.value);
        i.value = "";
      });
      e.target.disabled = true;
      editBtn.disabled = false;
      continueBtn.disabled = false;
    }
  }

  editBtn.addEventListener("click", edit);

  function edit(e) {
    inputElements.map((x, i) => (x.value = temp[i]));
    //or split liElements - (": ")[0]
    submitBtn.disabled = false;
    e.target.disabled = true;
    continueBtn.disabled = true;

    Array.from(ulPreview.childNodes).forEach((el) => {
      el.remove();
    });

    //or:
    // while (ulPreview.hasChildNodes()) {
    //   ulPreview.removeChild(ulPreview.firstChild);
    // }
  }

  continueBtn.addEventListener("click", toContinue);

  function toContinue() {
    // not accepted in Judge!!!:
    // blockElement.replaceChildren()

    Array.from(blockElement.childNodes).forEach((el) => {
      el.remove();
    });

    //or:
    // while (blockElement.hasChildNodes()) {
    //   blockElement.removeChild(blockElement.firstChild);
    // }
    let h3Element = el("h3", "Thank you for your reservation!");
    blockElement.appendChild(h3Element);

    // or simply:
    // blockElement.innerHTML = `<h3>Thank you for your reservation!</h3>`;
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
