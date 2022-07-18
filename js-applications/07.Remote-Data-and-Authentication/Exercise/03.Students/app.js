const url = `http://localhost:3030/jsonstore/collections/students/`;
const form = document.getElementById("form");
const submitBtn = document.getElementById("submit");
const tableBody = document.querySelector("#results > tbody:nth-child(2)");

async function loadData() {
  const res = await fetch(url);
  const data = await res.json();

  Object.values(data).forEach((x) => {
    const trEl =
        el('tr',{},
            el('td',{},`${x.firstName}`),
            el('td',{},`${x.lastName}`),
            el('td',{},`${x.facultyNumber}`),
            el('td',{},`${x.grade}`),
        );
      tableBody.appendChild(trEl);
  });
}
loadData();

// creat new student
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const fName = formData.get("firstName");
  const lName = formData.get("lastName");
  const fNumber = formData.get("facultyNumber");
  const gradeInput = formData.get("grade");

  const all = [...formData.entries()];

  if (isNaN(Number(gradeInput))) {
    return alert("grade must be a number!");
  }
  if (all.some((x) => x[1] == "")) {
    return alert("Please fill in all fields!");
  }
  
  const info = {
    firstName: fName,
    lastName: lName,
    facultyNumber: fNumber,
    grade: Number(gradeInput).toFixed(2),
  };
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },

    body: JSON.stringify(info),
  });

  loadData();
  e.target.reset();
  tableBody.replaceChildren();
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



