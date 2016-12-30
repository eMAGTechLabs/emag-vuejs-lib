import Vue from 'vue'
import Header from 'src/components/Header'

describe('Header.vue', () => {
  it('should render', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Header)
    })
    expect(vm.$el.querySelectorAll('.navbar-header').length)
      .to.not.equal(0)
  })
})
