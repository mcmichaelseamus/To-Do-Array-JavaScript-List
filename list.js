    var todos = [''];

var input = prompt("What would you like to do?");

while(input !== "quit")   {
    if(input === "list") {
        listTodos();
    }  else if(input === "new") {
        addTodo();
    } else if(input === "delete"){
        deleteTodo();
    }
   input = prompt("what would you like to do?") 
}
console.log("You have quit the application")

//delete function 


function listTodos(){
    todos.forEach(function(todo, i) {
        console.log(i + ":"+ todo);
    });
    console.log("********")
}


function addTodo(){
    //new todo popup
    var newToDo = prompt("Enter new to-do");
    //adds new item
    todos.push(newToDo);
}

function deleteTodo(){
    var index = prompt("Enter index of todo to delete");     
        todos.splice(index,1);
        console.log("Item is now deleted"); 
}
