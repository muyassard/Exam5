//DOM VARIABLES

const boxes = document.querySelectorAll(".box");
const todoElm = document.querySelector(".todo");
const inProgressElm = document.querySelector(".inProgress");
const doneElm = document.querySelector(".done");

//BUTTONS
const addTodoElm = document.querySelector(".addTodo");
const addIPElm = document.querySelector(".addIP");
const addDoneElm = document.querySelector(".addDone");

//LOGIC VARIABLES

let textTodo = "added todo";
let textIp = "added IP";
let textDone = "added done";

//FUNCITON

boxes.forEach((box1) => {
  box1.addEventListener("drop", () => {
    console.log("yes");
  });
});
addTodoElm.addEventListener("click", addedtodo);
addIPElm.addEventListener("click", addedIP);
addDoneElm.addEventListener("click", addedDone);

function addedtodo() {
  let box = document.createElement("div");
  box.className = "box";
  box.textContent = textTodo;
  todoElm.append(box);
}

function addedIP() {
  let box = document.createElement("div");
  box.className = "box";
  box.textContent = textIp;
  inProgressElm.append(box);
}

function addedDone() {
  let box = document.createElement("div");
  box.className = "box";
  box.textContent = textDone;
  doneElm.append(box);
}
