function magicMatrices(input) {
    
    let sumRow = input.map((row) => row.reduce((acc, el) => acc + el));
    let sumCol = input.reduce((acc, curr) => acc.map((el, i) => el + curr[i]));
    let result = [...sumRow, ...sumCol];
    let toCompare = new Set(result).size;
  
    if (toCompare == 1) {
      return true;
    }
  
    return false;
  }
  
  console.log(
    magicMatrices([
      [11, 32, 45],
      [21, 0, 1],
      [21, 1, 1],
    ])
  );
  console.log(
    magicMatrices([
      [4, 5, 6],
      [6, 5, 4],
      [5, 5, 5],
    ])
  );
  