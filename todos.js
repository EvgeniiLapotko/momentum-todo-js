const formTodo = document.querySelector('.js-form__todo')
const inputTodo = formTodo.querySelector('.input__todo')
const list = document.querySelector('.list')

const TODOS = 'toDos';

let localTodo = [];

const saveTodo = () => {
    localStorage.setItem(TODOS, JSON.stringify(localTodo))
}

const deleteElem = (e) => {
    elemParent = e.target.parentNode;
    list.removeChild(elemParent)
    const cleanTodos = localTodo.filter( a => a.id !== parseInt(elemParent.id))
    localTodo = cleanTodos
    saveTodo()
}

const createLi = (text) => {
    let li = document.createElement('li');
    li.classList.add('list__li');
    let btn = document.createElement('button')
    let span = document.createElement('span')
    let newId = localTodo.length + 1
    span.textContent = text
    btn.innerHTML = 'X'
    btn.addEventListener('click', deleteElem)
    li.appendChild(span)
    li.appendChild(btn)
    li.id = newId
    list.appendChild(li)
    const todoObject = {
        name : text,
        id : newId,
    }
    localTodo.push(todoObject)
    saveTodo()
}

const submitList = (e) => {
    e.preventDefault();
    value = inputTodo.value;
    createLi(value);
    inputTodo.value = '';
    
}

formTodo.addEventListener('submit', submitList)

function loadeTodos() {
    const todos = localStorage.getItem(TODOS)
    if (todos !== null){
        const parseTodos = JSON.parse(todos)
        parseTodos.forEach((a) => createLi(a.name))
    } 
}

function init() {
    loadeTodos()   
}

init()