/* eslint-disable no-undef */
function getIcon (format) {
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

function hasDate (format) {
  let characters = ['Y', 'S', 'd', 'M']
  return hasCharacters(format, characters)
}

function hasTime (format) {
  let characters = ['H', 'h', 'k', 'm', 'S', 's']
  return hasCharacters(format, characters)
}

function hasCharacters (format, characters) {
  let regx = new RegExp('[' + characters.join('') + ']', 'g')
  let regxResult = format.match(regx)
  if (regxResult) {
    return regxResult.length > 0
  }
  return false
}

function getOptions () {
  this.id = this._uid
  let format = 'YYYY-MM-DD HH:mm:ss'
  const options = {
    format: format,
    icons: {
      date: this.getIcon((this.dataOptions && this.dataOptions.format) ? this.dataOptions.format : format)
    }
  }
  return Object.assign({}, options, this.dataOptions)
}

function initDatetimepicker () {
  try {
    let self = this

    $('#date_range_' + this.id).daterangepicker(this.options)
    $('#date_range_' + this.id).next().on('click', function () {
      alert(1);
      $('#date_range_' + self.id).data('DateTimePicker').show()
    })

    $('#date_range_' + this.id).on('input change dp.hide dp.show dp.change dp.error dp.update', function (event) {
      let eventType = event.type
      if (eventType === 'dp' && event.namespace) {
        eventType += event.namespace
      }

      self.$emit(eventType, event)
    })
  } catch (ex) {}
}

function destroyDatetimepicker () {
  try {
    $(this.$el).find('#date_range_' + this.id).val('')
    $(this.$el).find('#date_range_' + this.id).data('DateTimePicker').destroy()
    this.unwatch()
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
