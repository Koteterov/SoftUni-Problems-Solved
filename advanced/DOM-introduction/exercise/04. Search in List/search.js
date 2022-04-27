function search() {
  let data = document.getElementById("towns").children;
  let searchText = document.getElementById("searchText").value;
  let result = document.getElementById("result");

  let count = 0;

  for (let town of Array.from(data)) {
    if (town.textContent.includes(searchText)) {
      town.style.textDecoration = "underline";
      town.style.fontWeight = "bold";
      count++;
    }
  }

  result.textContent = `${count} matches found`;
}
