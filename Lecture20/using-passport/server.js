const express = require('express')
const session = require('express-session')

const { db, Users } = require('./models')
const { passport } = require('./passport-setup') // ✅
// const passport = require('passport') ❌

const app = express()

app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: '24knb6k247b2k7b2k7bk247hb2kh7b2',
  })
)

app.use(passport.initialize())
app.use(passport.session())

app.get('/signup', (req, res) => {
  res.render('signup')
})

app.post('/signup', async (req, res) => {
  const user = await Users.create({
    username: req.body.username,
    password: req.body.password, // NOTE: in production we save hash of password
    email: req.body.email,
  })

  res.status(201).send(`User ${user.id} created`)
})

app.get('/login', (req, res) => {
  res.render('login')
})

app.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/login',
  })
)
app.get('/login/cb', passport.authenticate('oneauth'))
app.get(
  '/login/cb/callback',
  passport.authenticate('oneauth', {
    successRedirect: '/profile',
    failureRedirect: '/login',
  })
)

app.get('/profile', async (req, res) => {
  const user = req.user
  res.render('profile', { user })
})

app.get('/logout' /* TODO */)

db.sync()
  .then(() => {
    app.listen(2222, () => console.log('started on http://localhost:2222'))
  })
  .catch(console.error)
