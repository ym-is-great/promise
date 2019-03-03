const MyPromise = require('../src/exception')

const foo = 0

const promise = new MyPromise((fulfill, reject) => {
  foo = 1
})

promise.catch(err => { console.log(err) })
