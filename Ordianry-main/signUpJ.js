window.addEventListener("load", () => {
  if (localStorage.getItem("user")) {
    window.location.replace("./dashboard.html");
  }
});

import {
  auth,
  createUserWithEmailAndPassword,
  db,
  doc,
  setDoc,
} from "./firebase.js";

const signUpHandler = async () => {
  try {
    const email = document.querySelector("#email");

    const name = document.querySelector("#name");
    const gender = document.querySelector("#gender");
    const age = document.querySelector("#age");

    const userObj = {
      name: name.value,
      gender: gender.value,
      email: email.value,
      age: age.value,
    };
    console.log("userObj", userObj);

    const response = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    const uid = response.user.uid;

    await setDoc(doc(db, "users", uid), userObj);
    alert("User successfully signed up");
    window.location.href = "./index.html";
  } catch (error) {
    console.log("error", error.message);
    alert(error.message);
  }
};

window.signUpHandler = signUpHandler;
