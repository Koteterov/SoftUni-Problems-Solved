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

// function attachEvents() {
//     document.querySelector('.load').addEventListener('click', loadAllCatches);

//     const token = sessionStorage.getItem('userToken');
//     const userId = sessionStorage.getItem('userId');

//     if (token != null) {
//         document.getElementById('user').style.display = 'inline-block';
//         document.getElementById('guest').style.display = 'none';

//         document.getElementById('logoutBtn').addEventListener('click', logout);
//     }
//     else {
//         document.getElementById('guest').style.display = 'inline-block';
//     }

//     if (token != null && userId != null) {
//         document.querySelector('.add').disabled = false;
//         document.getElementById('addForm').addEventListener('submit', addNewCatche)
//     }
// }

// attachEvents();

// async function request(url, options) {
//     const response = await fetch(url, options);

//     if (response.ok != true) {
//         const error = await response.json();
//         alert(error.message);
//         throw new Error(error.message);
//     }

//     const data = await response.json();
//     return data;
// }

// function createElement(type, content, attributes = []) {
//     const element = document.createElement(type);

//     if (content) {
//         element.textContent = content;
//     }

//     if (attributes.length > 0) {
//         for (let i = 0; i < attributes.length; i += 2) {
//             element.setAttribute(attributes[i], attributes[i + 1]);
//         }
//     }

//     return element;
// }

// async function loadAllCatches() {
//     const catches = await request('http://localhost:3030/data/catches');

//     const allCatches = document.getElementById('catches');

//     allCatches.innerHTML = '';

//     Object.values(catches).forEach(c => {
//         const token = sessionStorage.getItem('userToken');
//         const userId = sessionStorage.getItem('userId');

//         const divCatch = createElement('div', '', ['class', 'catch']);

//         const id = createElement('input', '', ['type', 'hidden', 'name', 'id', 'value', c._id]);

//         const labelAngler = createElement('label', 'Angler');
//         const inputAngler = createElement('input', '', ['type', 'text', 'class', 'angler', 'value', c.angler,]);

//         const labelWeight = createElement('label', 'Weight');
//         const inputWeight = createElement('input', '', ['type', 'number', 'class', 'weight', 'value', c.weight,]);

//         const labelSpecies = createElement('label', 'Species');
//         const inputSpecies = createElement('input', '', ['type', 'text', 'class', 'species', 'value', c.species,]);

//         const labelLocation = createElement('label', 'Location');
//         const inputLocation = createElement('input', '', ['type', 'text', 'class', 'location', 'value', c.location,]);

//         const labelBait = createElement('label', 'Bait');
//         const inputBait = createElement('input', '', ['type', 'text', 'class', 'bait', 'value', c.bait,]);

//         const labelCaptureTime = createElement('label', 'Capture Time');
//         const inputCaptureTime = createElement('input', '', ['type', 'number', 'class', 'captureTime', 'value', c.captureTime,]);

//         divCatch.appendChild(id);

//         divCatch.appendChild(labelAngler);
//         divCatch.appendChild(inputAngler);
//         divCatch.appendChild(createElement('hr'));

//         divCatch.appendChild(labelWeight);
//         divCatch.appendChild(inputWeight);
//         divCatch.appendChild(createElement('hr'));

//         divCatch.appendChild(labelSpecies);
//         divCatch.appendChild(inputSpecies);
//         divCatch.appendChild(createElement('hr'));

//         divCatch.appendChild(labelLocation);
//         divCatch.appendChild(inputLocation);
//         divCatch.appendChild(createElement('hr'));

//         divCatch.appendChild(labelBait);
//         divCatch.appendChild(inputBait);
//         divCatch.appendChild(createElement('hr'));

//         divCatch.appendChild(labelCaptureTime);
//         divCatch.appendChild(inputCaptureTime);
//         divCatch.appendChild(createElement('hr'));

//         if (token != null && userId != null && c._ownerId == userId) {
//             const updateBtn = createElement('button', 'Update', ['class', 'update']);
//             const deleteBtn = createElement('button', 'Delete', ['class', 'delete']);

//             updateBtn.addEventListener('click', event => updateCatche(event, c._id));
//             deleteBtn.addEventListener('click', event => deleteCatche(c._id));

//             divCatch.appendChild(updateBtn);
//             divCatch.appendChild(deleteBtn);
//         }
//         else {
//             const updateBtn = createElement('button', 'Update', ['disabled', '', 'class', 'update']);
//             const deleteBtn = createElement('button', 'Delete', ['disabled', '', 'class', 'delete']);

//             divCatch.appendChild(updateBtn);
//             divCatch.appendChild(deleteBtn);
//         }

//         allCatches.appendChild(divCatch);
//     });
// }

// async function logout() {
//     const token = sessionStorage.getItem('userToken');

//     const response = await fetch('http://localhost:3030/users/logout', {
//         method: 'get',
//         headers: { 'X-Authorization': token },
//     });

//     if (!response.ok) {
//         const error = await response.json();
//         return alert(error.message);
//     }

//     sessionStorage.removeItem('userToken');
//     sessionStorage.removeItem('userId');
//     window.location.pathname = '05.Fisher-Game/index.html';
// }

// async function addNewCatche(event) {
//     event.preventDefault();

//     const formdata = new FormData(event.target);

//     const angler = formdata.get('angler');
//     const weight = Number(formdata.get('weight'));
//     const species = formdata.get('species');
//     const location = formdata.get('location');
//     const bait = formdata.get('bait');
//     const captureTime = Number(formdata.get('captureTime'));

//     if (angler && Number(weight) && species && location && bait && Number(captureTime)) {
//         const token = sessionStorage.getItem('userToken');

//         const catche = { angler, weight, species, location, bait, captureTime };
//         event.target.reset();

//         await request('http://localhost:3030/data/catches', {
//             method: 'post',
//             headers: { 'Content-Type': 'application/json', 'X-Authorization': token },
//             body: JSON.stringify(catche),
//         });

//         loadAllCatches();
//     }
//     else {
//         return alert('All fields are required!');
//     }
// }

// async function updateCatche(event, id) {
//     const token = sessionStorage.getItem('userToken');

//     const angler = event.target.parentNode.children[2].value;
//     const weight = Number(event.target.parentNode.children[5].value);
//     const species = event.target.parentNode.children[8].value;
//     const location = event.target.parentNode.children[11].value;
//     const bait = event.target.parentNode.children[14].value;
//     const captureTime = Number(event.target.parentNode.children[17].value);

//     if (angler && Number(weight) && species && location && bait && Number(captureTime)) {
//         const catche = { angler, weight, species, location, bait, captureTime };

//         await request(`http://localhost:3030/data/catches/${id}`, {
//             method: 'put',
//             headers: { 'Content-Type': 'application/json', 'X-Authorization': token },
//             body: JSON.stringify(catche),
//         });

//         loadAllCatches();
//     } else {
//         return alert('All fields are required!');
//     }
// }

// async function deleteCatche(id) {
//     const token = sessionStorage.getItem('userToken');

//     await request(`http://localhost:3030/data/catches/${id}`, {
//         method: 'delete',
//         headers: { 'X-Authorization': token },
//     });

//     loadAllCatches();
// }
