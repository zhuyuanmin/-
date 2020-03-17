const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

class Promise {
  constructor(exector) {
    this.status = PENDING
    this.value = null
    this.reason = null

    this.resolveCbs = []
    this.rejectCbs = []

    exector(this.resolve.bind(this), this.reject.bind(this))
  }

  resolve(value) {
    if (this.status !== PENDING) return
    this.status = RESOLVED
    this.resolveCbs.map(fn => fn(value))
  }
  reject(reason) {
    if (this.status !== PENDING) return
    this.status = REJECTED
    this.rejectCbs.map(fn => fn(reason))
  }

  then(onFulfilled, onRejected) {
    if (this.status === RESOLVED) {
      onFulfilled(this.value)
    }

    if (this.status === REJECTED) {
      onRejected(this.reason)
    }

    if (this.status === PENDING) {
      this.resolveCbs.push(onFulfilled)
      this.rejectCbs.push(onRejected)
    }
  }
}

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 500)
}).then(res => {
  console.log(res);
})
