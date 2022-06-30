function solution() {
  const input = document.querySelector(
    "section.card:nth-child(1) > div > input"
  );
  const addBtn = document.querySelector(
    "section.card:nth-child(1) > div > button"
  );

  const ulListGift = document.querySelector("section.card:nth-child(2) > ul");
  const ulSentGift = document.querySelector("section.card:nth-child(3) > ul");
  const ulDiscardedGift = document.querySelector(
    "section.card:nth-child(4) > ul"
  );

  //add btn
  addBtn.addEventListener("click", (e) => {
    const sendBtn = el('button',{className:"sendButton"},'Send');
    const discBtn = el('button',{className:"discardButton"},'Discard');
    const liEl =
    el('li',{className:"gift"},`${input.value}`,
    sendBtn,discBtn);

    console.log(ulListGift);
    ulListGift.appendChild(liEl);
    Array.from(document.querySelectorAll("section.card:nth-child(2) > ul > li"))
      .sort((a, b) => a.textContent.localeCompare(b.textContent))
      .forEach((li) => ulListGift.appendChild(li));

    input.value = "";

    // send btn
    sendBtn.addEventListener("click", (e) => {
      ulSentGift.appendChild(e.target.parentElement);
      sendBtn.remove();
      discBtn.remove();
    });

    // discard btn
    discBtn.addEventListener("click", (e) => {
      ulDiscardedGift.appendChild(e.target.parentElement);
      sendBtn.remove();
      discBtn.remove();
    });
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
}
