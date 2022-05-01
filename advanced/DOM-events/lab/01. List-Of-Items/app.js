function addItem() {
  let liElement = document.createElement("li");
  let ulElement = document.getElementById("items");
  let input = document.getElementById("newItemText").value;

  liElement.textContent = input;
  ulElement.appendChild(liElement);

  document.getElementById("newItemText").value = "";
}
