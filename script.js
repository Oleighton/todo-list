

var addButton = document.getElementById("add-button");

addButton.addEventListener("click", addToDoItem);

function addToDoItem() {
  var itemText = toDoEntryBox.value;
  newToDoItem(itemText, false);
}

var addButton = document.getElementById("clear-completed-button");

addButton.addEventListener("click", clearCompletedToDoItems);

function clearCompletedToDoItems() {
    var completedItems = toDoList.getElementsByClassName("completed");

    while (completedItems.length > 0) {
        completedItems.item(0).remove();
    }
}

var addButton = document.getElementById("empty-button");

addButton.addEventListener("click", emptyList);


function emptyList() {
  var toDoItems = toDoList.children;

  while (toDoItems.length > 0) {
    toDoItems.item(0).remove();
  }
}

var addButton = document.getElementById("save-button");

addButton.addEventListener("click", saveList);

function saveList() {
  alert("Save button clicked!");
}

var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");

function newToDoItem(itemText, completed) {
  var toDoItem = document.createElement("li");
  var toDoText = document.createTextNode(itemText);
  toDoItem.appendChild(toDoText);

  if (completed) {
    toDoItem.classList.add("completed");
  } else {
    toDoList.appendChild(toDoItem);
    toDoItem.addEventListener('dblclick', toggleToDoItemState);

    function toggleToDoItemState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
     }
   }




 }

}
