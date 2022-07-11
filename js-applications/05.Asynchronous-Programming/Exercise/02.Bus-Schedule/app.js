function solve() {
  const infoSpan = document.querySelector(".info");
  const departBtn = document.getElementById("depart");
  const arriveBtn = document.getElementById("arrive");

  let stop = { next: "depot" };

  async function depart() {
    try {
      const response = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${stop.next}`);
      const result = await response.json();

      stop = result;

      infoSpan.textContent = `Next stop ${result.name}`;
      departBtn.disabled = true;
      arriveBtn.disabled = false;

    } catch (error) {
      infoSpan.textContent = "Error";
      departBtn.disabled = true;
      arriveBtn.disabled = true;
    }
  }

   function arrive() {

    infoSpan.textContent = `Arriving at ${stop.name}`;
    departBtn.disabled = false;
    arriveBtn.disabled = true;


  }

  return {
    depart,
    arrive,
  };
}

let result = solve();


