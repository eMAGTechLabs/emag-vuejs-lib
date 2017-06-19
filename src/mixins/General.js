function getDefaultLang () {
  if (this.$store.state.config && this.$store.state.config.locale) {
    return this.$store.state.config.locale.key
  }
  return 'en_GB'
}

function changeRoute (newRoute) {
  this.$router.push({name: newRoute})
}

export default {
  methods: {
    getDefaultLang,
    changeRoute
  }
}
