function airPol(map, forces) {
    let mapSofia = map.map((x) => x.split(" ").map(Number));
    let force = forces.map((x) => x.split(" "));
  
    for (let i = 0; i < force.length; i++) {
      const element = force[i];
      let forceName = element[0];
      let number = Number(element[1]);
  
      if (forceName == "breeze") {
        for (let i = 0; i < mapSofia.length; i++) {
          let value = 15;
          let row = mapSofia[number][i];
  
          if (row - value > 0) {
            mapSofia[number][i] -= value;
          } else {
            mapSofia[number][i] = 0;
          }
        }
      } else if (forceName == "gale") {
        let value = 20;
        for (let i = 0; i < mapSofia.length; i++) {
          let col = mapSofia[i][number];
  
          if (col - value > 0) {
            mapSofia[i][number] -= value;
          } else {
            mapSofia[i][number] = 0;
          }
        }
      } else if (forceName == "smog") {
        for (let i = 0; i < mapSofia.length; i++) {
          for (let j = 0; j < mapSofia.length; j++) {
            mapSofia[i][j] += number;
          }
        }
      }
    }
    let result = [];
    let isPoluted = false;
    mapSofia.forEach((x, i, arr) => {
      mapSofia.forEach((y, j, arr) => {
        let element = arr[i][j];
        if (element >= 50) {
          let res = `[${i}-${j}]`;
          result.push(res);
          isPoluted = true;
        }
      });
    });
  
  
    //   for (let i = 0; i < mapSofia.length; i++) {
    //     for (let j = 0; j < mapSofia.length; j++) {
    //       const element = mapSofia[i][j];
    //       if (element >= 50) {
    //         let res = `[${i}-${j}]`;
    //         result.push(res);
    //         isPoluted = true;
    //       }
    //     }
    //   }
      isPoluted
        ? console.log(`Polluted areas: ${result.join(", ")}`)
        : console.log("No polluted areas");
  }
  
  airPol(
    [
      "5 7 72 14 4",
  
      "41 35 37 27 33",
  
      "23 16 27 42 12",
  
      "2 20 28 39 14",
  
      "16 34 31 10 24",
    ],
  
    ["breeze 1", "gale 2", "smog 25"]
  );
  