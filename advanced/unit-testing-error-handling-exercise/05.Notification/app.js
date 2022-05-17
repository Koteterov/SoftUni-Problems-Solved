function notify(message) {
  
  let divEl = document.getElementById("notification");
  divEl.innerText = message;
  divEl.style.display = "block";
  divEl.addEventListener("click", (e) => {
    e.target.style.display = "none";
  });
}
