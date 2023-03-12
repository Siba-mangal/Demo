// //single element
// // const form = document.getElementById("my-form");
// // console.log(form);

// // console.log(document.querySelector("h1"));

// // console.log(document.querySelectorAll(".item"));

// // console.log(document.getElementsByClassName("item"));

// // const item = document.querySelectorAll(".item");

// // item.forEach((item) => console.log(item));

// // const ul = document.querySelector(".items");

// // ul.firstElementChild.textContent = "Hello";
// // ul.firstElementChild.style.color = "green";

// // ul.children[1].innerText = "Brad";
// // ul.children[1].style.color = "yellow";

// // const btn = document.querySelector(".btn");

// // btn.style.background = "red";

// // -----------------------------------------------------------

// const btn = document.querySelector(".btn");

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   document.querySelector("#my-form").style.background = "#ccc";
//   document.querySelector("body").classList.add("bg-dark");
// });

// btn.addEventListener("mouseover", (e) => {
//   e.preventDefault();
//   document.querySelector("#my-form").style.background = "red";
//   document.querySelector("body").classList.add("bg-dark");
// });

// btn.addEventListener("mouseout", (e) => {
//   e.preventDefault();
//   document.querySelector("#my-form").style.background = "yellow";
//   document.querySelector("body").classList.add("bg-dark");
// });

// const myForm = document.querySelector("#my-form");
// const nameInput = document.querySelector("#name");
// const emailInput = document.querySelector("#email");
// const msg = document.querySelector(".msg");
// const userList = document.querySelector("#users");

// myForm.addEventListener("submit", onSubmit);

// function onSubmit(e) {
//   e.preventDefault();
//   if (nameInput.value === "" || emailInput === "") {
//     msg.classList.add("error");
//     msg.innerHTML = "Please enter all fields";

//     setTimeout(() => msg.remove(), 3000);
//   } else {
//     const li = document.createElement("li");
//     li.appendChild(
//       document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
//     );

//     userList.appendChild(li);

//     nameInput.value = "";
//     emailInput.value = "";
//   }
// }

// console.dir(document);
// Examine the document object

var headerTitle = document.getElementById("header-title");
// console.log(headerTitle);
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);

// headerTitle.innerHTML = "<h3>Hello</h3>";
var header = document.getElementById("main-header");
header.style.borderBottom = "solid 3px #000";

// var addItem = document.getElementsByClassName("list-group-item");
var addItem = document.getElementsByClassName("title");
console.log(addItem);

addItem[0].style.fontWeight = "bold";
addItem[0].style.color = "green";
