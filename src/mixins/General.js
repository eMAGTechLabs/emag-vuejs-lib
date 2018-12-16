function getDefaultLang () {
  if (this.$store.state.config && this.$store.state.config.locale) {
    return this.$store.state.config.locale.key
  }
  return 'en_GB'
}

function generateWatchProperties (properties) {
  let resultArray = []

  for (let property in properties) {
    resultArray.push(
      JSON.stringify(properties[property], function(key, value) {
        if (typeof value === 'object' && value !== null) {
          try {
            return JSON.parse(JSON.stringify(value));
          } catch (error) {
            return '[Object]';
          }
        }

        return value
      })
    )
  }

  return resultArray.join()
}

function changeRoute (newRoute) {
  this.$router.push({name: newRoute})
}

function isFunction (testFunction) {
  return typeof testFunction === 'function'
}

export default {
  methods: {
    getDefaultLang,
    generateWatchProperties,
    changeRoute,
    isFunction
  }
}
