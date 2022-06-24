window.addEventListener("load", solve);

function solve() {
  const productType = document.getElementById("type-product");
  const description = document.getElementById("description");
  const clientName = document.getElementById("client-name");
  const clientPhone = document.getElementById("client-phone");
  const sendBtn = document.querySelector("#right > form > button");

  const clearBtn = document.querySelector(".clear-btn");

  const sectionRcvdOrders = document.getElementById("received-orders");
  const sectionCompOrders = document.getElementById("completed-orders");

  sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const isValid =
      description.value != "" &&
      clientName.value != "" &&
      clientPhone.value != "";

    if (isValid) {
      const elements =
        el('div',{className:"container"},
            el('h2', {}, `Product type for repair: ${productType.value}`),
            el('h3', {}, `Client information: ${clientName.value}, ${clientPhone.value}`),
            el('h4', {}, `Description of the problem: ${description.value}`),
            el('button',{className:"start-btn"}, 'Start repair'),
            el('button',{className:"finish-btn",disabled:"true"}, 'Finish repair'),
        );

        sectionRcvdOrders.appendChild(elements);

      const repairBtns = document.querySelectorAll(
        "div.container > button:nth-child(4)"
      );
      const finishBtns = document.querySelectorAll(
        "div.container > button:nth-child(5)"
      );

      const lastIndexR = repairBtns.length - 1;
      const lastIndexF = finishBtns.length - 1;

      repairBtns[lastIndexR].addEventListener("click", (e) => {
        e.target.disabled = true;
        e.target.nextElementSibling.disabled = false;
      });

      finishBtns[lastIndexF].addEventListener("click", (e) => {
        sectionCompOrders.appendChild(e.target.parentElement);
        e.target.previousElementSibling.remove();
        e.target.remove();
      });
    }

    description.value = "";
    clientName.value = "";
    clientPhone.value = "";
  });

  clearBtn.addEventListener("click", (e) => {
    const div = Array.from(e.target.parentElement.querySelectorAll('.container'));
    div.forEach((d) => d.remove());
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
