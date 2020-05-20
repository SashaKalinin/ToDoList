const addBtn = document.getElementById('addTask');
const inputTittle = document.querySelector('#inputTitle').value;
const inputext = document.querySelector('#inputText').value;
const currentTasks = document.querySelector('#currentTasks');
const completedTasks = document.querySelector('#completedTasks');

let todoList = [];


// parse localstorage
if (localStorage.getItem('todo')) {
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayMessages();
}


//display todo
function displayMessages() {
    currentTasks.innerHTML = '';
    if (todoList.length === 0) currentTasks.innerHTML = '';
    todoList.forEach(function (item, i) {
        currentTasks.innerHTML += `  <li class="list-group-item d-flex w-100 mb-2" id="item_${i}">
        <div class="w-100 mr-2">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">${item.tittle}</h5>
                <div>
                    <small class="mr-2">${item.pripority}</small>
                    <small>${item.date.toLocaleString()}</small>
                </div>

            </div>
            <p class="mb-1 w-100">${item.text}</p>
        </div>
        <div class="dropdown m-2 dropleft">
            <button class="btn btn-secondary h-100" type="button" id="dropdownMenuItem1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v"></i>
            </button>
            <div class="dropdown-menu p-2 flex-column" aria-labelledby="dropdownMenuItem1">
                <button type="button" class="btn btn-success w-100" id="item_${i}">Complete</button>
                <button type="button" class="btn btn-info w-100 my-2" id="item_${i}">Edit</button>
                <button type="button" class="btn btn-danger w-100" id="item_${i}">Delete</button>
            </div>
        </div>
    </li>`;

    })
};


//choose radio
function chooseRadio(radios) {
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i];
        }
    }
};

//close modal
function closeModal() {
    let modal = document.querySelector('#exampleModal');
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    modal.setAttribute('style', 'display: none');
    const modalBackdrops = document.getElementsByClassName('modal-backdrop');
    document.body.removeChild(modalBackdrops[0]);
}


//addtodo
addBtn.addEventListener('click', function (event) {
    event.preventDefault();
    let newTodo = {
        'tittle': document.querySelector('#inputTitle').value,
        'text': document.querySelector('#inputText').value,
        "pripority": chooseRadio(document.querySelectorAll('input[name=gridRadios]')).value,
        "date": new Date(),
        'complete': false
    };

    if (document.querySelector('#inputTitle').value && document.querySelector('#inputText').value) {

        todoList.push(newTodo);
        displayMessages();
        localStorage.setItem('todo', JSON.stringify(todoList));
        inputTittle.value = '';
        inputext.value = '';
        closeModal();
    }
});

//complete
currentTasks.addEventListener('click', function (e) {
    if (e.target.innerHTML == 'Complete') {
        for (let item of currentTasks.children) {
            if (e.target.id == item.id) {
                completedTasks.appendChild(item);
            }
        }
        //DELTE
    } else if (e.target.innerHTML == 'Delete') {
        for (let item of currentTasks.children  ) {
            if (e.target.id == item.id) {
                item.remove();
            }
        }
       
    } 
    
});

completedTasks.addEventListener('click', function (e) {
     //DELTE
    if (e.target.innerHTML == 'Delete') {
        for (let item of completedTasks.children  ) {
            if (e.target.id == item.id) {
                item.remove();
            }
        }
       
    } 
    
});

// SORT
document.querySelector('#des').addEventListener('click',function() {
    todoList = todoList.sort(function (a, b) {
        return a.date - b.date;
    });
    displayMessages();
});
document.querySelector('#asc').addEventListener('click',function() {
    todoList = todoList.sort(function (a, b) {
        return b.date - a.date;
    });
    displayMessages();
});






