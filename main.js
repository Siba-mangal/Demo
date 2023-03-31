const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneNumber = document.querySelector("#phonenumber");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

// Listen for form submit

userList.addEventListener("click", removeItem);

userList.addEventListener("click", editItem);

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

    // axios
    //   .post(
    //     "https://crudcrud.com/api/0a317789981c4ce6ab344c18ae3eab7c/FormData",
    //     {
    //       myObj_serialized,
    //     }
    //   )
    //   .then((res) => showOutput(res))
    //   .catch((err) => console.error(err));
    axios
      .post(
        "https://crudcrud.com/api/5260064491804bafa3b1a6975da5bc7e/FormData",
        myObj_deserialized
      )
      .then((res) => console.log(res))
      .catch((err) => console.error(err));

    userList.appendChild(li);

    const deleteBtn = document.createElement("button");
    // add class
    deleteBtn.className = "btn btn-danger btn-sm float-right delete-btn delete";
    deleteBtn.appendChild(document.createTextNode("X"));

    const editBtn = document.createElement("button");

    editBtn.className = "btn btn-danger btn-sm float-right delete-btn edit";
    editBtn.appendChild(document.createTextNode("Edit"));

    //append btn to li
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);

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
      console.log(li);
      userList.removeChild(li);
      // Delete data from api
      const deleteName = li.innerHTML.split(":")[0];
      axios
        .get(
          "https://crudcrud.com/api/5260064491804bafa3b1a6975da5bc7e/FormData"
        )
        .then((res) => {
          const dataJson = res.data;
          console.log(dataJson[0].name);

          for (let i = 0; i < dataJson.length; i++) {
            if (dataJson[i].name === deleteName) {
              const id = dataJson[i]._id;
              axios.delete(
                `https://crudcrud.com/api/5260064491804bafa3b1a6975da5bc7e/FormData/${id}`
              );
            }
          }
        });
      // localStorage.removeItem(e.target.innerHTML.spit);
      // localStorage.removeItem(
      //   li.innerHTML.split(":")[1].split(" ").slice(-1)[0]
      // );

      // axios
      //   .delete(
      //     `https://crudcrud.com/api/0a317789981c4ce6ab344c18ae3eab7c/FormData/`
      //   )
      //   .then((res) => console.log(res.data[3]));
      // Observe the data keyword this time. Very important
      // payload is the request body
      // Do something
    }
  }
}

// Edit button

function editItem(e) {
  if (e.target.classList.contains("edit")) {
    const li = e.target.parentElement;
    // console.log(li.innerHTML);
    userList.removeChild(li);
    // localStorage.removeItem(e.target.innerHTML.spit);

    // localStorage.removeItem(li.innerHTML.split(":")[1].split(" ").slice(-1)[0]);
    const editName = li.innerHTML.split(":")[0];
    axios
      .get("https://crudcrud.com/api/5260064491804bafa3b1a6975da5bc7e/FormData")
      .then((res) => {
        const dataJson = res.data;

        console.log(dataJson[0].name);

        for (let i = 0; i < dataJson.length; i++) {
          if (dataJson[i].name === editName) {
            const id = dataJson[i]._id;
            axios.delete(
              `https://crudcrud.com/api/5260064491804bafa3b1a6975da5bc7e/FormData/${id}`
            );
            nameInput.value = dataJson[i].name;
            emailInput.value = dataJson[i].email;
            phoneNumber.value = dataJson[i].phone;
          }
        }
      })
      .then((res) => {
        let data = res.data;
        for (let i = 0; i < data.length; i++) {
          if (data[i].name === editName) {
            axios.put(
              `https://crudcrud.com/api/5260064491804bafa3b1a6975da5bc7e/FormData`,
              {
                name: nameInput.value,
                email: emailInput.value,
                phone: phoneNumber.value,
              }
            );
          }
        }
      });
  }
}

// fetch the data from api to web page
// fetch("https://crudcrud.com/api/0a317789981c4ce6ab344c18ae3eab7c/FormData")
//   .then((res) => {
//     return res.json();
//     // console.log(res);
//   })
//   .then((data) => {
//     data.forEach((user) => {
//       const markup = `<li>${user.name} ${user.email} ${user.phone}</li> `;

//       document.getElementById("users").insertAdjacentHTML("beforeend", markup);
//     });
//   })
//   .catch((err) => console.log(err));

window.addEventListener("DOMContentLoaded", () => {
  axios
    .get("https://crudcrud.com/api/5260064491804bafa3b1a6975da5bc7e/FormData")
    .then((res) => {
      console.log(res.data);
      for (var i = 0; i < res.data.length; i++) {
        showData(res.data[i]);
      }
    })
    .catch((error) => console.log(error));
});
function showData(data) {
  const li = document.createElement("li");
  li.id = data._id;
  li.appendChild(
    document.createTextNode(`${data.name}:   ${data.email}:  ${data.phone}`)
  );
  userList.appendChild(li);
  const deleteBtn = document.createElement("button");
  // add class
  deleteBtn.className = "btn btn-danger btn-sm float-right delete-btn delete";
  deleteBtn.id = data._id;
  deleteBtn.appendChild(document.createTextNode("X"));

  const editBtn = document.createElement("button");

  editBtn.className = "btn btn-danger btn-sm float-right delete-btn edit";
  editBtn.id = data._id;
  editBtn.appendChild(document.createTextNode("Edit"));

  //append btn to li
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);
}
