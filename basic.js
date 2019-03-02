function MyPromise (resolver) {

  var that = this

  this.status = 'pending'

  this.callback = null

  this.then = function (cb) {
    this.callback = cb
  }

  this.onFulfilled = function (eventualValue) {
    if (that.status === 'pending') {
      that.status = 'fullfiled'
      typeof that.callback === 'function' && that.callback()
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
