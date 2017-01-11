const getIcon = (format) => {
  /* eslint-disable no-unused-vars */
  let icon = 'fa fa-calendar'
  if (typeof format === 'string') {
    if (hasDate(format) && hasTime(format)) {
      icon = 'fa fa-calendar'
    } else if (hasDate(format)) {
      icon = 'fa fa-calendar-o'
    } else if (hasTime(format)) {
      icon = 'fa fa-clock-o'
    }
  }
  return icon
}

const hasDate = (format) => {
  let characters = ['Y', 'S', 'd', 'M']
  return hasCharacters(format, characters)
}

const hasTime = (format) => {
  let characters = ['H', 'h', 'k', 'm', 'S', 's']
  return hasCharacters(format, characters)
}

const hasCharacters = (format, characters) => {
  let regx = new RegExp('[' + characters.join('') + ']', 'g')
  let regxResult = format.match(regx)
  if (regxResult) {
    return regxResult.length > 0
  }
  return false
}

export default {
  methods: {
    getIcon: getIcon,
    hasDate: hasDate,
    hasTime: hasTime,
    hasCharacters: hasCharacters
  }
}
