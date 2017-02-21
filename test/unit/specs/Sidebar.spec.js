import Vue from 'vue'
import Sidebar from 'src/components/Sidebar.vue'
import Vuex from 'vuex'
import config from 'src/store/config'
import mutations from 'src/store/mutations'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    config: config
  },
  mutations: mutations
})

function renderSidebar () {
  const Ctor = Vue.extend(Sidebar)
  const vm = new Ctor({
    el: document.createElement('div'),
    store
  }).$mount()
  return vm
}

describe('Sidebar.vue', () => {
  it('should have dataOptions prop', () => {
    expect(Sidebar.props)
      .to.contains('dataOptions')
  })
  it('should have tag name sidebar', () => {
    expect(Sidebar.name)
      .to.equal('sidebar')
  })
  it('should have data method', () => {
    expect(typeof Sidebar.data).to.not.equal('function')
  })
  it('should render', () => {
    let vm = renderSidebar()
    expect(vm.$el.querySelectorAll('.viewport').length)
              .to.not.equal(0)
  })
  it('should return "javascript:void(0)" on getHrefForMenuItem being called with empty item', () => {
    let vm = renderSidebar()
    expect(vm.getHrefForMenuItem({})).to.equal('javascript:void(0)')
  })
  it('should return false on isAbsolute method being called with empty item', () => {
    let vm = renderSidebar()
    expect(vm.isAbsolute({})).to.equal(false)
  })
  it('should return true on hasEmptyLink method being called with empty item', () => {
    let vm = renderSidebar()
    expect(vm.hasEmptyLink({})).to.equal(true)
  })
  it('should return "menu-item" css class on getMenuItemCssClass method being called with empty item', () => {
    let vm = renderSidebar()
    expect(vm.getMenuItemCssClass({})).to.equal('menu-item')
  })
  it('should return empty string css class on getCollapsedCssClass method being called with empty item', () => {
    let vm = renderSidebar()
    expect(vm.getCollapsedCssClass()).to.equal('')
  })
  it('should return empty array on getItems method being called with empty item', () => {
    let vm = renderSidebar()
    expect(Object.prototype.toString.call(vm.getItems())).to.equal('[object Array]')
  })
})
