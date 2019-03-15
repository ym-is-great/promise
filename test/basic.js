const MyPromise = require('../src/basic')

const promise = new MyPromise((fulfill, reject) => {
  console.log('Do something...')
  setTimeout(() => {
    fulfill(200)
  }, 1000)
})

promise.then(value => {
  console.log('Eventual Value: ', value)
}, reason => {
	console.log(reason)
})
