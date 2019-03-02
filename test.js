const MyPromise = require('./multiple-then')

const a = 1

const promise = new MyPromise((onFulfilled, onRejected) => {
  console.log('do something...')
  setTimeout(() => {
    // a = 2
    onFulfilled()
  }, 1000)
})

promise.then(() => {
  console.log('callback 1')
}).then(() => {
  console.log('callback 2')
})
