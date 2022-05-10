function add(a) {
  let sum = 0;
  sum += a;

  function calc(b) {
    sum += b;
    return calc;
  }
  calc.toString = () => sum;

  return calc;
}

console.log(add(1));
console.log(add(1)(6)(-3));


//============================
// function add1(num) {
//   let sum = 0;

//   function inner(number) {
//     sum += number;
//     return inner;
//   }
//   inner.toString = () => {
//     return sum;
//   };
//   return inner(num);
// }

// console.log(add1(1)(6)(-3));

