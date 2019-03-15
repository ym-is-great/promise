function MyPromise (executor) {

  var that = this

  this.status = 'pending'

  this.onFulfilled = null

  this.onRejected = null

  this.then = function (onFulfilled, onRejected) {
    this.onFulfilled = onFulfilled
    this.onRejected = onRejected
  }

  function fulfill (eventualValue) {
    if (that.status === 'pending') {
      that.status = 'fullfiled'
      typeof that.onFulfilled === 'function' && that.onFulfilled(eventualValue)
    }
  }

  function reject (reason) {
    if (that.status === 'pending') {
      that.status = 'rejected'
      typeof that.onRejected === 'function' && that.onRejected(reason)
    }
  }

  executor(fulfill, reject)

}

module.exports = MyPromise
