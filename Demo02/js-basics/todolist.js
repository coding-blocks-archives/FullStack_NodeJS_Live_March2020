let btnAdd = document.getElementById('btnAdd')
let newTask = document.getElementById('newTask')
let taskList = document.getElementById('taskList')

btnAdd.onclick = function () {
    taskList.innerHTML += '<li>' + newTask.value + '</li>'
}