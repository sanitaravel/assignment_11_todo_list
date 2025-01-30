document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todoForm') as HTMLFormElement;
    const todoInput = document.getElementById('todoInput') as HTMLInputElement;
    const todoList = document.getElementById('todoList') as HTMLUListElement;

    todoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const task = todoInput.value.trim();
        if (task) {
            const listItem = document.createElement('li');
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            listItem.appendChild(checkbox);
            
            checkbox.addEventListener('change', () => {
                if (checkbox.checked) {
                    listItem.style.textDecoration = 'line-through';
                } else {
                    listItem.style.textDecoration = 'none';
                }
            });
            
            const text = document.createTextNode(task);
            listItem.appendChild(text);
            
            todoList.appendChild(listItem);
            todoInput.value = '';
        }
    });
});
