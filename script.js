document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', addTask);
    taskList.addEventListener('click', handleTaskActions);

    function addTask(e) {
        e.preventDefault();
        const task = taskInput.value.trim();
        if (task === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            ${task}
            <button class="delete-btn" aria-label="Delete Task">X</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }

    function handleTaskActions(e) {
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove();
        } else {
            e.target.classList.toggle('completed');
        }
    }
});
