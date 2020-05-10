const { Router } = require('express')
const { 
  createAnonUser,
  getUserById,
  getUserByUsername
} = require('../../controllers/users')

const route = Router()

route.get('/:id', async (req, res) => {
  let user;
  console.log(req.params.id)

  if (isNaN(parseInt(req.params.id))) {
    // when param is username
    user = await getUserByUsername(req.params.id)
  } else {
    // when param is user id
    user = await getUserById(req.params.id)
  }

  console.log(user)

  if (user) {
    res.status(200).send(user)
  } else {
    res.status(404).send({
      error: 'No such user id or username'
    })
  }
})

route.post('/', async (req, res) => {
  const user = await createAnonUser()
  res.status(201).send(user)
})

module.exports = {
  usersRoute: route
}