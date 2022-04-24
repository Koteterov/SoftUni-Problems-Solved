function extractText() {
  let listed = document.querySelectorAll("ul#items li");
  let textArea = document.querySelector("#result");

  for (let node of listed) {
    textArea.value += node.textContent + "\n";
  }
}

