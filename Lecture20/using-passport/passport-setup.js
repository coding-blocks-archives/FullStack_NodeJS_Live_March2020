const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const { Users } = require('./models')

passport.use(
  new LocalStrategy(async function (username, password, done) {
    try {
      const user = await Users.findOne({
        where: { username },
      })

      if (!user) {
        console.log(' = = = = = ', 'case 1')
        // no user with that username found
        return done(null, false)
      }

      if (user.password !== password) {
        console.log(' = = = = = ', 'case 2')
        // wrong password provided
        return done(null, false)
      }
      console.log(' = = = = = ', 'case 3')

      done(null, user)
    } catch (err) {
      // if error during db operation
      done(err)
    }
  })
)

passport.serializeUser (function (user, done) {
  console.log(user)
  done(null, user.id)
})

passport.deserializeUser (async function (userId, done) {
  try {
    const user = await Users.findByPk(userId)
    if (user) 
      return done(null, user)
    else 
      throw new Error('Could not deserialise User')
  } catch (err) {
    done(err)
  }
})

module.exports = { passport }