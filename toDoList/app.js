let userInput = document.querySelector('.add_task input');
let addTask = document.querySelector('.add_task .plus');
let remove = document.querySelector('.delete');
let completeTask = document.querySelector('.task_status .task_completed span');
let taskCount = document.querySelector('.task_status .task_count span');
let container = document.querySelector('.task_content')




window.onload = function () {
    userInput.focus()
    creatNoTaskMsg()
}
// make afunction for adding tasks
addTask.onclick = function () {
    // if user input empty
    if (userInput.value === '') {
        console.log('no msg')
    } else {

        let noTaskMsg = document.querySelector('.no_task')
        if (document.body.contains(document.querySelector('.no_task'))) {
            noTaskMsg.remove()
        }
        //remove the no task message


        // creat new spans
        let taskBox = document.createElement("span")
        taskBox.className = 'task_box'

        //create span text
        let text = document.createTextNode(userInput.value)

        //create span delete
        let remove = document.createElement('span')
        remove.className = 'delete'

        //create delete text
        let removeText = document.createTextNode('delete')

        // add delete text to delete span
        remove.appendChild(removeText)

        //addtext span and delete span to the task box
        taskBox.appendChild(text)
        taskBox.appendChild(remove)

        //add every thing into the main container
        container.appendChild(taskBox)

        //empty the task bar
        userInput.value = ''

        //focus on task bar
        userInput.focus()

        //calculation of tasks count & finished count
        calculation();

    }
}

// activate delete button 
document.addEventListener('click', function (e) {
    if (e.target.className == 'delete') {
        e.target.parentNode.remove()

        //check if there is no task in tasks container
        if (container.childElementCount === 0) {
            creatNoTaskMsg()
        }
    }
    if (e.target.classList.contains('task_box')) {
        e.target.classList.toggle('finished')
    }
    calculation()
})

function creatNoTaskMsg() {
    let noTaskSpan = document.createElement('span')
    let noTaskText = document.createTextNode('No Tasks To Show')
    noTaskSpan.className = 'no_task'
    noTaskSpan.appendChild(noTaskText)
    container.appendChild(noTaskSpan)
}

function calculation() {

    //calculation of tasks count & finished count
    taskCount.innerHTML = document.querySelectorAll('.task_content .task_box').length;

    completeTask.innerHTML = document.querySelectorAll('.task_content .finished').length;
}


