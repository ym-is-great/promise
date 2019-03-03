function MyPromise (executor) {

  var that = this

  this.status = 'pending'

  this.onFulfilled = null

  this.then = function (cb) {
    this.onFulfilled = cb
  }

  this.fulfill = function (eventualValue) {
    if (that.status === 'pending') {
      that.status = 'fullfiled'
      typeof that.onFulfilled === 'function' && that.onFulfilled(eventualValue)
    }
  }

  executor(this.fulfill)

}

module.exports = MyPromise
