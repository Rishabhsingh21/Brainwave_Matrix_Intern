document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    function createTaskElement(taskContent) {
        const li = document.createElement('li');
        
        
        const span = document.createElement('span');
        span.textContent = taskContent;
        li.appendChild(span);

        
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-btn');

        editButton.addEventListener('click', () => {
           
            if (li.classList.contains('edit-mode')) {
                const newContent = li.querySelector('input').value.trim();
                if (newContent) {
                    span.textContent = newContent;
                    li.classList.remove('edit-mode');
                }
            } else {
                li.classList.add('edit-mode');
                li.querySelector('input').focus();
            }
        });

        li.appendChild(editButton);

        // Create the delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', () => {
            li.classList.add('removing');
            setTimeout(() => li.remove(), 300); 
        });
        li.appendChild(deleteButton);

        // Toggle task completion
        li.addEventListener('click', () => {
            if (!li.classList.contains('edit-mode')) {
                li.classList.toggle('completed');
            }
        });

        // Add input for editing
        const input = document.createElement('input');
        input.type = 'text';
        input.value = taskContent;
        input.style.display = 'none';
        li.appendChild(input);

        
        setTimeout(() => li.classList.add('added'), 100); 

        return li;
    }

    function addTask() {

        const taskContent = taskInput.value.trim();
        if (taskContent) {
            const taskElement = createTaskElement(taskContent);
            taskList.appendChild(taskElement);
            taskInput.value = ''; 
        }
    }

    addTaskButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
