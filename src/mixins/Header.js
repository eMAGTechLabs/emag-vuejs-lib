import Vue from 'vue'

function getLocaleItems () {
  let localItems = this.$store.state.config.locales
  let self = this
  localItems.map((item) => {
    if (self.$route.meta.urlWithoutLocale) {
      let path = '/' + item.urlPath + self.$route.meta.urlWithoutLocale
      item.link = path
    }
    return item
  })
  return localItems
}

function setDefaultLocale () {
  let locales = this.$store.state.config.locales || []
  locales.forEach((item) => {
    if (this.$route.params && this.$route.params.locale && item.urlPath === this.$route.params.locale) {
      this.$store.commit('setLocale', item)
      Vue.config.lang = item.key
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
