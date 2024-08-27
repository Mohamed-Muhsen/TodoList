function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
        <button class="checkbox" onclick="toggleComplete(this)"></button>
        ${taskText}
        <button class="delete" onclick="removeTask(this)">Delete</button>
    `;
    
    taskList.appendChild(li);
    taskInput.value = '';
}

function removeTask(button) {
    const taskList = document.getElementById('taskList');
    taskList.removeChild(button.parentElement);
}

function toggleComplete(button) {
    const li = button.parentElement;
    li.classList.toggle('completed');
}
