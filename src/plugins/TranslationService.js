import Translations from './../translations/messages.js'
/**
 * Combines custom and default translations in one Object
 * It includes the resulted Object in the Vue translation module so when locale changes all translations change as well
 * Adds helper method getTranslations that is available as Vue.helpers.getTranslations()
 * @param  {Vue} Vue          Vue instance
 * @param  {Object} options   Accepts translations key with translations
 */
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
