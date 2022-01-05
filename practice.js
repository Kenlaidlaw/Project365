// practice sets

const answer = document.querySelector("#answer");

function addInputs() {
  const numOne = document.querySelector("#infoNum1").value;
  const numTwo = document.querySelector("#infoNum2").value;

  let sum = parseInt(numOne) + parseInt(numTwo);

  answer.innerText = sum;
}

//task list
// Define UI vars
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

//Load all event listeners
loadEventListeners();

function loadEventListeners() {
  //add task event
  form.addEventListener("submit", addTask);
}

//add task
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  }

  // create li Element
  const li = document.createElement("li");
  //give class
  li.className = "collection-item";
  //create text and add on to li
  li.appendChild(document.createTextNode(taskInput.value));
  //create new link for delete button
  const link = document.createElement("a");
  //add class to it
  link.className = "delete-item secondary-content";
  //add icon html
  link.innerHTML = "<i class=fa fa-remove></i>";
  //append the link to li
  li.appendChild(link);

  // append li to ul
  taskList.appendChild(li);

  //clear input where task is entered
  taskInput.value = "";

  e.preventDefault();
}
