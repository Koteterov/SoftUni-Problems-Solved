function create(words) {
  let content = document.getElementById("content");

  words.forEach((w) => {
    let divElement = document.createElement("div");
    content.appendChild(divElement);

    let pElement = document.createElement("p");
    pElement.textContent = w;
    pElement.style.display = "none";

    divElement.appendChild(pElement);

    divElement.addEventListener("click", (e) => {
      e.target.children[0].style.display = "block";
    });
  });

  // or - for the eventListener:
  //   let divEl = document.querySelectorAll("div div");

  //   for (const div of divEl) {
  //     div.addEventListener("click", (e) => {
  //       e.target.children[0].style.display = "block";
  //     });
  //   }
}

