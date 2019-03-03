const MyPromise = require('../src/rejectable')

const promise = new MyPromise((fulfill, reject) => {
  console.log('Do something...')
  setTimeout(() => {
    reject('Wrong password!')
  }, 1000)
})

promise.then(val => {
  console.log('Eventual Value: ', val)
}).catch(reason => {
  console.log('Reason: ', reason)
})
