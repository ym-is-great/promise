const MyPromise = require('../src/method-all')

const promise1 = new MyPromise((fulfill, reject) => {
  setTimeout(() => {
    fulfill(200)
  }, 1000)
})

const promise2 = new MyPromise((fulfill, reject) => {
  setTimeout(() => {
    fulfill(200)
  }, 1500)
})

MyPromise.all([
  promise1,
  promise2
]).then(() => {
  console.log('All fulfilled')
}).catch(reason => {
  console.log(reason)
})
