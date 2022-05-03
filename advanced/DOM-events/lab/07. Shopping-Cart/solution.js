function solve() {
  let output = document.querySelector("textarea");
  let checkoutButton = document.querySelector(".checkout");
  let buttons = document.querySelectorAll(".add-product");

  let result = {};

  Array.from(buttons).forEach((b) => {
    b.addEventListener("click", addToCart);
  });

  function addToCart(e) {
    let name = e.target.parentNode.parentNode.querySelector(".product-title").textContent;
    let price = e.target.parentNode.parentNode.querySelector(".product-line-price").textContent;
    price = Number(price);
    result[name] ? (result[name] += price) : (result[name] = price);
    output.textContent += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
  }

  checkoutButton.addEventListener("click", checkout);

  function checkout() {
    let purchased = [];
    total = 0;

    for (const [key, value] of Object.entries(result)) {
      purchased.push(key);
      total += value;
    }
    output.textContent += `You bought ${purchased.join(", ")} for ${total.toFixed(2)}.`;

    Array.from(buttons).forEach((b) => {
      b.removeEventListener("click", addToCart);
    });

    checkoutButton.removeEventListener("click", checkout);

   //Or instead of 'removeEventListeners' to disable all buttons:

   //  let allButtons = document.getElementsByTagName("button")
   //  Array.from(allButtons).forEach(b => {
   //    b.disabled = "true"
   //    // or:
   //    // b.setAttribute("disabled", "true") 
   //  })

  }
}


