function solve() {
  const text = document.getElementById("input").value;
  const output = document.getElementById("output");

  const inputText = text
    .split(".")
    .filter((x) => x.length >= 1)
    .map((x) => x.trim());
    console.log(inputText);

  while (inputText.length > 0) {
    let newText = inputText.splice(0, 3).map(x => x + '.').join(' ')
    //or:
    // .join(". ") + ".";
    let para = document.createElement("p");
    para.textContent = newText;
    output.appendChild(para);
  }
}

// function solve() {
//   const html = {
//     textField: document.getElementById("input"),
//     outputDiv: document.getElementById("output"),
//   };
//   const workArr = html.textField.value
//     .split(".")
//     .filter((x) => x.length >= 1)
//     .map((x) => x.trim());

//   const tagTemplate = (tag, text) => `<${tag}>${text}</${tag}>`;
//   let tempIndex = 0;

//   html.outputDiv.innerHTML = workArr
//     .reduce((a, v, i) => {
//       if (i % 3 === 0 && i !== 0) tempIndex += 1;
//       a[tempIndex] = (a[tempIndex] || "") + `${v}.`;
//       return a;
//     }, [])
//     .map((x) => tagTemplate("p", x))
//     .join("\n");
// }
