// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneNumber = document.querySelector("#phonenumber");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

// Listen for form submit

let myObj = {
  name: "",
  email: "",
  phone: "",
};
// let array = [];

myForm.addEventListener("submit", onSubmit);

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

    // Clear fields
    nameInput.value = "";
    emailInput.value = "";
    phoneNumber.value = "";
  }
}

// save in local storage in objects
