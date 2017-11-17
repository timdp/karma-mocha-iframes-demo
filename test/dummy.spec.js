var expect = window.chai.expect

var isInInnerIframe = function () {
  return (window.location.href.indexOf('/iframe.html') >= 0)
}

beforeEach(function () {
  expect(isInInnerIframe()).to.be.true()
})

after(function () {
  expect(isInInnerIframe()).to.be.true()
})

describe('suite', function () {
  before(function () {
    expect(isInInnerIframe()).to.be.true()
  })

  afterEach(function () {
    expect(isInInnerIframe()).to.be.true()
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
