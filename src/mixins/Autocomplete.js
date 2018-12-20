/* eslint-disable no-undef */
function getRequestParameters () {
  let filterValues = {}
  try {
    if (typeof this.options.filters === 'string' || this.options.filters instanceof String) {
      this.options.filters = JSON.parse(this.options.filters)
    }
  } catch (ex) {}
  for (let prop in this.options.filters) {
    if ($(this.options.filters[prop]).length) {
      filterValues[prop] = $(this.options.filters[prop]).val()
    } else {
      filterValues[prop] = this.options.filters[prop]
    }
  }
  let term = ''
  try {
    term = $('#autocomplete_' + this.id + '_chosen').find('input').val()
  } catch (ex) {}
  let dataSend = {
    'filters': filterValues,
    'term': term
  }
  return dataSend
}

function initAutocomplete () {
  try {
    let $autoComplete = $('#autocomplete_' + this.id)
    let self = this

    $autoComplete.ajaxChosen(this.options, this.options.afterRequestCallback)

    $autoComplete.on('change', function() {
      let selectedValues = [];
      self.$emit('input', $(this).val())

      if($.isArray($(this).val())) {
        selectedValues = $(this).val()
      } else {
        selectedValues.push($(this).val())
      }

      self.dataOptions.selected = selectedValues;
    })

    this.unwatch = this.$watch('watchProperties', (data) => {
      this.options = this.getAutocompleteOptions()
      this.destroyAutocomplete()
      this.initAutocomplete()
    }, { deep: true })
  } catch (ex) { }
}

function getAutocompleteResultsAfterRequest (data) {
  let terms = {}
  try {
    $.each(data.results, function (i, val) {
      terms[i] = val
    })
  } catch (ex) {}
  if (data.isError) {
    let errorMessage = ''
    $.each(data.errors, function (i, val) {
      errorMessage += '<li>' + val + '</li>'
    })
    try {
      addNotification('<ul>' + errorMessage + '</ul>', 'danger')
    } catch (ex) {}
  }
  return terms
}

function getAutocompleteOptions () {
  const defaultOptions = {
    type: 'GET',
    dataType: 'json',
    keepTypingMsg: this.translations.chosenAjax.typing,
    lookingForMsg: this.translations.chosenAjax.looking,
    placeholder_text_multiple: this.translations.chosenAjax.multipleText,
    placeholder_text_single: this.translations.chosenAjax.singleText,
    no_results_text: this.translations.chosenAjax.noResult,
    id: this.id,
    filters: {},
    allow_single_deselect: true,
    dataCallback: getRequestParameters.bind(this),
    afterRequestCallback: this.getAutocompleteResultsAfterRequest
  }
  return Object.assign(defaultOptions, this.dataOptions || {})
}

function destroyAutocomplete () {
  try {
    $('#autocomplete_' + this.id).chosen('destroy')
    this.unwatch()
  } catch (ex) {}
}

function updateAutocomplete () {
  let self = this
  setTimeout(function () {
    try {
      $('#autocomplete_' + self.id).trigger('chosen:updated')
    } catch (ex) {}
  }, 0)
}

export default {
  methods: {
    initAutocomplete,
    updateAutocomplete,
    getRequestParameters,
    getAutocompleteResultsAfterRequest,
    getAutocompleteOptions,
    destroyAutocomplete
  }
}
