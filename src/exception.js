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

  setTimeout(function () {
    try {
      executor(fulfill, reject)
    } catch (e) {
      if (typeof that.onRejected === 'function') that.onRejected(e)
      else throw e
    }
  })

}

module.exports = MyPromise
