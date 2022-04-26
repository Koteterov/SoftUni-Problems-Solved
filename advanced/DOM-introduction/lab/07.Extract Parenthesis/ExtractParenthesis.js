function extract() {

  let paragr = document.getElementById("content").textContent;
  let pattaren = /\(([^)]+)\)/g; // or /\((.+?)\)/g

  let match = pattaren.exec(paragr);
  let result = [];

  while (match) {
    result.push(match[1]);

    match = pattaren.exec(paragr);
  }
  return result.join("; ");
}


