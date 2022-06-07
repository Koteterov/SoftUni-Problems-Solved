function solve() {
  const fields = Array.from(document.querySelectorAll("#container input"));
  const addBtn = document.querySelector("#container button");
  const petList = document.querySelector("#adoption ul");
  const addoptedList = document.querySelector("#adopted ul");

  addBtn.addEventListener("click", addPet);

  
  function addPet(e) {
    e.preventDefault();
    console.log(5555);
    const [name, age, kind, owner] = fields.map((f) => f.value.trim());

    if (
      fields.map((f) => f.value.trim()).some((v) => v == "") ||
      Number.isNaN(Number(age))
    ) {
      return;
    }

    const contactBtn = el("button", {}, "Contact with owner");

    const pet = el("li", {},
      el("p", {},
        el("strong", {}, name),
        " is a ",
        el("strong", {}, age),
        " year old ",
        el("strong", {}, kind)
      ),
      el("span", {}, `Owner: ${owner}`),
      contactBtn
    );
    petList.appendChild(pet);

    contactBtn.addEventListener("click", contact);
    fields.forEach((f) => (f.value = ""));

    function contact() {
      const confirmInput = el("input", { placeholder: "Enter your names" });
      const confirmBtn = el("button", {}, "Yes! I take it!");
      const confirmDiv = el("div", {}, confirmInput, confirmBtn);

      confirmBtn.addEventListener("click", adopt.bind(null, confirmInput, pet));

      contactBtn.remove();
      pet.appendChild(confirmDiv);
    }
  }

  function adopt(input, pet, event) {
      console.log('event:',event.target);
    const newOwner = input.value.trim();

    if (newOwner == "") {
      return;
    }
    const checkBtn = el("button", {}, "Checked");
    checkBtn.addEventListener("click", check.bind(null, pet));

    pet.querySelector("div").remove();
    pet.appendChild(checkBtn);

    pet.querySelector("span").textContent = `New Owner: ${newOwner}`;

    addoptedList.appendChild(pet);
  }

  function check(pet) {
    pet.remove();
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
