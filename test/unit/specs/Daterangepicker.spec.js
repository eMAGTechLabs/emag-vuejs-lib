import Daterangepicker from 'src/components/Daterangepicker'
import config from 'src/store/config'
import mutations from 'src/store/mutations'
import Vuex from 'vuex'
import translations from 'src/translations/messages'
import VueI18n from 'vue-i18n'
import Vue from 'vue'

Vue.use(Vuex)
Vue.use(VueI18n)
const store = new Vuex.Store({
  state: {
    translations: translations,
    config: config
  },
  mutations: mutations
})
Vue.config.missingHandler = function (lang, key, vm) {}

function renderDaterangepicker () {
  const Ctor = Vue.extend(Daterangepicker)
  let vm = new Ctor({
    el: document.createElement('div'),
    store
  }).$mount()
  return vm
}

describe('Daterangepicker.vue', () => {
  it('should have dataOptions prop', () => {
    expect(Daterangepicker.props)
      .to.contains('dataOptions')
  })
  it('should have console log', () => {
    let vm = renderDaterangepicker()
    expect(typeof vm.initDaterangepicker).to.equal('function')
  })
  it('should have destroy method called destroyDaterangepicker', () => {
    let vm = renderDaterangepicker()
    expect(typeof vm.destroyDaterangepicker).to.equal('function')
  })
  it('should have tag name daterangepicker', () => {
    expect(Daterangepicker.name)
      .to.equal('daterangepicker')
  })
  it('should have data method', () => {
    expect(typeof Daterangepicker.data).to.equal('function')
  })
})
