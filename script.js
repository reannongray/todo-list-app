document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskDate = document.getElementById('task-date');
    const taskNotes = document.getElementById('task-notes');
    const taskPriority = document.getElementById('task-priority');
    const taskList = document.getElementById('task-list');
    const nameForm = document.getElementById('name-form');
    const userNameInput = document.getElementById('user-name');
    const todoTitle = document.getElementById('user-todo-title');

    // Display user name on the To-Do List
    nameForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userName = userNameInput.value.trim();
        if (userName) {
            todoTitle.textContent = `${userName}'s To-Do List`;
            nameForm.style.display = 'none'; // Hide the name input after submitting
        }
    });

    // Function to add a new task
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        const taskDueDate = taskDate.value;
        const taskPriorityValue = taskPriority.value;
        const taskNotesValue = taskNotes.value;

        if (taskText === '') return;

        // Create a new list item (task)
        const newTask = document.createElement('li');
        const taskContent = document.createElement('div');
        taskContent.classList.add('task-content');
        taskContent.innerHTML = `<strong>${taskText}</strong> - Due: ${taskDueDate}<br>Notes: ${taskNotesValue}`;

        newTask.classList.add(`priority-${taskPriorityValue}`);

        const taskActions = document.createElement('div');
        taskActions.classList.add('task-actions');

        // Add edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => {
            taskInput.value = taskText;
            taskDate.value = taskDueDate;
            taskNotes.value = taskNotesValue;
            taskPriority.value = taskPriorityValue;
            taskList.removeChild(newTask);
        });

        // Add delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(newTask);
        });

        taskActions.appendChild(editButton);
        taskActions.appendChild(deleteButton);

        newTask.appendChild(taskContent);
        newTask.appendChild(taskActions);

        taskList.appendChild(newTask);

        // Clear the input fields after adding the task
        taskInput.value = '';
        taskDate.value = '';
        taskNotes.value = '';
        taskPriority.value = 'medium';
    });
});