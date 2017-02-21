import Vue from 'vue'

function getLocaleItems () {
  let localItems = this.$store.state.config.locales
  let self = this
  localItems.map((item) => {
    if (self.$route.meta.urlWithoutLocale) {
      let path = '/' + item.urlPath + _replaceRouteParameters(self.$route)
      item.link = path
    }
    return item
  })
  return localItems
}

function _replaceRouteParameters (route) {
  let path = route.meta.urlWithoutLocale
  for (let index in route.params) {
    path = path.replace(':' + index, route.params[index])
  }
  return path
}

function setDefaultLocale () {
  let locales = this.$store.state.config.locales || []
  locales.forEach((item) => {
    if (this.$route.params && this.$route.params.locale && item.urlPath === this.$route.params.locale) {
      Vue.config.lang = item.key
      this.$store.commit('setLocale', item)
    }
  })
}

function setLinksForLocales () {
  this.$router.beforeEach((to, from, next) => {
    this.$set(this, 'items', this.getLocaleItems())
    next()
  })
}

export default {
  methods: {
    getLocaleItems,
    setDefaultLocale,
    setLinksForLocales
  }
}
