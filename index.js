function MyPromise (resolver) {

  var that = this

  this.status = 'pending'

  this.callbacks = []

  this.handleException = null

  this.then = function (cb) {
    this.callbacks.push(cb)
    return this
  }

  this.catch = function (handler) {
    this.handleException = handler
  }

  this.onFulfilled = function (eventualValue) {
    if (that.status === 'pending') {
      that.status = 'fullfiled'
      for (var i = 0; i < that.callbacks.length; i++) {
        try {
          that.callbacks[i]()
        } catch (e) {
          console.log('catch')
          typeof handleException === 'function' && that.handleException(e)
        }
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
