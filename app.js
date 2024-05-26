

const todoContainer = document.querySelector('.todo-container')

const inputField = document.querySelector('.inputField-search')

const newTaskBtn = document.querySelector('.new-task-btn')

const todoList = document.querySelector('.todo-list')
const description = document.querySelector('.description')
const editBtn = document.querySelector('.edit')
const doneBtn = document.querySelector('.done')
const deleteBtn = document.querySelector('.delete')

const backdrop = document.querySelector('.backdrop')
const modal = document.querySelector('.modal')

const cancel = document.querySelector('.cancel')



function openModal(){
    backdrop.style.display = 'block'
    modal.style.display = 'block'
}

newTaskBtn.onclick = openModal

function closeModal(){
    backdrop.style.display = 'none'
    modal.style.display = 'none'
}

cancel.onclick = closeModal
