function solve() {
  const fName = document.getElementById("fname");
  const lName = document.getElementById("lname");
  const email = document.getElementById("email");
  const birth = document.getElementById("birth");
  const position = document.getElementById("position");
  const salary = document.getElementById("salary");

  const hireBtn = document.getElementById("add-worker");

  const table = document.getElementById("tbody");
  const sum = document.getElementById("sum");

  const inputFields = Array.from(document.getElementsByTagName("input"));

  hireBtn.addEventListener("click", hire);

  function hire(e) {
    e.preventDefault();

    const isValid = inputFields.every((f) => f.value != "");

    if (isValid) {
      const elements =
        el('tr',{},
            el('td',{}, `${fName.value}`),
            el('td',{}, `${lName.value}`),
            el('td',{}, `${email.value}`),
            el('td',{}, `${birth.value}`),
            el('td',{}, `${position.value}`),
            el('td',{}, `${salary.value}`),
            el('td',{},
                el('button',{className:"fired"},'Fired'),
                el('button',{className:"edit"},'Edit'),
              )
          );

      table.appendChild(elements);

      sum.textContent = Number(sum.textContent) + Number(salary.value);
      sum.textContent = Number(sum.textContent).toFixed(2);
      const firedBtn = document.querySelectorAll(
        "#tbody > tr > td > button:nth-child(1)"
      );
      const editBtn = document.querySelectorAll(
        "#tbody > tr > td > button:nth-child(2)"
      );

      const firedBtnInList = firedBtn[firedBtn.length - 1];
      const editBtnInList = editBtn[editBtn.length - 1];

      inputFields.forEach((f) => (f.value = ""));

      editBtnInList.addEventListener("click", edit);

      function edit(e) {
        const content = Array.from(
          e.target.parentElement.parentElement.getElementsByTagName("td")
        );
        content.pop();
        inputFields.map((f, index) => (f.value = content[index].textContent));

        sum.textConten = Number(sum.textContent) - Number(salary.value);

        sum.textContent = sum.textConten.toFixed(2);

        e.target.parentElement.parentElement.remove();
      }
      
      firedBtnInList.addEventListener("click", fired);

      function fired(e) {
        const salary =
          e.target.parentElement.parentElement.children[5].textContent;

          sum.textConten = Number(sum.textContent) - Number(salary);

          sum.textContent = sum.textConten.toFixed(2);
  
  
        e.target.parentElement.parentElement.remove();
      }
    }
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
solve();


