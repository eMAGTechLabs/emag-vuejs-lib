import Autocomplete from 'src/components/Autocomplete.vue'
import autocompleteMixin from 'src/mixins/Autocomplete'
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

function renderAutocomplete () {
  const Ctor = Vue.extend(Autocomplete)
  let vm = new Ctor({
    el: document.createElement('div'),
    store
  }).$mount()
  return vm
}

describe('Autocomplete.vue', () => {
  it('should have dataOptions prop', () => {
    expect(Autocomplete.props)
      .to.have.property('dataOptions')
  })
  it('should have data method', () => {
    expect(typeof Autocomplete.data).to.equal('function')
  })
  it('should have tag name entity-ajax', () => {
    expect(Autocomplete.name)
      .to.equal('autocomplete')
  })
  it('should have mixins "methods" object key', () => {
    expect(autocompleteMixin)
      .to.have.property('methods')
      .that.is.an('object')
  })
  it('should have getRequestParameters, getAutocompleteResultsAfterRequest, getAutocompleteOptions object keys on mixin', () => {
    expect(autocompleteMixin.methods)
      .to.have.property('getRequestParameters')
    expect(autocompleteMixin.methods)
      .to.have.property('getAutocompleteResultsAfterRequest')
    expect(autocompleteMixin.methods)
      .to.have.property('getAutocompleteOptions')
  })
  it('should return default options on getAutocompleteOptions method being called', () => {
    let vm = renderAutocomplete()
    expect(Object.prototype.toString.call(vm.getAutocompleteOptions())).to.equal('[object Object]')
  })
  it('should return an object with request parameters on getRequestParameters method being called', () => {
    let vm = renderAutocomplete()
    expect(Object.prototype.toString.call(vm.getRequestParameters())).to.equal('[object Object]')
  })
  it('should return an object on getAutocompleteResultsAfterRequest method being called', () => {
    let vm = renderAutocomplete()
    expect(Object.prototype.toString.call(vm.getAutocompleteResultsAfterRequest({}))).to.equal('[object Object]')
  })
  it('should set options key "filters" dinamically when dataOptions change', (done) => {
    let vm = renderAutocomplete()
    let defaultFilters = vm.options.filters
    vm.$set(vm.options, 'filters', { john: 'snow' })
    Vue.nextTick(() => {
      expect(defaultFilters).to.not.equal(vm.options.filters)
      done()
    })
  })
})
