var list = document.getElementById("list");
firebase
  .database()
  .ref("todos")
  .on("child_added", function (data) {
    var li = document.createElement("li");
    var liText = document.createTextNode(data.val().value);
    li.appendChild(liText);

    //  Delete Button

    var delBtn = document.createElement("button");
    var delImg = document.createElement("img");
    delImg.src = "./images/bin.png";
    delImg.style.height = "35px";
    delBtn.setAttribute("id", data.val().key);
    delBtn.appendChild(delImg);
    delBtn.setAttribute("onclick", "deleteTodo(this)");

    // Edit Button

    var editBtn = document.createElement("button");
    var editImg = document.createElement("img");
    editImg.src = "./images/edit.png";
    editImg.style.height = "35px";
    editBtn.setAttribute("id", data.val().key);
    editBtn.appendChild(editImg);
    editBtn.setAttribute("onclick", "editItem(this)");

    li.appendChild(editBtn);
    li.appendChild(delBtn);
    list.appendChild(li);
  });
function addTodo() {
  // create lists
  var todoItem = document.getElementById("todo-item");
  var firebase_database = firebase.database().ref("todos");
  var key = firebase_database.push().key;
  var fire_todo = {
    value: todoItem.value,
    key: key,
  };
  firebase_database.child(key).set(fire_todo);

  todoItem.value = "";
}
//Delete Todo
function deleteTodo(e) {
  //Removing from database
  firebase.database().ref("todos").child(e.id).remove();
  var animateList = e.parentNode;
  animateList.classList.add("animate__animated", "animate__backOutRight");
}

//Edit Todo
function editItem(e) {
  var defaultTodo = e.parentNode.textContent;
  var editTodo = prompt("Edit your Todo Item", defaultTodo);
  e.parentNode.firstChild.nodeValue = editTodo;
  var edit_firebaseTodo = {
    value: editTodo,
    key: e.id,
  };
  firebase.database().ref("todos").child(e.id).set(edit_firebaseTodo);
  console.log(edit_firebaseTodo);
}

//Delete All todos
function deleteAll() {
  firebase.database().ref("todos").remove();
  list.innerHTML = "";
}
