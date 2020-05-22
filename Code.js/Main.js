var addBtn = document.getElementById('addTask');
var inputTittle = document.querySelector('#inputTitle').value;
var inputext = document.querySelector('#inputText').value;
var currentTasks = document.querySelector('#currentTasks');
var completedTasks = document.querySelector('#completedTasks');
var exit = document.querySelector('#exit');
var exit2 = document.querySelector('#exit2');
var addTask2 = document.querySelector("#addTask2");
var count1 = document.querySelector('#count1');
var count2 = document.querySelector('#count2');


//create counter1
let span = document.createElement('span');
count1.appendChild(span);

//create counter2
let span2 = document.createElement('span');
count2.appendChild(span2);


let todoList = [];









function displayToDo() {
    currentTasks.innerHTML = '';
    if (todoList.length === 0) currentTasks.innerHTML = '';
    todoList.forEach(function (item) {
        if (item.complete == false) {
            currentTasks.innerHTML += `  <li class="list-group-item d-flex w-100 mb-2 ${item.colorStile}" id="${item.id}">
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


//EXIT on x and close button
exit.addEventListener('click', function () {
    closeModal();
});
exit2.addEventListener('click', function () {
    closeModal();
});

//ADD TASK
addTask2.addEventListener('click', function () {
    let modal = document.querySelector('#exampleModal');
    document.body.classList.add('modal-open');
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    modal.setAttribute('style', 'display: block');
    document.querySelector('#inputTitle').value = '';
    document.querySelector('#inputText').value = '';
    document.querySelector('#Medium').checked = true;
})

//addToDo
addBtn.addEventListener('click', function (event) {
    event.preventDefault();
    let newTodo = {
        'id': Math.random(),
        'tittle': document.querySelector('#inputTitle').value,
        'text': document.querySelector('#inputText').value,
        "pripority": chooseRadio(document.querySelectorAll('input[name=gridRadios]')).value,
        "date": new Date(),
        'complete': false,
        'edit': false,
        'colorStile': 1,
        
    };
    if (document.querySelector('#inputTitle').value && document.querySelector('#inputText').value) {
        todoList.push(newTodo);
        for (let i = 0; i < todoList.length; i++) {
            if (todoList[i].edit == true) {
                todoList.splice(i, 1);
            }
        }
        for (let i = 0; i < todoList.length; i++) {
            if (todoList[i].pripority == "Low") {
                todoList[i].colorStile = 'lowPripority';
            } else if (todoList[i].pripority == "Medium") {
                todoList[i].colorStile = 'mediumPripority';
            } else if (todoList[i].pripority == "High") {
                todoList[i].colorStile = 'hightPripority';
            }
        }
        
        displayToDo();
        document.querySelector('#inputTitle').value = '';
        document.querySelector('#inputText').value = '';
        closeModal();
    }


})
