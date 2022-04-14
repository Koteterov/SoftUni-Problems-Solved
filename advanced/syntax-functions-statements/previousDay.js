function previousDay(year, month, day) {
    let date = new Date(year, month - 1, day);
  
    let prevDay = new Date(date);
    prevDay.setDate(date.getDate() - 1);
  
    let outputYear = prevDay.getFullYear();
    let outputMonth = prevDay.getMonth() + 1;
    let outputDay = prevDay.getDate();
  
    console.log(`${outputYear}-${outputMonth}-${outputDay}`);
  }
  
  previousDay(2016, 9, 30);
  // previousDay(2016, 10, 1)
  
  