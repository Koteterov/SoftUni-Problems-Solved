function addItem() {
  let newEl = document.getElementById("newItemText").value;
  let ulEl = document.getElementById("items");

  if (newEl.length == 0) return;

  let listEl = document.createElement("li");
  listEl.textContent = newEl;
  ulEl.appendChild(listEl);

  let remove = document.createElement("a");
  let linkEl = document.createTextNode("[Delete]");

  remove.appendChild(linkEl);
  remove.href = "#";
  listEl.appendChild(remove);

  remove.addEventListener("click", () => listEl.remove());

}




