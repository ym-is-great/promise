function MyPromise (executor) {

  var that = this

  this.status = 'pending'

  this.onFulfilled = []

  this.onRejected = null

  this.then = function (cb) {
    this.onFulfilled.push(cb)
    return this
  }

  this.catch = function (cb) {
    this.onRejected = cb
  }

  function fulfill (eventualValue) {
    if (that.status === 'pending') {
      that.status = 'fullfiled'
      for (var i = 0; i < that.onFulfilled.length; i++) {
        typeof that.onFulfilled[i] === 'function' && that.onFulfilled[i](eventualValue)
      }
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
