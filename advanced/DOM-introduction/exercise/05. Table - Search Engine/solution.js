function solve() {

  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    const data = Array.from(document.getElementsByTagName("tr"));
    const inputData = document.getElementById("searchField").value;

    data.map((x) => (x.className = ""));
    data.map((x) => {
      if (x.textContent.includes(inputData)) {
        x.className = "select";
        // or:
        // x.classList.add("select")
      }
      return x;
    });
  }
}

