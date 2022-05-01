function deleteByEmail() {
  let inputEmail = document.querySelector('input[name="email"]');
//   let emailsForDelete = document.querySelectorAll("tr td:nth-of-type(2)");
let emailsForDelete = document.querySelectorAll('tr td:nth-child(2)')


  for (let email of emailsForDelete) {
    if (email.textContent == inputEmail.value) {
      let row = email.parentNode;
      row.parentNode.removeChild(row);
      document.getElementById("result").textContent = "Deleted";
    }

    document.getElementById("result").textContent = "Not found.";
  }
}



