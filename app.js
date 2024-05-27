

const todoContainer = document.querySelector('.todo-container')

const inputFieldSearch = document.querySelector('.inputField-search')

const newTaskBtn = document.querySelector('.new-task-btn')

const todoList = document.querySelector('.todo-list')
const description = document.querySelector('.description')
const editBtn = document.querySelector('.edit')
const doneBtn = document.querySelector('.done')
const deleteBtn = document.querySelector('.delete')

const backdrop = document.querySelector('.backdrop')
const modal = document.querySelector('.modal')

const content = document.querySelector('.content')

const inputFieldNt = document.querySelector('.inputField-nt')
const cancel = document.querySelector('.cancel')
const add = document.querySelector('.add')



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

const todoListArray = []

function addTask(){
   
    const taskName = inputFieldNt.value
    const todoObject = {
        taskId : todoListArray.length + 1,
        taskName : taskName
    }
    todoListArray.push(todoObject)
    renderTodoList()
    closeModal()
}

add.onclick = addTask

function renderTodoList(){
    content.innerHTML = ''

    for(var index=0; index < todoListArray.length; index++){
// creating a list item
        const dynamicList = document.createElement('div')
        dynamicList.classList.add('todo-list')
        const description = document.createElement('div')
        description.classList.add('description')
        const matter = document.createElement('span')
        matter.classList.add('span')
        matter.textContent = todoListArray[index].taskName
        description.appendChild(matter)
        dynamicList.appendChild(description)
// adding buttons
        const buttons = document.createElement('div')
        buttons.classList.add('buttons')
        const edit = document.createElement('button')
        edit.classList.add('edit')
        edit.textContent = 'Edit'
        const done = document.createElement('button')
        done.classList.add('done')
        done.textContent = 'Done'
        const deletebtn1 = document.createElement('button')
        deletebtn1.classList.add('delete')
        deletebtn1.textContent = 'Delete'
        buttons.appendChild(edit)
        buttons.appendChild(done)
        buttons.appendChild(deletebtn1)
        dynamicList.appendChild(buttons)
// appending everything
        content.appendChild(dynamicList)
    }
}
