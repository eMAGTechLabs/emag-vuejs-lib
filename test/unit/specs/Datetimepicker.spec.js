import Datetimepicker from 'src/components/Datetimepicker'
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

function renderDatetimepicker () {
  const Ctor = Vue.extend(Datetimepicker)
  let vm = new Ctor({
    el: document.createElement('div'),
    store
  }).$mount()
  return vm
}

describe('Datetimepicker.vue', () => {
  it('should have dataOptions prop', () => {
    expect(Datetimepicker.props)
      .to.contains('dataOptions')
  })
  it('should have tag name datetimepicker', () => {
    expect(Datetimepicker.name)
      .to.equal('datetimepicker')
  })
  it('should have data method', () => {
    expect(typeof Datetimepicker.data).to.equal('function')
  })
  it('should return "fa fa-calendar" css class on getIcon method being called', () => {
    let vm = renderDatetimepicker()
    expect(vm.getIcon('MMMM Do YYYY, h:mm:ss a')).to.equal('fa fa-calendar')
  })
  it('should return false on hasDate method being called with format "h:mm:ss a"', () => {
    let vm = renderDatetimepicker()
    expect(vm.hasDate('h:mm:ss a')).to.equal(false)
  })
  it('should return false on hasCharacters method being called with format "MMMM Do YYYY" and characters "abc"', () => {
    let vm = renderDatetimepicker()
    expect(vm.hasCharacters('MMMM Do YYYY', ['a', 'b', 'c'])).to.equal(false)
  })
  it('should return and object with format key on getOptios method being called', () => {
    let vm = renderDatetimepicker()
    expect(vm.getOptions()).to.have.property('format')
  })
})
