var addBtn = document.getElementById('addTask');
var inputTittle = document.querySelector('#inputTitle').value;
var inputext = document.querySelector('#inputText').value;
var currentTasks = document.querySelector('#currentTasks');
var completedTasks = document.querySelector('#completedTasks');

let todoList = [];


function displayToDo() {
    currentTasks.innerHTML = '';
    if (todoList.length === 0) currentTasks.innerHTML = '';
    todoList.forEach(function (item) {
        if (item.complete == false) {
            currentTasks.innerHTML += `  <li class="list-group-item d-flex w-100 mb-2" id="${item.id}">
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
                <button type="button" class="btn btn-success w-100" id="${item.id}">Complete</button>
                <button type="button" class="btn btn-info w-100 my-2" id="${item.id}">Edit</button>
                <button type="button" class="btn btn-danger w-100" id="${item.id}">Delete</button>
            </div>
        </div>
    </li>`;
        }
    })
};


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


function showModal() {

    
}

//addToDo
addBtn.addEventListener('click', function (event) {
    event.preventDefault();
    let newTodo = {
        'id': Math.random(),
        'tittle': document.querySelector('#inputTitle').value,
        'text': document.querySelector('#inputText').value,
        "pripority": chooseRadio(document.querySelectorAll('input[name=gridRadios]')).value,
        "date": new Date(),
        'complete': false
    };
    if (document.querySelector('#inputTitle').value && document.querySelector('#inputText').value) {
        todoList.push(newTodo);
        displayToDo();
        document.querySelector('#inputTitle').value = '';
        document.querySelector('#inputText').value = '';
        closeModal();
    }


})


//COMPLETE DELETE EDIT

//COMPLETE
currentTasks.addEventListener('click', function (e) {
    if (e.target.innerHTML == 'Complete') {
        for (let item of currentTasks.children) {
            if (e.target.id == item.id) {
                completedTasks.appendChild(item);
                //chenge flag
                for (let i = 0; i < todoList.length; i++) {
                    if (e.target.id == todoList[i].id) {
                        todoList[i].complete = true;
                    }
                }
            }
        }
    }



    //DELETE
    else if (e.target.innerHTML == 'Delete') {
        for (let item of currentTasks.children) {
            if (e.target.id == item.id) {
                item.remove();
                for (let i = 0; i < todoList.length; i++) {
                    if (e.target.id == todoList[i].id) {
                        todoList.splice(i, 1);
                    }
                }
            }
        };

    }


    //EDIT
    else if (e.target.innerHTML == 'Edit') {
        for (let item of currentTasks.children) {
            if (e.target.id == item.id) {
                document.querySelector('#addTask2').click();

            }
        }

    }

});



// DELETE COMPLETE
completedTasks.addEventListener('click', function (e) {
    if (e.target.innerHTML == 'Delete') {
        for (let item of completedTasks.children) {
            if (e.target.id == item.id) {
                item.remove();
                for (let i = 0; i < todoList.length; i++) {
                    if (e.target.id == todoList[i].id) {
                        todoList.splice(i, 1);
                    }
                }
            }
        };
    }
});



// SORT
document.querySelector('#des').addEventListener('click', function () {
    for (let item of todoList) {
        if (item.complete == false) {
            todoList = todoList.sort(function (a, b) {
                return a.date - b.date;
            });
        }
    }
    displayToDo();
});
document.querySelector('#asc').addEventListener('click', function () {
    for (let item of todoList) {
        if (item.complete == false) {
            todoList = todoList.sort(function (a, b) {
                return b.date - a.date;
            });
        }
    }
    displayToDo();
});
