//local storage array to store todos
let todos = [];

function validateForm(todo, date) {
    if (todo.trim() === '' || date === '') {
        return false;
    }
    return true;
}

function addTodo() {
    const todoInput = document.getElementById('todo-input').value;
    const todoDate = document.getElementById('todo-date').value;

    if (!validateForm(todoInput, todoDate)) {
        alert('Please fill in all fields correctly.');
    } else {
        console.log('Todo added:', todoInput, todoDate);

        // Add todo to the todos array
        todos.push({ task: todoInput, date: todoDate });

        renderTodos();
}

}

function deleteTodo() {
    const clear
}   

function filterTodos() {

}   

function renderTodos() {
    const todoList = document.getElementById('todo-list');
    
    // Clear existing list
    todoList.innerHTML = ''; 

    // Render each todo
    todos.forEach((todo, index) => {
        todoList.innerHTML += `<li>
            <span>${todo.task} - ${todo.date}</span>
        </li>`;
    });
}
