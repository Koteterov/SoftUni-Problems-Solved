function solve() {
  let selectMenu = document.getElementById("selectMenuTo");

  const binary = document.createElement("option");
  binary.textContent = "Binary";
  binary.value = 'binary'
  selectMenu.add(binary);

  const hexadecimal = document.createElement("option");
  hexadecimal.textContent = "Hexadecimal";
  hexadecimal.value = 'hexadecimal'
  selectMenu.add(hexadecimal);

  button = document
    .querySelector("#container button")
    .addEventListener("click", convert);

  function convert() {
    let input = document.getElementById("input").value;
    let output = document.getElementById("result");

    if (selectMenu.value == "binary") {
      output.value = Number(input).toString(2);

    } else if (selectMenu.value == "hexadecimal") {
      output.value = Number(input).toString(16).toUpperCase();
    }

  

  }
}



