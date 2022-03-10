// Selectors
const todoInput = document.querySelector(".todo-input")
const todoBtn = document.querySelector(".todo-btn")
const todoList = document.querySelector(".todo-list")
const todoVal = document.querySelector(".todo-input").value

// Event Listeners

todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// Functions 

function addTodo(e) {
    e.preventDefault();
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo")

    const newTodo = document.createElement("LI")
    newTodo.textContent = todoInput.value
    newTodo.classList.add("todo-item")


    const btnDiv = document.createElement("div")
    btnDiv.classList.add("btn-div")

    const checkBtn = document.createElement("button")
    checkBtn.classList.add("checkBtn")
    checkBtn.innerHTML = '<i class="fas fa-check"></i> '

    const delBtn = document.createElement("button")
    delBtn.classList.add("delBtn")
    delBtn.innerHTML = '<i class="fas fa-trash"></i> '


    btnDiv.append(checkBtn)
    btnDiv.append(delBtn)
    todoDiv.append(newTodo)
    todoDiv.append(btnDiv)
   

    todoList.append(todoDiv)
    todoInput.value = ""
    
}


function deleteCheck(e) {
    const item = e.target;

    if(item.classList[0] === "delBtn"){
        const btnCon = item.parentElement;
        const todo = btnCon.parentElement;
        todo.remove();
    }

    if(item.classList[0] === "checkBtn"){
        const btnCon = item.parentElement;
        const todo = btnCon.parentElement;
        todo.classList.toggle("completed")
    }
}