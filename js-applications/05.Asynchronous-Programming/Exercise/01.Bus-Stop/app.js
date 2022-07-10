async function getInfo() {
  const id = document.getElementById("stopId");
  const url = `http://localhost:3030/jsonstore/bus/businfo/${id.value}`;

  const stopName = document.getElementById("stopName");
  const ulBuses = document.getElementById("buses");

  try {

    const response = await fetch(url);
    const result = await response.json();

    stopName.textContent = result.name;
    ulBuses.replaceChildren();

    Object.entries(result.buses).forEach((x) => {
      const liEl = el('li',{},`bus ${x[0]} arrives in ${x[1]} minutes`);
      ulBuses.appendChild(liEl);
    });
    id.value = "";

  } catch (error) {
    stopName.textContent = "Error";
    id.value = "";
    ulBuses.replaceChildren();
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

