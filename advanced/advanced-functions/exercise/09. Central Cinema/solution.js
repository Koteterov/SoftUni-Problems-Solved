function solve() {
  let name = document.querySelector('input[placeholder="Name"]');
  let hall = document.querySelector('input[placeholder="Hall"]');
  let price = document.querySelector('input[placeholder="Ticket Price"]');

  let onScreenBtn = document.querySelector("#container button");
  let clearBtn = document.querySelector("#archive button");
  let ulMovie = document.querySelector("#movies ul");
  let sectionArchive = document.querySelector("#archive ul");

  onScreenBtn.addEventListener("click", onScreen);

  function onScreen(e) {
    e.preventDefault();

    if (
      name.value != "" &&
      hall.value != "" &&
      !isNaN(Number(price.value)) &&
      price.value != ""
    ) {
      let liElement = document.createElement("li");
      let spanElement = document.createElement("span");
      spanElement.textContent = name.value;
      liElement.appendChild(spanElement);

      let strongElement = document.createElement("strong");
      strongElement.textContent = `Hall: ${hall.value}`;
      liElement.appendChild(strongElement);
      ulMovie.appendChild(liElement);

      let divElelemt = document.createElement("div");
      let secondStrongEl = document.createElement("strong");
      secondStrongEl.textContent = Number(price.value).toFixed(2);
      let inputElement = document.createElement("input");
      inputElement.placeholder = "Ticket Sold";
      let buttonArchive = document.createElement("button");
      buttonArchive.textContent = "Archive";

      divElelemt.appendChild(secondStrongEl);
      divElelemt.appendChild(inputElement);
      divElelemt.appendChild(buttonArchive);

      liElement.appendChild(divElelemt);

      name.value = "";
      hall.value = "";
      price.value = "";

      buttonArchive.addEventListener("click", archive);

      function archive(e) {

        let ticketQty = e.target.parentNode.children[1].value;
        let ticketPrice = e.target.parentNode.children[0].textContent;
        let name = e.target.parentNode.parentNode.children[0].textContent;

        if (!isNaN(Number(ticketQty)) && ticketQty != "") {

          let child = e.target.parentNode.parentNode
          ulMovie.removeChild(child)

          let liElement = document.createElement("li");
          let spanElement = document.createElement("span");
          spanElement.textContent = name;
          let strongElement = document.createElement("strong");
          strongElement.textContent = `Total amount: ${Number(
            ticketQty * ticketPrice
          ).toFixed(2)}`;

          let buttonDelete = document.createElement("button");
          buttonDelete.textContent = "Delete";

          liElement.appendChild(spanElement);
          liElement.appendChild(strongElement);
          liElement.appendChild(buttonDelete);
          sectionArchive.appendChild(liElement);

          buttonDelete.addEventListener("click", function remove(e) {
            let element = e.target.parentNode.parentNode;
            element.removeChild(liElement);
          });
        }
      }
    }
  }

  clearBtn.addEventListener("click", clear);

  function clear(e) {
    let parent = e.target.parentNode.children[1];
    parent.innerHTML = "";
  }
}

