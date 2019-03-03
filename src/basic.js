function MyPromise (executor) {

  var that = this

  this.status = 'pending'

  this.onFulfilled = null

  this.then = function (cb) {
    this.onFulfilled = cb
  }

  function fulfill (eventualValue) {
    if (that.status === 'pending') {
      that.status = 'fullfiled'
      typeof that.onFulfilled === 'function' && that.onFulfilled(eventualValue)
    }
  }

  executor(fulfill)

}

module.exports = MyPromise
