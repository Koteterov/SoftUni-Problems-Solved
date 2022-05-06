function solution(num) {
  function add(a, b) {
    return a + b;
  }
  return add.bind(this, num);
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));


//===========================
// function solution(num) {
//   function add(a, b) {
//     return a + b;
//   }
//   return (n) => add(n, num);
// }

// let add5 = solution(5);
// console.log(add5(2));
// console.log(add5(3));


//=============================
// function solution(num) {
//   let number = num;

//  return function add(n) {
//     return number + n;
//   }
// }

// let add5 = solution(5);
// console.log(add5(2));
// console.log(add5(3));
