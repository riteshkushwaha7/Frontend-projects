const addButton = document.querySelector('.add');
const removeButton = document.querySelector('.remove');
const ul = document.querySelector('.uls');
const taskInput = document.querySelector('.task-input');

let isRemoveMode = false;  

function AddTasks() {
    const input = taskInput.value.trim();
    if (input) {
        const li = document.createElement('li');
        li.innerHTML = `<div class="task-item" style="display:none;">❌</div><span>${input}</span>`;
        const div = li.querySelector('.task-item');
        ul.appendChild(li);
        taskInput.value = ''; 
    }
}

addButton.addEventListener('click', AddTasks);

removeButton.addEventListener('click', function () {
    isRemoveMode = !isRemoveMode;  

    const items = document.querySelectorAll('.uls .task-item');
    items.forEach(item => {
        if (isRemoveMode) {
            item.style.display = 'inline';  
            item.addEventListener('click', function () {
                item.parentElement.remove();
            });
        } else {
            item.style.display = 'none';  
            item.removeEventListener('click', function () {
                item.parentElement.remove();
            });
        }
    });
});

document.addEventListener('click', function (event) {
    const isClickInside = removeButton.contains(event.target) || ul.contains(event.target);
    if (!isClickInside && isRemoveMode) {
        isRemoveMode = false;
        const items = document.querySelectorAll('.uls .task-item');
        items.forEach(item => {
            item.style.display = 'none';  
            item.removeEventListener('click', function () {
                item.parentElement.remove();
            });
        });
    }
});
