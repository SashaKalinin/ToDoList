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
                         completeList.push(todoList[i]);
                         todoList.splice(i,1);
                         displayToDo();
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
                        console.log(todoList);
                        displayToDo();
                    }
                }
            }
        };
    }

    //EDIT
    else if (e.target.innerHTML == 'Edit') {
        for (let item of currentTasks.children) {
            if (e.target.id == item.id) {
                for (let item of todoList) {
                    if (e.target.id == item.id) {
                        item.edit = true;
                        document.querySelector('#inputTitle').value = item.tittle;
                        document.querySelector('#inputText').value = item.text;
                        let radios = document.querySelectorAll('input[name=gridRadios]');
                        for (let i = 0; i < radios.length; i++) {
                            if (radios[i].id == item.pripority) {
                                radios[i].checked = true;
                            }
                        }showModal();
                    } 
                    
                }
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
                for (let i = 0; i < completeList.length; i++) {
                    if (e.target.id == completeList[i].id) {
                        completeList.splice(i, 1);
                        
                    }displayToDo();
                }
            }
        };
    }
});