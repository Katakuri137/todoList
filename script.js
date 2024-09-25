document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');

    addButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.className = 'task-item';
            taskItem.innerHTML = `<p>${taskText}</p><button class="delete-button">Supprimer</button>`;
            taskList.appendChild(taskItem);
            taskInput.value = '';

            const deleteButton = taskItem.querySelector('.delete-button');
            deleteButton.addEventListener('click', function () {
                taskList.removeChild(taskItem);
            });
        }
    });

    taskInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });
});