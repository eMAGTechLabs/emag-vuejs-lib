import Vue from 'vue'
import Sidebar from 'src/components/Sidebar.vue'

describe('Sidebar.vue', () => {
  it('should have dataOptions prop', () => {
    expect(Sidebar.props)
      .to.contains('dataOptions')
  })
  it('should render', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Sidebar)
    })
    expect(vm.$el.querySelectorAll('.viewport').length)
              .to.not.equal(0)
  })
})
