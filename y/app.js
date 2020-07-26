var list = document.getElementById("list");

function addTodo() {
  // create lists
  var todoItem = document.getElementById("todo-item");
  var li = document.createElement("li");
  var liText = document.createTextNode(todoItem.value);
  li.appendChild(liText);

  //  Delete Button

  var delBtn = document.createElement("button");
  var delImg = document.createElement("img");
  delImg.src = "./images/bin.png";
  delImg.style.height = "35px";
  delBtn.appendChild(delImg);
  delBtn.setAttribute("onclick", "deleteTodo(this)");

  // Edit Button

  var editBtn = document.createElement("button");
  var editImg = document.createElement("img");
  editImg.src = "./images/edit.png";
  editImg.style.height = "35px";
  editBtn.appendChild(editImg);
  editBtn.setAttribute("onclick", "editItem(this)");

  li.appendChild(editBtn);
  li.appendChild(delBtn);
  list.appendChild(li);

  todoItem.value = "";
}
//Delete Todo
function deleteTodo(e) {
  var animateList = e.parentNode;
  animateList.classList.add("animate__animated", "animate__backOutRight");
}

//Edit Todo
function editItem(e) {
  var defaultTodo = e.parentNode.textContent;
  var editTodo = prompt("Edit your Todo Item", defaultTodo);
  e.parentNode.firstChild.nodeValue = editTodo;
}

//Delete All todos
function deleteAll() {
  list.innerHTML = "";
}
