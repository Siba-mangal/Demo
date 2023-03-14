// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneNumber = document.querySelector("#phonenumber");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

// Listen for form submit

userList.addEventListener("click", removeItem);

myForm.addEventListener("submit", onSubmit);
let myObj = {
  name: "",
  email: "",
  phone: "",
};
function onSubmit(e) {
  e.preventDefault();

  if (
    nameInput.value === "" ||
    emailInput.value === "" ||
    phoneNumber.value === ""
  ) {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement("li");
    li.className = "item";

    // localStorage.setItem("nameInput", nameInput.value);
    // localStorage.setItem("emailInput", emailInput.value);

    li.appendChild(
      document.createTextNode(
        `${nameInput.value}:   ${emailInput.value}:  ${phoneNumber.value}`
      )
    );

    myObj.name = nameInput.value;
    myObj.email = emailInput.value;
    myObj.phone = phoneNumber.value;
    // array.push(myObj);

    let myObj_serialized = JSON.stringify(myObj);

    localStorage.setItem(emailInput.value, myObj_serialized);

    let myObj_deserialized = JSON.parse(localStorage.getItem(emailInput.value));
    console.log(myObj_deserialized);

    userList.appendChild(li);

    // let delete_btn = document.createElement("button");
    // delete_btn.setAttribute("id", "delete-btn");
    // delete_btn.innerText = "Delete";
    // delete_btn.appendChild(document.createTextNode("X"));
    // let del = li.appendChild(document.createElement('button'));
    // del.innerHTML =
    // li.appendChild(delete_btn);
    const deleteBtn = document.createElement("button");
    // add class
    deleteBtn.className = "btn btn-danger btn-sm float-right delete-btn delete";
    deleteBtn.appendChild(document.createTextNode("X"));

    //append btn to li
    li.appendChild(deleteBtn);

    // Clear fields
    nameInput.value = "";
    emailInput.value = "";
    phoneNumber.value = "";
  }
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure you want to delete")) {
      const li = e.target.parentElement;
      // console.log(li.innerHTML);
      userList.removeChild(li);
      // localStorage.removeItem(e.target.innerHTML.spit);

      localStorage.removeItem(
        li.innerHTML.split(":")[1].split(" ").slice(-1)[0]
      );
    }
  }
}
// save in local storage in objects
