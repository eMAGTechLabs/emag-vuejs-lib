import Translations from './../translations/messages.js'
import VueI18n from 'vue-i18n'
import Vue from 'vue'

Vue.use(VueI18n)

export default function (Vue, options) {
  let translations = options.translations
  let tempTranslations = _getTranslations()

  Vue.config.fallbackLang = 'en_GB'
  Object.keys(tempTranslations).forEach(function (key) {
    Vue.locale(key, tempTranslations[key])
  })

  if (!Vue.helpers) {
    Vue.helpers = {}
  }
  Vue.helpers.getTranslations = _getTranslations

  // Helpers
  function _getTranslations () {
    let mergedTranslations = {}
    Object.keys(Translations.translations).forEach(function (key) {
      mergedTranslations[key] = Object.assign({}, Translations.translations[key], translations[key])
    })
    return mergedTranslations
  }
}
