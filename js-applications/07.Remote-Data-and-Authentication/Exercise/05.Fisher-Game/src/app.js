function showPage() {
  const loadBtn = document.querySelector(".load");
  loadBtn.addEventListener("click", load);

  const logoutBtn = document.getElementById("logout");
  const addBtn = document.querySelector(".add");
  const welcomeSpan = document.querySelector(".email > span");

  const token = sessionStorage.getItem("userToken");
  const userId = sessionStorage.getItem("userId");
  const userName = sessionStorage.getItem("userName");

  const infoUser = document.getElementById("user");
  const infoGuest = document.getElementById("guest");

  const form = document.getElementById("addForm");

  loadBtn.disabled = true;
  addBtn.disabled = true;

  if (token != null && userId != null) {
    infoUser.style.display = "inline-block";
    infoGuest.style.display = "none";
    logoutBtn.addEventListener("click", logout);
    form.addEventListener("submit", add);

    welcomeSpan.textContent = userName;

    addBtn.disabled = false;
    loadBtn.disabled = false;

  } else {
    infoGuest.style.display = "inline-block";
  }

  async function logout() {
    const token = sessionStorage.getItem("userToken");

    try {
      const response = await fetch("http://localhost:3030/users/logout", {
        method: "GET",
        headers: { "X-Authorization": token },
      });

      if (response.ok) {
        sessionStorage.removeItem("userToken");
        sessionStorage.removeItem("userId");
        sessionStorage.removeItem("userName");

        loadBtn.disabled = true;

        window.location.pathname = "Exercise/05.Fisher-Game/src/index.html";
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      return alert(error.message);
    }
  }

  async function add(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const angler = formData.get("angler");
    const weight = formData.get("weight");
    const species = formData.get("species");
    const location = formData.get("location");
    const bait = formData.get("bait");
    const captureTime = formData.get("captureTime");

    const allFields = [...formData.entries()].map((x) => x[1]);

    if (allFields.some((x) => x == "")) {
      return alert("Please fill in all fields");
    }

    const url = `http://localhost:3030/data/catches/`;
    const info = {
      angler,
      weight,
      species,
      location,
      bait,
      captureTime,
    };

    if (addBtn.id) {
      try {
        await fetch(`${url}${addBtn.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "X-Authorization": token,
          },
          body: JSON.stringify(info),
        });
        addBtn.id = ''
      } catch (error) {
        console.log(error.message);
      }
    } else {
      try {
        await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Authorization": token,
          },
          body: JSON.stringify(info),
        });
      } catch (error) {
        console.log(error.message);
      }
    }

    e.target.reset();
    load();
  }
  async function load(e) {
    const divEl = document.getElementById("catches");
    divEl.replaceChildren();

    try {
      const response = await fetch(`http://localhost:3030/data/catches`);
      const data = await response.json();

      data.forEach((x) => {
        const newDiv =
          el('div',{className:'catch'},
            el('label',{},'Angler'),
            el('input',{type:"text", className:"angler", value:`${x.angler}`}),
            el('label',{},'Weight'),
            el('input',{type:"text", className:"weight", value:`${x.weight}`}),
            el('label',{},'Species'),
            el('input',{type:"text", className:"species", value:`${x.species}`}),
            el('label',{},'Location'),
            el('input',{type:"text", className:"location", value:`${x.location}`}),
            el('label',{},'Bait'),
            el('input',{type:"text", className:"bait", value:`${x.bait}`}),
            el('label',{},'Capture Time'),
            el('input',{type:"text", className:"captureTime", value:`${x.captureTime}`}),
            el('button',{className:"update", id:`${x._ownerId}`},'Update'),
            el('button',{className:"delete", id:`${x._ownerId}`},'Delete'),
          );
          divEl.appendChild(newDiv);
        const updateBtn = newDiv.querySelector(".update");
        const deleteBtn = newDiv.querySelector(".delete");

        if (updateBtn.id != userId) {
          updateBtn.disabled = true;
          deleteBtn.disabled = true;
        }

        updateBtn.addEventListener("click", async (e) => {
          const fields = e.target.parentElement.querySelectorAll("input");
          const inputFields = document
            .getElementById("addForm")
            .querySelectorAll("input");

          fields.forEach((x, i) => (inputFields[i].value = x.value));

          addBtn.id = x._id;

          e.target.parentElement.remove()

        });

        deleteBtn.addEventListener("click", async (e) => {
          e.target.parentElement.remove();

          await fetch(`http://localhost:3030/data/catches/${x._id}`, {
            method: "DELETE",
            headers: { "X-Authorization": token },
          });
        });
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  function el(type, attr, ...content) {
    const element = document.createElement(type);
    for (let prop in attr) {
      element[prop] = attr[prop];
    }
    for (let item of content) {
      if (typeof item == "string" || typeof item == "number") {
        item = document.createTextNode(item);
      }
      element.appendChild(item);
    }
    return element;
  }
}

showPage();

