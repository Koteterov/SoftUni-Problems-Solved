function attachEventsListeners() {

  let button = document.getElementById("convert");
  button.addEventListener("click", convert);

  let toMeters = {
    km: (x) => x * 1000,
    m: (x) => x,
    cm: (x) => x * 0.01,
    mm: (x) => x * 0.001,
    mi: (x) => x * 1609.34,
    yrd: (x) => x * 0.9144,
    ft: (x) => x * 0.3048,
    in: (x) => x * 0.0254,
  };

  let fromMeters = {
    km: (x) => x / 1000,
    m: (x) => x,
    cm: (x) => x / 0.01,
    mm: (x) => x / 0.001,
    mi: (x) => x / 1609.34,
    yrd: (x) => x / 0.9144,
    ft: (x) => x / 0.3048,
    in: (x) => x / 0.0254,
  };

  function convert() {
    let inputUnits = document.getElementById("inputUnits").value;
    let outputUnits = document.getElementById("outputUnits").value;
    let inputField = document.getElementById("inputDistance").value;

    let meters = toMeters[inputUnits](Number(inputField));
    let result = fromMeters[outputUnits](meters);

    document.getElementById("outputDistance").value = result;
  }
}
