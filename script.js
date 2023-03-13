const form = document.getElementById("addForm");
const itemList = document.getElementById("items");
const filter = document.getElementById("filter");

const liList = document.querySelectorAll(".list-group-item");

for (let i = 0; i < liList.length; i++) {
  const editButton = document.createElement("button");
  editButton.className = "btn btn-primary btn-sm float-right edit-btn";
  editButton.appendChild(document.createTextNode("edit"));
  liList[i].appendChild(editButton);
}

form.addEventListener("submit", addItem);
//delete itemList

itemList.addEventListener("click", removeItem);

filter.addEventListener("keyup", filterItems);

function addItem(e) {
  e.preventDefault();

  const newItem = document.getElementById("item").value;
  const newItem_new = document.getElementById("item2").value;
  const new_Item = newItem + " " + newItem_new;

  //create a new li element

  const li = document.createElement("li");
  //add class
  li.className = "list-group-item";
  //add test node with input value

  li.appendChild(document.createTextNode(new_Item));

  // create delete button element
  const deleteBtn = document.createElement("button");
  // add class
  deleteBtn.className = "btn btn-danger btn-sm float-right delete-btn";
  deleteBtn.appendChild(document.createTextNode("X"));

  //append btn to li
  li.appendChild(deleteBtn);

  const editButton = document.createElement("button");
  editButton.className = "btn btn-primary btn-sm float-right edit-btn";
  editButton.appendChild(document.createTextNode("edit"));
  li.appendChild(editButton);

  itemList.appendChild(li);
  itemList.appendChild(li);
}

//remove item

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure you want to delete")) {
      const li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e) {
  // convert text to lowercase
  const text = e.target.value.toLowerCase();
  //get list of items
  const items = itemList.getElementsByTagName("li");
  //convert to array
  Array.from(items).forEach(function (item) {
    const itemName = item.firstChild.textContent;

    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
