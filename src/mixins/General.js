function getDefaultLang () {
  if (this.$store.state.config && this.$store.state.config.locale) {
    return this.$store.state.config.locale.key
  }
  return 'en_GB'
}

function generateWatchProperties (properties) {
  let resultArray = []

  for (let property in properties) {
    let propertyResult = ''

    if (typeof properties[property] === 'function' && properties[property] !== null) {
      debugger
      propertyResult = key + ':[Function]'
    } else if (typeof properties[property] === 'object' && properties[property] !== null) {
      debugger
      let objectPropertyValues = []

      debugger
      for (let key in properties[property]) {
        let value = properties[property][key]
        debugger

        if (typeof value === 'function' && value !== null) {
          debugger
          objectPropertyValues.push(key + ':[Function]')
        } else if (typeof value === 'object' && value !== null) {
          debugger
          try {
            objectPropertyValues.push(key + ':' + JSON.stringify(value))
            debugger
          } catch (error) {
            objectPropertyValues.push(key + ':[Object]')
            debugger
          }
          debugger
        } else {
          objectPropertyValues.push(key + ':' + value)
          debugger
        }
      }

      propertyResult = objectPropertyValues.join()
      debugger
    } else {
      debugger
      propertyResult = properties[property]
    }
    
    resultArray.push(propertyResult)
  }
  debugger

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
