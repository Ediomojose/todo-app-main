// -----------------SELECTORS-------------------//
const todoInput = document.querySelector('input')
const createTodoBtn = document.querySelector('.checkBtn');
const todoList = document.querySelector('.todoList');
const toggleBackgroundBtn = document.querySelector('.toggleBackgroundBtn');







// ---------------EVENT LISTENERS-----------------//
createTodoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
toggleBackgroundBtn.addEventListener('click', toggleBackground);






// ------------------FUNCTIONS----------------- //
function addTodo(event){
    event.preventDefault();
    // Add a Div
    const todoDiv = document.createElement('div');
    // Add a className
    todoDiv.classList.add('todo');

    // Add a CheckBtn
    const checkedTodoBtn = document.createElement('button');
    checkedTodoBtn.innerHTML = '<div class="checkListContainer"><img src="/images/icon-check.svg" alt="icon-check"></div>';
    // Add a className
    checkedTodoBtn.classList.add('checkListBtn');
    todoDiv.appendChild(checkedTodoBtn);

    // Add Li
    const todoItem = document.createElement('li');
    todoItem.innerText = todoInput.value
    // Add a className
    todoItem.classList.add('todoItem');
    todoDiv.appendChild(todoItem);

    // Add a removeBtn
    const deleteTodoBtn = document.createElement('button');
    deleteTodoBtn.innerHTML = ' <img src="/images/icon-cross.svg" alt="icon-cross">';
    // Add a className
    deleteTodoBtn.classList.add('removeListBtn');
    todoDiv.appendChild(deleteTodoBtn);

    todoList.appendChild(todoDiv);

};


function deleteCheck(event){
    const item = event.target
    const markBox = document.querySelector('.checkListContainer')
   if (item.classList[0]==='removeListBtn') {
    const todo = item.parentElement
    todo.remove()
   };
   

   if(item.classList[0]==='checkListBtn') {
    const todo = item.parentElement
    todo.classList.toggle('markChecked')
   };

   if(item.classList[0]==='checkListBtn') {
    // const markBox = item.parentElement
    markBox.classList.add('toggleMarkBox')
   };
    
};


function toggleBackground(event){
    if(toggleBackgroundBtn.click === true){
        document.documentElement.classList.toggle('lightTheme');
        document.documentElement.classList.toggle('darkTheme');
        window.localStorage.setItem('toggleBackgroundBtn', 'darkTheme');
    }else{
        document.documentElement.classList.toggle('lightTheme');
        document.documentElement.classList.toggle('darkTheme');
        window.localStorage.setItem('toggleBackgroundBtn', 'lightTheme');
    };
};

const toggleInterface = window.localStorage.getItem('toggleBackgroundBtn');
if(toggleInterface === 'lightTheme'){
    toggleBackgroundBtn.click = true;
    document.documentElement.classList.toggle('darkTheme');
    document.documentElement.classList.toggle('lightTheme');
}

if(toggleInterface === 'darkTheme'){
    toggleBackgroundBtn.click = false;
    document.documentElement.classList.toggle('lightTheme');
    document.documentElement.classList.toggle('lightTheme');
}



