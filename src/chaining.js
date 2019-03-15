function MyPromise (executor) {

  var that = this

  this.status = 'pending'

  this.onFulfilled = []

  this.onRejected = null

  this.then = function (onFulfilled, onRejected) {
    this.onFulfilled.push(onFulfilled)
    this.onRejected = onRejected
    return this
  }

  function fulfill (eventualValue) {
    if (that.status === 'pending') {
      that.status = 'fulfiled'
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

  executor(fulfill)

}

module.exports = MyPromise
