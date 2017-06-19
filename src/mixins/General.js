function getDefaultLang () {
  if (this.$store.state.config && this.$store.state.config.locale) {
    return this.$store.state.config.locale.key
  }
  return 'en_GB'
}

function changeRoute (newRoute) {
  let router = Vue.helpers.getVueRouter()
  router.push({name: newRoute})
}

export default {
  methods: {
    getDefaultLang: getDefaultLang,
    changeRoute: changeRoute
  }
}
