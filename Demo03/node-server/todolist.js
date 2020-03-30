const express = require('express')

const app = express() 

let todos = [
    'first task',
    'second task'
]

app.get('/', (req, res) => {

    let listOfTodos = ''
    for (let i = 0; i < todos.length; i++) {
        listOfTodos += '<li>' + todos[i] + '</li>'
    }

    let html = `
    <html>
    <body>
        <form action="add">
            <input name="task">
            <button type="submit">ADD</button>
        </form>
        <ul>
            ${listOfTodos}
        </ul>
    </body>
    </html>
    `
    res.send(html)
})

app.get('/add', (req, res) => {
    console.log(req.query)
    todos.push(req.query.task)
    res.redirect('/')
})

app.listen(4444)