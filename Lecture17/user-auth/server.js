const express = require('express')
const session = require('express-session')

const { db, Users } = require('./db')

const app = express()

app.set('view engine', 'hbs')
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: '24knb6k247b2k7b2k7bk247hb2kh7b2'
}))

app.get('/signup', (req, res) => {
  res.render('signup')
})

app.post('/signup', async (req, res) => {
  const user = await Users.create({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  })

  res.status(201).send(`User ${user.id} created`)
})


db.sync()
  .then(() => {
    app.listen(2222, () => console.log('started on http://localhost:2222'))
  })
  .catch(console.error)