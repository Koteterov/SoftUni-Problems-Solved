function attachEvents() {

  const url = `http://localhost:3030/jsonstore/messenger`;

  const texarea = document.getElementById("messages");
  const inputMessage = document.querySelector("#controls > input:nth-child(5)");
  const inputName = document.querySelector("#controls > input:nth-child(2)");
  const submitBtn = document.getElementById("submit");
  const refreshBtn = document.getElementById("refresh");

  refreshBtn.addEventListener("click", async () => {
    
    const response = await fetch(url);
    const data = await response.json();

    const result = Object.values(data)
      .map((x) => `${x.author}: ${x.content}`)
      .join("\n");

    texarea.value = result;
  });

  submitBtn.addEventListener("click", async () => {
    if (inputMessage.value == "" || inputName.value == "") {
      return alert("Please fill in both fields");
    }
    const info = {
      author: inputName.value,
      content: inputMessage.value,
    };
    await fetch(url, {
      method: "post",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify(info),
    });

    inputName.value = "";
    inputMessage.value = "";
  });
}

attachEvents();
