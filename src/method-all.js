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

  this.catch = function (onRejected) {
    this.onRejected = onRejected
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

  setTimeout(function () {
    try {
      executor(fulfill, reject)
    } catch (e) {
      if (typeof that.onRejected === 'function') that.onRejected(e)
      else throw e
    }
  })

}

MyPromise.all = function (promises) {
  return new MyPromise(function (fulfill, reject) {
    var index = 0
    function next () {
      promises[index].then(function () {
        index++
        if (index < promises.length) next()
        else fulfill()
      }).catch(function (reason) {
        reject(reason)
      })
    }
    next()
  })
}

module.exports = MyPromise
