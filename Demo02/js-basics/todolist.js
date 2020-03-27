let btnAdd = document.getElementById('btnAdd')
let newTask = document.getElementById('newTask')
let taskList = document.getElementById('taskList')

btnAdd.onclick = function() {
  const newItem = document.createElement('li')
  newItem.textContent = newTask.value
  taskList.appendChild(newItem)
}

function populateList() {
  let start = Date.now()
  for (let i = 0; i < 1000; i++) {
    const newItem = document.createElement('li')
    newItem.textContent = i
    taskList.appendChild(newItem)
  }
  console.log('time taken =', Date.now() - start)
}
