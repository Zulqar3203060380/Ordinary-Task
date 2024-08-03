window.addEventListener("load", () => {
  if (!localStorage.getItem("user")) {
    window.location.replace("index.html");
  }
});

import {
  addDoc,
  collection,
  db,
  deleteDoc,
  getDocs,
  doc,
  updateDoc,
} from "./firebase.js";

const todoCollection = collection(db, "todo");
const cardUi = document.querySelector(".cardUi");
console.log("cardUI", cardUi);

const addtodo = async () => {
  try {
    const todoinput = document.getElementById("todoinput");
    const todoobject = {
      value: todoinput.value,
    };
    const response = await addDoc(todoCollection, todoobject);
    gettodo();
    todoinput.value = "";
  } catch {
    console.log("error", error.message);
  }
};

const gettodo = async () => {
  try {
    const querysnapshot = await getDocs(todoCollection);
    let todoArr = [];
    cardUi.innerHTML = "";
    querysnapshot.forEach((doc) => {
      const object = {
        id: doc.id,
        ...doc.data(),
      };
      todoArr.push(object);
      cardUi.innerHTML += ` <div class="card " style="width: 18rem"> <div class="card-body">
        <h5 class="card-title">Ordinary Task</h5>
       
        <p class="card-text">
          ${object.value}
        </p>
         <a class="btn btn-primary" href="#" role="button" id=${object.id} onclick="edittodo(this)">Edit</a>
         <a class="btn btn-danger" id=${object.id} onclick="deletetodo(this)" role="button">Delete</a>

      </div>  </div>`;
    });
  } catch (error) {
    console.log("Error fetching todos:", error.message);
  }
};

const deletetodo = async (ele) => {
  try {
    await deleteDoc(doc(db, "todo", ele.id));
    gettodo();
  } catch (error) {
    console.log("Error deleting todo:", error.message);
  }
};

const edittodo = async (ele) => {
  try {
    const editvalue = prompt("Enter Your Ordinary Task");
    await updateDoc(doc(db, "todo", ele.id), {
      value: editvalue,
    });
    gettodo();
  } catch (error) {
    console.log("Error deleting todo:", error.message);
  }
};

const logout = () => {
  localStorage.clear();
  window.location.replace("./index.html");
};

window.addEventListener("load", gettodo());
window.addtodo = addtodo;
window.deletetodo = deletetodo;
window.edittodo = edittodo;
window.logout = logout;
