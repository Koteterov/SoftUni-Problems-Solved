function solve() {
  let input = document.getElementById("text").value.toLowerCase();
  let current = document.getElementById("naming-convention").value;

  let result = "";

  if (current == "Camel Case") {
    result = input.split(" ").reduce((acc, el) => {
      return acc + el[0].toUpperCase() + el.slice(1);
    });
  } else if (current == "Pascal Case") {
    result = input.split(" ").reduce((acc, el) => {
      return (
        acc[0].toUpperCase() + acc.slice(1) + el[0].toUpperCase() + el.slice(1)
      );
    });
  } else {
    result = "Error!";
  }
  document.getElementById("result").textContent = result;
}
