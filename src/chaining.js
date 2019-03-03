function MyPromise (executor) {

  var that = this

  this.status = 'pending'

  this.onFulfilled = []

  this.then = function (cb) {
    this.onFulfilled.push(cb)
    return this
  }

  function fulfill (eventualValue) {
    if (that.status === 'pending') {
      that.status = 'fullfiled'
      for (var i = 0; i < that.onFulfilled.length; i++) {
        typeof that.onFulfilled[i] === 'function' && that.onFulfilled[i](eventualValue)
      }
    }
  }

  executor(fulfill)

}

module.exports = MyPromise
