function MyPromise (resolver) {

  var that = this

  this.status = 'pending'

  this.callbacks = []

  this.then = function (cb) {
    this.callbacks.push(cb)
    return this
  }

  this.onFulfilled = function (eventualValue) {
    if (that.status === 'pending') {
      that.status = 'fullfiled'
      for (var i = 0; i < that.callbacks.length; i++) {
        typeof that.callbacks[i] === 'function' && that.callbacks[i]()
      }
    }
  }

  this.onRejected = function (reason) {
    if (that.status === 'pending') {
      that.status = 'rejected'
    }
  }

  resolver(this.onFulfilled, this.onRejected)

}

module.exports = MyPromise
