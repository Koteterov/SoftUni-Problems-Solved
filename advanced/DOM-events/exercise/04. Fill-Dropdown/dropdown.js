function addItem() {
  let newItemText = document.getElementById("newItemText");
  let newItemValue = document.getElementById("newItemValue");

  let option = document.createElement("option");
  option.value = newItemValue.value;
  option.textContent = newItemText.value;

  document.getElementById("menu").appendChild(option);

  newItemValue.value = "";
  newItemText.value = "";
}


