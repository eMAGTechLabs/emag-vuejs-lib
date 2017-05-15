import Vue from 'vue'
import TreeType from 'src/components/TreeType'
import treeTypeMixins from 'src/mixins/TreeType'
import config from 'src/store/config'
import mutations from 'src/store/mutations'
import Vuex from 'vuex'
import translations from 'src/translations/messages'
import VueI18n from 'vue-i18n'

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

function renderTreeType () {
  const Ctor = Vue.extend(TreeType)
  const vm = new Ctor({
    el: document.createElement('div'),
    store
  }).$mount()
  return vm
}

describe('TreeType.vue', () => {
  it('should have dataOptions prop', () => {
    expect(TreeType.props)
      .to.contains('dataOptions')
  })

  it('should have mixins "methods" object key', () => {
    expect(treeTypeMixins)
      .to.have.property('methods')
      .that.is.an('object')
  })

  it('should have data method', () => {
    expect(typeof TreeType.data).to.equal('function')
  })

  it('should have getTranslations, getOptions, initTreeType object keys on mixin', () => {
    expect(treeTypeMixins.methods)
      .to.have.property('getTranslations')
    expect(treeTypeMixins.methods)
      .to.have.property('getOptions')
    expect(treeTypeMixins.methods)
      .to.have.property('initTreeType')
  })

  it('should return an translation object on getTranslations method being called', () => {
    let vm = renderTreeType()
    expect(Object.prototype.toString.call(vm.getTranslations())).to.equal('[object Object]')
  })

  it('should return an object on getOptions method being called', () => {
    let vm = renderTreeType()
    expect(Object.prototype.toString.call(vm.getOptions())).to.equal('[object Object]')
  })
})
