function adAstra(input) {
  // let pattern = /(#|\|)([A-Za-z ]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d+)\1/g;
  let pattern = /(#|\|)([A-Za-z\s]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d+)\1/g;

  let match = pattern.exec(input);
  let totalCal = 0;
  let items = [];

  while (match != null) {
    let name = match[2];
    let expDate = match[3];
    let calories = Number(match[4]);
    totalCal += calories;
    items.push(
      `Item: ${name}, Best before: ${expDate}, Nutrition: ${calories}`
    );

    match = pattern.exec(input);
  }
  console.log(
    `You have food to last you for: ${Math.floor(totalCal / 2000)} days!`
  );
  items.forEach((x) => {
    console.log(x);
  });
}

//   adAstra([
//     "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
//   ]);

//   adAstra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000||Milk|05/09/20|3000|' ])



function adAstra1(input) {
  // let pattern = /(#|\|)([A-Za-z ]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d+)\1/g;
  let pattern = /(#|\|)([A-Za-z\s]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d+)\1/g;

  let match = pattern.exec(input);
  let totalCal = 0;
  let items2 = [];

  while (match != null) {
    let name = match[2];
    let expDate = match[3];
    let calories = Number(match[4]);
    totalCal += calories;
    let items1 = {
      name,
      expDate,
      calories,
    };

    items2.push(items1);

    match = pattern.exec(input);
  }
  console.log(
    `You have food to last you for: ${Math.floor(totalCal / 2000)} days!`
  );
  items2.forEach((x) => {
    console.log(
      `Item: ${x.name}, Best before: ${x.expDate}, Nutrition: ${x.calories}`
    );
  });
}

adAstra1([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);

//   adAstra1([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000||Milk|05/09/20|3000|' ])
