const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const HIDDEN_CLASSNAME = "hidden";

greetingFunction = function (username) {
  const greeting = document.querySelector("#greeting");
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  localStorage.setItem("username", username);
};

loginForm.addEventListener("submit", function (event) {
  const username = loginInput.value;
  event.preventDefault();
  greetingFunction(username);
});

const savedUsername = localStorage.getItem("username");
if (savedUsername != null) {
  greetingFunction(savedUsername);
}
