let btnWait1 = document.getElementById('btnWait1')
let inpTimeout1 = document.getElementById('inpTimeout1')

function wait1(timeout, done) {
  if (isNaN(parseInt(timeout))) {
    return done(new Error('Timeout must be a number'))
  }

  setTimeout(() => {
    done(null)
  }, timeout)
}

btnWait1.onclick = function () {
  wait1(inpTimeout1.value, (err) => {
    if (err) console.error(err) 
    else console.log('wait over')
  })
}
