function MyPromise (executor) {

  var that = this

  this.status = 'pending'

  this.onFulfilled = null

  this.onRejected = null

  this.then = function (cb) {
    this.onFulfilled = cb
    return this
  }

  this.catch = function (cb) {
    this.onRejected = cb
  }

  this.fulfill = function (eventualValue) {
    if (that.status === 'pending') {
      that.status = 'fullfiled'
      typeof that.onFulfilled === 'function' && that.onFulfilled(eventualValue)
    }
  }

  this.reject = function (reason) {
    if (that.status === 'pending') {
      that.status = 'rejected'
      typeof that.onRejected === 'function' && that.onRejected(reason)
    }
  }

  executor(this.fulfill, this.reject)

}

module.exports = MyPromise
