const MyPromise = require('../src/chaining')

const promise = new MyPromise((fulfill, reject) => {
  console.log('Do something...')
  setTimeout(() => {
    fulfill(200)
  }, 1000)
})

promise.then(val => {
  console.log('Callback 1:', val)
}).then(val => {
  console.log('callback 2:', val)
})
