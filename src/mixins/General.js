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
      propertyResult = key + ':[Function]'
    } else if (typeof properties[property] === 'object' && properties[property] !== null) {
      let objectPropertyValues = []

      for (let key in properties[property]) {
        let value = properties[property][key]

        if (key == "colModel") {
          let newValue = ''

          newValue += 'index:' + (value.index || '')
          newValue += 'name:' + (value.name || '')
          newValue += 'resizable:' + (value.resizable || '')
          newValue += 'sortable:' + (value.sortable || '')
          newValue += 'width:' + (value.width || '')

          objectPropertyValues.push(key + ':' + newValue)
        } else if (typeof value === 'function' && value !== null) {
          objectPropertyValues.push(key + ':[Function]')
        } else if (typeof value === 'object' && value !== null) {
          try {
            objectPropertyValues.push(key + ':' + JSON.stringify(value))
          } catch (error) {
            objectPropertyValues.push(key + ':[Object]')
          }
        } else {
          objectPropertyValues.push(key + ':' + value)
        }
      }

      propertyResult = objectPropertyValues.join()
    } else {
      propertyResult = properties[property]
    }
    
    resultArray.push(propertyResult)
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
