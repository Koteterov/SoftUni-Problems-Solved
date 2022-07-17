function attachEvents() {
  const ulEl = document.getElementById("phonebook");
  const loadBtn = document.getElementById("btnLoad");
  const creatBtn = document.getElementById("btnCreate");

  const personInput = document.getElementById("person");
  const phoneInput = document.getElementById("phone");

  const url = `http://localhost:3030/jsonstore/phonebook/`;

  loadBtn.addEventListener("click", async () => {
    const res = await fetch(url);
    const data = await res.json();

    ulEl.replaceChildren();
    Object.values(data).forEach((x) => {
      const liEl =
        el('li',{},`${x.person}: ${x.phone}`,
            el('button',{id:`${x._id}`}, 'Delete'));

        ulEl.appendChild(liEl);

      liEl.querySelector("button").addEventListener("click", toDelete);
    });
  });

  async function toDelete(e) {
    await fetch(url + `${e.target.id}`, { method: "DELETE" });
    e.target.parentElement.remove();
  }

  creatBtn.addEventListener("click", async () => {
    if (isNaN(Number(phoneInput.value)) ) {
        return alert('Invalid number') 
    }
    if (personInput.value == "" || phoneInput.value == "") {
      return alert("Both input fields must be filled in!");
    }
    const info = {
      person: personInput.value,
      phone: phoneInput.value,
    };
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify(info),
    });

    loadBtn.click();
    personInput.value = "";
    phoneInput.value = "";
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

attachEvents();
