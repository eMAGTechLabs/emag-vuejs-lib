/* eslint-disable no-undef */
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

const getOptions = (self) => {
  self.id = self._uid
  let format = 'YYYY-MM-DD HH:mm:ss'
  const options = {
    format: format,
    icons: {
      date: self.getIcon(self.dataOptions.format || format)
    }
  }
  return Object.assign({}, options, self.dataOptions)
}

const initDatetimepicker = (self) => {
  $('#date_time_' + self.id).datetimepicker(self.options)
}

const destroyDatetimepicker = (self) => {
  try {
    $(self.$el).find('#date_time_' + self.id).data('DateTimePicker').destroy()
  } catch (ex) {}
}

export default {
  methods: {
    getIcon: getIcon,
    hasDate: hasDate,
    hasTime: hasTime,
    hasCharacters: hasCharacters,
    getOptions: getOptions,
    initDatetimepicker: initDatetimepicker,
    destroyDatetimepicker: destroyDatetimepicker
  }
}
