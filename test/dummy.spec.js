var expect = window.chai.expect

var isInInnerIframe = function () {
  return (window.location.href.indexOf('/iframe.html') >= 0)
}

beforeEach(function (cb) {
  expect(isInInnerIframe()).to.be.true()
  setTimeout(function () {
    console.log('beforeEach')
    cb()
  }, 100)
})

after(function (cb) {
  expect(isInInnerIframe()).to.be.true()
  setTimeout(function () {
    console.log('after')
    cb()
  }, 100)
})

describe('suite', function () {
  before(function (cb) {
    expect(isInInnerIframe()).to.be.true()
    setTimeout(function () {
      console.log('before')
      cb()
    }, 100)
  })

  afterEach(function (cb) {
    expect(isInInnerIframe()).to.be.true()
    setTimeout(function () {
      console.log('afterEach')
      cb()
    }, 100)
  })

  it('succeeds', function () {
    expect(true).to.be.true()
  })

  it.skip('gets skipped', function () {

  })

  it('times out', function (done) {
    this.timeout(1)
  })

  it('fails', function () {
    console.log('failing!')
    expect(true).to.be.false()
  })
})
