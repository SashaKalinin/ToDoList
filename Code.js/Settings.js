let munuFrop = document.querySelector('#dropdownMenuSettings');
let sortButton1 = document.querySelector('#des');
let sortButton2 = document.querySelector('#asc');
let addTask2color = document.querySelector('#addTask2');
let blueButton = document.querySelector('#blue');
let redButton = document.querySelector('#red');
let purpleButton = document.querySelector('#purple');
let navigationCalor = document.querySelector('#navigationCalor');
let addTaskColor = document.querySelector('#addTask');
let exit2Color = document.querySelector('#exit2');


redButton.addEventListener('click',function (e) {
    e.preventDefault()
    sortButton1.classList.add("bgColorred");
    sortButton2.classList.add("bgColorred");
    addTask2color.classList.add("bgColorred");
    munuFrop.classList.add("bgColorred");
    addTaskColor.classList.add("bgColorred")
    exit2Color.classList.add("navColorRed");
    
    sortButton1.classList.remove("bgColorpurple");
    sortButton2.classList.remove("bgColorpurple");
    addTask2color.classList.remove("bgColorpurple");
    munuFrop.classList.remove("bgColorpurple");
    addTaskColor.classList.remove("bgColorpurple");
    addTaskColor.classList.remove("btn-primary");
    exit2Color.classList.remove("navColorPurple");
    exit2Color.classList.remove("btn-secondary");





    navigationCalor.classList.add('navColorRed');
    navigationCalor.classList.remove('navColorPurple');
    navigationCalor.classList.remove('bg-light');






})

purpleButton.addEventListener('click',function (e) {
    e.preventDefault()
    sortButton1.classList.add("bgColorpurple");
    sortButton2.classList.add("bgColorpurple");
    addTask2color.classList.add("bgColorpurple");
    munuFrop.classList.add("bgColorpurple");
    addTaskColor.classList.add("bgColorpurple");
    exit2Color.classList.add("navColorPurple");

    sortButton1.classList.remove("bgColorred");
    sortButton2.classList.remove("bgColorred");
    addTask2color.classList.remove("bgColorred");
    munuFrop.classList.remove("bgColorred");
    addTaskColor.classList.remove("bgColorred");
    addTaskColor.classList.remove("btn-primary");

    navigationCalor.classList.add('navColorPurple');
    navigationCalor.classList.remove('navColorRed');
    navigationCalor.classList.remove('bg-light');
    exit2Color.classList.remove("btn-secondary");

})


blueButton.addEventListener('click',function (e) {
    e.preventDefault()
    sortButton1.classList.remove("bgColorred");
    sortButton2.classList.remove("bgColorred");
    addTask2color.classList.remove("bgColorred");
    munuFrop.classList.remove("bgColorred");

    sortButton1.classList.remove("bgColorpurple");
    sortButton2.classList.remove("bgColorpurple");
    addTask2color.classList.remove("bgColorpurple");
    munuFrop.classList.remove("bgColorpurple");
    addTaskColor.classList.remove("bgColorpurple");
    addTaskColor.classList.remove("btn-primary");

    navigationCalor.classList.remove('navColorRed');
    navigationCalor.classList.remove('navColorPurple');
    navigationCalor.classList.add('bg-light');
    addTaskColor.classList.add("btn-primary");

    exit2Color.classList.remove("navColorRed");
    exit2Color.classList.remove("navColorPurple");
    exit2Color.classList.add("btn-secondary");



})

