function calc() {
    let el1 = document.querySelector("#num1").value
    let el2 = document.querySelector("#num2").value
    let sum = Number(el1) + Number(el2)

   document.querySelector("#sum").value = sum
}


// function calc() {
//     let num1 = document.getElementById('num1').value
//     let num2 = document.getElementById('num2').value
//     let sum = Number(num1) + Number(num2)

//     document.getElementById('sum').value = sum
// }