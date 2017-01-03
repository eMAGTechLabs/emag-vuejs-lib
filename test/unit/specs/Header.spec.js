import Vue from 'vue'
import Header from 'src/components/Header'

describe('Header.vue', () => {
  it('should have dataOptions prop', () => {
    expect(Header.props)
      .to.contains('dataOptions')
  })
  it('should render', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Header)
    })
    expect(vm.$el.querySelectorAll('.navbar-header').length)
      .to.not.equal(0)
  })
})
