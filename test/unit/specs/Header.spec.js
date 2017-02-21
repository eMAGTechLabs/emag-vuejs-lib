import Vue from 'vue'
import Header from 'src/components/Header'
import HeaderLocaleChild from 'src/components/HeaderLocaleChild.vue'
import Vuex from 'vuex'
import translations from 'src/translations/messages'
import config from 'src/store/config'
import VueI18n from 'vue-i18n'
import mutations from 'src/store/mutations'
import VueRouter from 'vue-router'
import RoutingService from 'src/plugins/RoutingService'

Vue.use(Vuex)
Vue.use(VueI18n)
Vue.use(VueRouter)

Vue.use(RoutingService, {
  config: config,
  routes: {
    items: [],
    menuItems: []
  },
  router: VueRouter
})

const store = new Vuex.Store({
  state: {
    translations: translations,
    config: config
  },
  mutations: mutations
})

Vue.config.missingHandler = function (lang, key, vm) {}

function renderHeader (item) {
  const Ctor = Vue.extend(item)
  const vm = new Ctor({
    el: document.createElement('div'),
    store,
    router: Vue.helpers.getVueRouter()
  }).$mount()
  return vm
}

describe('Header.vue', () => {
  it('should have dataOptions prop', () => {
    expect(Header.props)
      .to.contains('dataOptions')
  })
  it('should have tag name header', () => {
    expect(Header.name)
      .to.equal('header')
  })
  it('should have data method', () => {
    expect(typeof Header.data).to.equal('function')
  })
  it('should render', () => {
    let vm = renderHeader(Header)
    expect(vm.$el.querySelectorAll('.navbar-header').length)
      .to.not.equal(0)
  })
})

describe('HeaderLocaleChild.vue', () => {
  it('should have data method', () => {
    expect(typeof HeaderLocaleChild.data).to.equal('function')
  })
  it('should have beforeMount method', () => {
    expect(typeof HeaderLocaleChild.beforeMount).to.equal('function')
  })
  it('should return an array with locale items on getItems method being called', () => {
    let vm = renderHeader(HeaderLocaleChild)
    expect(Object.prototype.toString.call(vm.getLocaleItems())).to.equal('[object Array]')
  })
  it('should set locale on setDefaultLocale method being called', () => {
    let vm = renderHeader(HeaderLocaleChild)
    vm.$route.params.locale = 'pl'
    let initialLocaleKey = vm.$store.state.config.locale.key
    vm.setDefaultLocale()
    let finalLocaleKey = vm.$store.state.config.locale.key
    expect(initialLocaleKey).to.not.equal(finalLocaleKey)
  })
  it('should have more +1 beforeEach callbacks on setLinksForLocales method being called ', () => {
    let vm = renderHeader(HeaderLocaleChild)
    let initialNrOfBeforeHooks = vm.$router.beforeHooks.length
    vm.setLinksForLocales()
    let finalNrOfBeforeHooks = vm.$router.beforeHooks.length
    expect(initialNrOfBeforeHooks).to.be.below(finalNrOfBeforeHooks)
  })
})
