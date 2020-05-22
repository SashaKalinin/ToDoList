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
