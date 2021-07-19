document.getElementById('toDoList').addEventListener('submit',createTicket);
document.querySelector('ul.tasks').addEventListener('click',deleteOrTick);

function createTicket(e){
    e.preventDefault();
    let input = document.querySelector('input');
    if(input.value != '') {
        addTask(input.value);
    }
    input.value = '';
}

function addTask(task){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.className = 'd-flex justify-content-between align-items-center p-2 mb-2';
    let id = new Date().getTime();
    li.innerHTML = `<div class="d-flex align-items-center"><input class="mr-4" type="checkbox" id="${id}"><label class="mb-0" for="${id}">${task}</label><i class="fa fa-trash delete" aria-hidden="true"></i></div>`;
    li.style.background = "#f8ff49";
    ul.appendChild(li);
}

function deleteOrTick(e){
    if(e.target.classList.contains('delete'))
        deleteTask(e);
    else {
        tickTask(e);
    }
}


function deleteTask(e){
    let el = e.target.parentElement.parentElement;
    let parentNode = el.parentElement;
    parentNode.removeChild(el);
}

function tickTask(e){
    const task = e.target.nextSibling;
    const li = e.target.parentElement.parentElement;
    if (task && task.style) {
        if(e.target.checked){
            task.style.textDecoration = "line-through";
            li.style.background = "#66fc88";
        }else {
            task.style.textDecoration = "none";
            li.style.background = "#fff139";
        }
    }
}
