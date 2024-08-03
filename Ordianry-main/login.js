window.addEventListener("load", () => {
  if (localStorage.getItem("user")) {
    window.location.replace("./dashboard.html");
  }
});
import { auth, signInWithEmailAndPassword } from "./firebase.js";

const loginHandler = async () => {
  try {
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");

    const response = await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    window.localStorage.setItem("user", response.user.uid);
    window.location.replace("./dashboard.html");
  } catch (error) {
    console.log("error", error.message);
    alert(error.message); // Optional: display the error message to the user
  }
};

window.loginHandler = loginHandler;
