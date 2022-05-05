function encodeAndDecodeMessages() {
  let button = document.querySelectorAll("button");
  let textarea = document.querySelectorAll("textarea");

  button[0].addEventListener("click", encode);
  button[1].addEventListener("click", decode);

  function encode() {
    let string = textarea[0].value;
    let encodedString = string
      .split("")
      .map((l) => String.fromCharCode(l.charCodeAt() + 1))
      .join("");

    textarea[1].value = encodedString;
    textarea[0].value = "";
  }

  function decode() {
    let string = textarea[1].value;
    let decodedString = string
      .split("")
      .map((l) => String.fromCharCode(l.charCodeAt() - 1))
      .join("");

    textarea[1].value = decodedString;

    button[1].removeEventListener("click", decode);
  }
}

