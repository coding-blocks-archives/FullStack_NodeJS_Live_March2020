const { Users } = require('../db/models')
const { genRandomUsername } = require('../utils/username')

async function createAnonUser() {
  const user = await Users.create({
    username: genRandomUsername(),
  })

  return user
}

async function getUserById(id) {
  return await Users.findOne({ where: { id } })
}

async function getUserByUsername(username) {
  return await Users.findOne({ where: { username } })
}

module.exports = {
  createAnonUser,
  getUserById,
  getUserByUsername,
}

/*  Test Code */
/*
async function task () {
    console.log(await createAnonUser())
    console.log('---------------------')
    console.log(await createAnonUser())
    console.log('---------------------')
    console.log(await createAnonUser())
    console.log('---------------------')
    console.log(await createAnonUser())
    console.log('---------------------')
}

task() 
*/
