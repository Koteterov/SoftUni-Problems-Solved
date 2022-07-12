function attachEvents() {
  const submitBtn = document.getElementById("submit");
  const divForecast = document.getElementById("forecast");
  const divCurrent = document.getElementById("current");
  const divUpcoming = document.getElementById("upcoming");

  const input = document.getElementById("location");

  const urlLocation = `http://localhost:3030/jsonstore/forecaster/locations/`;
  const urlToday = `http://localhost:3030/jsonstore/forecaster/today/`;
  const urlUpcoming = `http://localhost:3030/jsonstore/forecaster/upcoming/`;

  submitBtn.addEventListener("click", submit);

  async function submit() {
    divForecast.style.display = "block";

    try {
      const resLocation = await fetch(urlLocation);
      const resultLocation = await resLocation.json();

      const findTown = resultLocation.find(
        (x) => x.name.toLowerCase() == input.value.toLowerCase()
      );

      const resCurrent = await fetch(urlToday + `${findTown.code}`);
      const resUpcoming = await fetch(urlUpcoming + `${findTown.code}`);
      const resultCurrent = await resCurrent.json();
      const resultUpcoming = await resUpcoming.json();

      const weatherSymbols = {
        Sunny: "☀",
        "Partly sunny": "⛅",
        Overcast: "☁",
        Rain: "☂",
        Degrees: "°",
      };

      // current conditions
      const symbolInText = weatherSymbols[resultCurrent.forecast.condition];

      const divElCurrent =
        el('div',{className:"forecasts"},
            el('span',{className:"condition symbol"},`${symbolInText}`),
            el('span',{className:"condition"},
                el('span',{className:"forecast-data"},`${resultCurrent.name}`),
                el('span',{className:"forecast-data"},`${resultCurrent.forecast.low}°/${resultCurrent.forecast.high}°`),
                el('span',{className:"forecast-data"},`${resultCurrent.forecast.condition}`)
                )
        );
      divCurrent.lastChild.remove()
      divCurrent.appendChild(divElCurrent);

      //three-day forecast
          if (document.querySelector('.forecast-info')) {
            document.querySelector('.forecast-info').remove();
        };

      const divForecastInfo = el("div", { className: "forecast-info" });

      resultUpcoming.forecast.forEach((x) => {
        const spanUpcoming =
          el('span',{className:"upcoming"},
          el('span',{className:"symbol"},`${weatherSymbols[x.condition]}`),
          el('span',{className:"forecast-data"},`${x.low}°/${x.high}°`),
          el('span',{className:"forecast-data"},`${x.condition}`)
          );

          divForecastInfo.appendChild(spanUpcoming);
        });

      divUpcoming.appendChild(divForecastInfo);

      // another way to remove extra div:
      //---------------------------------
      // Array.from(document.querySelectorAll("div.forecast-info"))
      // .reduceRight((acc,el) => el.remove());


      // remove error
        Array.from(document.querySelectorAll('#error'))
        .forEach(e => e.remove());

    } catch (error) {

      // error message
      const errEl = el("p", {id:'error'}, "Error");
      divUpcoming.appendChild(errEl);
    }
    input.value = "";
  }
  
  function el(type, attr, ...content) {
    const element = document.createElement(type);
    for (let prop in attr) {
      element[prop] = attr[prop];
    }
    for (let item of content) {
      if (typeof item == "string" || typeof item == "number") {
        item = document.createTextNode(item);
      }
      element.appendChild(item);
    }
    return element;
  }
}

attachEvents();

