function numbers(input) {
  let nums = input.split(" ").map(Number);
  let result = [];
  let avg = nums.reduce((acc, el) => acc + el) / nums.length;

  nums.forEach((x) => {
    if (x > avg) {
      result.push(x);
    }
  });

  let forPrint = result
    .sort((a, b) => b - a)
    .slice(0, 5)
    .join(" ");

    result.length > 0 ? console.log(forPrint) : console.log("No")

// numbers('10 20 30 40 50');
numbers("-1 -2 -3 -4 -5 -6");



// ======= OR:
function numbers1(input) {
  let nrs = input.split(" ").map(Number);
  let sum = nrs.reduce((acc, el) => acc + el);
  let avg = sum / nrs.length;
  let newArr = [];

  let isCondition = false;

  nrs.map((x) => {
    if (x > avg) {
      newArr.push(x);
      isCondition = true;
    }
  });

  let result = newArr
    .sort((a, b) => b - a)
    .slice(0, 5)
    .join(" ");
  if (isCondition) {
    console.log(result);
  } else {
    console.log("No");
  }
}

// numbers1("5 2 3 4 -10 30 40 50 20 50 60 60 51");
// // numbers('10 20 30 40 50')
// // numbers('-1 -2 -3 -4 -5 -6')
// numbers1("1");
