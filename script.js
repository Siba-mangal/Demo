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

// var headerTitle = document.getElementById("header-title");
// console.log(headerTitle);
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);

// headerTitle.innerHTML = "<h3>Hello</h3>";
// var header = document.getElementById("main-header");
// header.style.borderBottom = "solid 3px #000";

// var addItem = document.getElementsByClassName("list-group-item");
// var addItem = document.getElementsByClassName("title");
// console.log(addItem);

// addItem[0].style.fontWeight = "bold";
// addItem[0].style.color = "green";

// var items = document.getElementsByClassName("list-group-item");

// items[2].style.backgroundColor = "green";

// for (let i = 0; i < items.length; i++) {
//   items[i].style.fontWeight = "bold";
// }

// getElementByTagName

// const li = document.getElementsByTagName("li");
// li[1].textContent = "Hello 2";
// li[1].style.backgroundColor = "yellow";

// for (let i = 0; i < li.length; i++) {
//   li[i].style.fontWeight = "bold";
// }

// QUERYSELECTOR

// const header = document.querySelector("#main-header");

// header.style.borderBottom = "solid 4px #ccc";

// const input = document.querySelector("input");
// input.value = "Hello World";

// const submit = document.querySelector('input[type="submit"]');

// submit.value = "SEND";

// const item = document.querySelector(".list-group-item");

// item.style.color = "red";

// const nth_childItem = document.querySelector(".list-group-item:nth-child(2)");

// nth_childItem.style.backgroundColor = "green";

// document.querySelector(".list-group-item:nth-child(3)").style.display = "block";

// QUERY SELECTOR ALL

// const titles = document.querySelectorAll(".title");

// console.log(titles);

// titles[0].textContent = "Hello";

const odd = document.querySelectorAll("li:nth-child(odd)");

for (let i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "green";
}

const second_child = document.querySelectorAll("li");
second_child[1].style.color = "green";
// for (let i = 0; i < second_child.length; i++) {
//   if (i + 1 == 2) second_child[i].style.color = "green";
// }
