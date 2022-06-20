function solve() {
  const recipientName = document.getElementById("recipientName");
  const title = document.getElementById("title");
  const message = document.getElementById("message");
  const addBtn = document.getElementById("add");
  const resetBtn = document.getElementById("reset");

  const ulEl = document.getElementById("list");
  const ulElSent = document.querySelector(".sent-list");
  const ulElDeleted = document.querySelector(".delete-list");

  addBtn.addEventListener("click", add);
  resetBtn.addEventListener("click", reset);

  function add(e) {
    e.preventDefault();

    if (recipientName.value == "" || title.value == "" || message.value == "") {
      return;
    }

    const liEl =
      el('li',{},
        el('h4',{},`Title: ${title.value}`),
        el('h4',{},`Recipient Name: ${recipientName.value}`),
        el('span',{},`${message.value}`),
        el('div',{id:"list-action"},
        el('button',{type:'submit',id:"send"},'Send'),
        el('button',{type:'submit',id:"delete"}, 'Delete')
          )
      );
      ulEl.appendChild(liEl);

      liEl.querySelector('#send').addEventListener("click", send);
      liEl.querySelector('#delete').addEventListener("click", toDelete);

    function send(e) {
      const toSpan = e.target.parentElement.parentElement.children[1];
      const titleSpan = e.target.parentElement.parentElement.children[0];

     
      const liEl =
        el('li',{},
          el('span',{},`To: ${toSpan.textContent.split(': ')[1]}`),
          el('span',{},`Title: ${titleSpan.textContent.split(': ')[1]}`),
          el('div',{className:"btn"},
            el("button",{ type: "submit", className: "delete" },"Delete")
          ));

      e.target.parentElement.parentElement.remove();
      ulElSent.appendChild(liEl);

      //delete from sent:
      liEl.querySelector('.delete').addEventListener("click", (e) => {
        e.target.parentElement.remove();
        ulElDeleted.appendChild(liEl);
      });
    }
    //delete from list
    function toDelete() {
      liEl.children[2].remove();
      liEl.children[2].remove();
      const toSpan = liEl.children[1];
      const titleSpan = liEl.children[0];
      liEl.remove();

      const finalLiEl = 
      el("li",{},
        el("span", {}, `To: ${toSpan.textContent.split(": ")[1]}`),
        el("span", {}, `Title: ${titleSpan.textContent.split(": ")[1]}`)
      );
      ulElDeleted.appendChild(finalLiEl);
    }

    recipientName.value = "";
    title.value = "";
    message.value = "";
  }

  function reset(e) {
    e.preventDefault();

    recipientName.value = "";
    title.value = "";
    message.value = "";
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

solve();



// function solve() {
//   const recipField = document.querySelector("#recipientName");
//   const titleField = document.querySelector("#title");
//   const messageField = document.querySelector("#message");

//   const addBtn = document.querySelector("#add");
//   const resetBtn = document.querySelector("#reset");

//   const ulList = document.querySelector("#list");
//   const ulSent = document.querySelector(".sent-list");
//   const ulDeleted = document.querySelector(".delete-list");

//   addBtn.addEventListener("click", add);

//   function add(e) {
//     e.preventDefault();

//     let isValid =
//       recipField.value != "" &&
//       titleField.value != "" &&
//       messageField.value != "";

//     if (isValid) {
//       const elements =
//       el("li", {},
//         el("h4", {}, `Title: ${titleField.value}`),
//         el("h4", {}, `Recipient Name: ${recipField.value}`),
//         el("span", {}, `${messageField.value}`),
//         el("div", { id: "list-action" },
//           el("button", { type: "sumbit", id: "send" }, "Send"),
//           el("button", { type: "sumbit", id: "delete" }, "Delete")
//         )
//       );
//       ulList.appendChild(elements);
//     }

//     recipField.value = "";
//     titleField.value = "";
//     messageField.value = "";

//     const sendBtns = document.querySelectorAll(
//       "#list > li > div > button:nth-child(1)"
//     );
//     const deleteBtns = document.querySelectorAll(
//       "#list > li > div > button:nth-child(2)"
//     );
//     const lastSendBtn = sendBtns[sendBtns.length - 1];
//     lastSendBtn.addEventListener("click", send);

//     function send(e) {
//       const contentTitle =
//         e.target.parentElement.parentElement.children[0].textContent.split(": ")[1];
//       const contentRecep =
//         e.target.parentElement.parentElement.children[1].textContent.split(": ")[1];

//       const elements =
//       el("li",{},
//         el("span", {}, `To: ${contentRecep} `),
//         el("span", {}, `Title: ${contentTitle}`),
//         el("div",{ className: "btn" },
//           el("button", { type: "submit", className: "delete" }, "Delete")
//         )
//       );
//       ulSent.appendChild(elements);

//       const delFromSentBtn = document.querySelectorAll(
//         ".sent-list > li > div > button"
//       );
//       const lastDelFromSentBtn = delFromSentBtn[delFromSentBtn.length - 1];

//       lastDelFromSentBtn.addEventListener("click", delFromSent);
//       function delFromSent(e) {
//         const ulEl = e.target.parentElement.parentElement;
//         const Btn = e.target.parentElement.parentElement.children[2];
//         Btn.remove();
//         ulDeleted.appendChild(ulEl);
//       }

//       e.target.parentElement.parentElement.remove();
//     }

//     const lastDelBtn = deleteBtns[deleteBtns.length - 1];
//     lastDelBtn.addEventListener("click", toDelete);

//     function toDelete(e) {
//       const contentTitle =
//         e.target.parentElement.parentElement.children[0].textContent.split(": ")[1];
//       const contentRecep =
//         e.target.parentElement.parentElement.children[1].textContent.split(": ")[1];

//       const elements =
//       el("li",{},
//         el("span", {}, `To: ${contentRecep}`),
//         el("span", {}, `Title: ${contentTitle}`)
//       );

//       ulDeleted.appendChild(elements);

//       e.target.parentElement.parentElement.remove();
//     }
//   }

//   resetBtn.addEventListener("click", toReset);

//   function toReset(e) {
//     e.preventDefault();

//     recipField.value = "";
//     titleField.value = "";
//     messageField.value = "";
//   }

//   function el(type, attr, ...content) {
//     const element = document.createElement(type);
//     for (let prop in attr) {
//       element[prop] = attr[prop];
//     }
//     for (let item of content) {
//       if (typeof item == "string" || typeof item == "number") {
//         item = document.createTextNode(item);
//       }
//       element.appendChild(item);
//     }
//     return element;
//   }
// }

// solve();

