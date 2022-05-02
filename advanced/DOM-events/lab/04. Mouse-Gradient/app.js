function attachGradientEvents() {
  let element = document.getElementById("gradient");
  element.addEventListener("mousemove", onMove);
    element.addEventListener("mouseout", moveOut);

  function onMove(e) {
    let percentage = Math.floor((e.offsetX / e.target.offsetWidth) * 100);
    // let percentage = e.offsetX / (e.target.clientWidth - 1);
    // percentage = Math.trunc(percentage * 100);
    document.getElementById("result").textContent = `${percentage}%`;
  }

    function moveOut(e) {
      document.getElementById("result").textContent = "";
    }
}
