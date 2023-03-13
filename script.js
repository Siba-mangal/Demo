//FINAL CODE

// parentElement;
const itemList = document.querySelector("#items");
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "lightgreen";
// console.log(itemList.parentElement.parentElement);

//childNode
// console.log(itemList.childNodes);

// lastelementchild;
// console.log(itemList.lastElementChild);

// lastchild;
// console.log(itemList.lastChild);

// childNode.createChildNode.innerHTML = "HELLO";

// firstelementchild;
// console.log(itemList.firstElementChild);

// firstchild;
// console.log(itemList.firstChild);

// nextsibling;
// console.log(itemList.nextSibling);
// nextelementsibling;
// console.log(itemList.nextElementSibling);

// previoussibling;
// console.log(itemList.previousSibling);

// previouselementsibling;
// console.log(itemList.previousElementSibling);

// createelement;
const newDiv = document.createElement("div");
newDiv.className = "hello"; //add class
newDiv.id = "hello1"; //add id
newDiv.setAttribute("title", "Hello Div"); //set Atribute

const newDivText = document.createTextNode("Hello World"); // createtesxtnode;

newDiv.appendChild(newDivText); // appendchild;

const container = document.querySelector("header .container");

const h1 = document.querySelector("header h1");

container.insertBefore(newDiv, h1);

//insert before li

const newLi = document.createElement("li");
newLi.className = "list-group-item";

const newLiText = document.createTextNode("Hello world");

newLi.appendChild(newLiText);

const container2 = document.querySelector("#items");
const h2 = document.createElement("li");

const pos = container2.firstElementChild;
container2.insertBefore(newLi, pos);

console.log(newDiv);
