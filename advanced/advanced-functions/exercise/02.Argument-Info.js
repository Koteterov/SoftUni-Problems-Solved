function argumentInfo() {
    // Or
    // function argumentInfo(...input)
  let result = {};

  Array.from(arguments).forEach((a) => {
    console.log(`${typeof a}: ${a}`);

    result[typeof a] ? result[typeof a]++ : (result[typeof a] = 1);

    // if (result.hasOwnProperty(typeof a) == false) {
    //     result[typeof a] = 1
    // } else {
    //     result[typeof a] ++
    // }
  });
  Object.entries(result)
    .sort((a, b) => b[1] - a[1])
    .forEach((x) => {
      console.log(`${x[0]} = ${x[1]}`);
    });
}

argumentInfo("cat", "ret", 42, 2, 2, function () {
  console.log("Hello world!");
});
