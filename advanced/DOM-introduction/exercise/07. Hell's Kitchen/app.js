function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    let input = JSON.parse(document.querySelector("#inputs textarea").value);

    const restObj = {};

    for (const data of input) {
      const restInfo = data.split(" - ");
      const restName = restInfo[0];
      const workersData = restInfo[1].split(", ");

      for (const worker of workersData) {
        let [name, salary] = worker.split(" ");
        salary = Number(salary);

        if (restObj.hasOwnProperty(restName) == false) {
          restObj[restName] = {};
        }
        restObj[restName][name] = salary;
      }
    }
    let avgSalary = 0;
    let bestRest = "";
    let bestSalary = 0;

    for (let key in restObj) {
      let sorted = Object.entries(restObj[key]).sort((a, b) => b[1] - a[1]);
      let avg = sorted.reduce((acc, el) => {
        return acc + el[1] / sorted.length;
      }, 0);
      //or:
      // let sum = 0;
      // sorted.forEach((x) => {
      //   sum += x[1];
      // });
      // let avg = sum / sorted.length;

      if (avgSalary < avg) {
        avgSalary = avg;
        bestRest = key;
        bestSalary = sorted[0][1];
      }
    }
    let result1 = `Name: ${bestRest} Average Salary: ${avgSalary.toFixed(
      2
    )} Best Salary: ${bestSalary.toFixed(2)}`;
    document.querySelector("#bestRestaurant p").textContent = result1;

    let sortedBest = Object.entries(restObj[bestRest]).sort((a, b) => {
      return b[1] - a[1];
    });

    let result2 = sortedBest
      .map((x) => `Name: ${x[0]} With Salary: ${x[1]}`)
      .join(" ");
    //or:
    //  let result2 = "";
    //  sortedBest.forEach((x) => {
    //    result2 += `Name: ${x[0]} With Salary: ${x[1]} `;
    //  });
    document.querySelector("#workers p").textContent = result2;
  }
}
