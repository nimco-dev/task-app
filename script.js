const input = document.getElementById('taskInput');
const list = document.getElementById('taskList');

// Function-ka lagu darayo Task cusub
function addTask() {
    if (input.value.trim() === "") return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span onclick="toggleComplete(this)" style="cursor: pointer; flex: 1;">${input.value}</span>
        <span class="delete-btn" onclick="removeTask(this)">DELETE</span>
    `;
    
    list.appendChild(li);
    input.value = "";
}

// Function-ka lagu calaamadeynayo in la qabtay (Complete)
function toggleComplete(element) {
    element.parentElement.classList.toggle('completed');
}

// Function-ka lagu tirtirayo Task-ga
function removeTask(element) {
    element.parentElement.style.opacity = '0';
    setTimeout(() => {
        element.parentElement.remove();
    }, 300);
}

// In lagu dari karo "Enter" key-ga
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});