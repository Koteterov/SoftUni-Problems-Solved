function sortArray(array, str) {
  return str == "asc"
    ? array.sort((a, b) => a - b)
    : array.sort((a, b) => b - a);

  //   const command = str;

  //   const obj = {
  //     asc: () => array.sort((a, b) => a - b),
  //     desc: () => array.sort((a, b) => b - a),
  //   };

  //   obj[command](array);
  //   return array;
}

console.log(sortArray([14, 7, 17, 6, 8], "asc"));
