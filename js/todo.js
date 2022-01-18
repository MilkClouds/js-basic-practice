const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

if (localStorage.getItem("toDoList"))
  toDoList.innerHTML = localStorage.getItem("toDoList");

function deleteToDo(event) {
  event.target.parentElement.remove();
  localStorage.setItem("toDoList", toDoList.innerHTML);
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  span.innerText = newTodo;
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
  console.log(toDoList);
  localStorage.setItem("toDoList", toDoList.innerHTML);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
document.querySelector("#clear-todo").addEventListener("click", () => {
  toDoList.innerHTML = "";
});
