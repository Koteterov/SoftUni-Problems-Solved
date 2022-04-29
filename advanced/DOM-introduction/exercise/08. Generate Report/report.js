function generateReport() {
  let checkbox = Array.from(
    document.querySelectorAll("input[type='checkbox']")
  );
  let rows = Array.from(document.getElementsByTagName("tbody")[0].children);
  let output = document.getElementById("output");

  let index = [];
  let result = [];

  checkbox.forEach((x, i) => {
    if (x.checked) {
      index.push(i);
    }
  });
  
  rows.forEach((r) => {
    let obj = {};
    index.forEach((i) => {
      let key = checkbox[i].getAttribute("name");
      let value = r.children[i].textContent;
      obj[key] = value;
    });
    result.push(obj);
  });

  output.value = JSON.stringify(result, undefined, 3);
  checkbox.forEach((x) => {
    x.checked = false;
  });
}

