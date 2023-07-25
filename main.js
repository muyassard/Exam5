//DOM VARIABLES

const boxes = document.querySelectorAll(".box");
const todoElm = document.querySelector(".addBoxTodo");
const inProgressElm = document.querySelector(".addBoxIP");
const doneElm = document.querySelector(".addBoxDone");

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
  box1.addEventListener("dragstart", function (e) {
    let selected = e.target;

    inProgressElm.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    inProgressElm.addEventListener("drop", function (e) {
      inProgressElm.appendChild(selected);
      selected = null;
    });

    todoElm.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    todoElm.addEventListener("drop", function (e) {
      todoElm.appendChild(selected);
      selected = null;
    });

    doneElm.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    doneElm.addEventListener("drop", function (e) {
      doneElm.appendChild(selected);
      selected = null;
    });
  });
});
//
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
