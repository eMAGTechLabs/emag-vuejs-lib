/* eslint-disable no-undef */
function getRequestParameters () {
  let filterValues = {}
  try {
    if (typeof this.filters === 'string' || this.filters instanceof String) {
      this.filters = JSON.parse(this.filters)
    }
  } catch (ex) {}
  for (let prop in this.filters) {
    if ($(this.filters[prop]).length) {
      filterValues[prop] = $(this.filters[prop]).val()
    } else {
      filterValues[prop] = this.filters[prop]
    }
  }
  let term = $('#autocomplete_' + this.id + '_chosen').find('input').val()
  let dataSend = {
    'filters': filterValues,
    'term': term
  }
  return dataSend
}

function getAutocompleteResultsAfterRequest (data) {
  let terms = {}
  $.each(data.results, function (i, val) {
    terms[i] = val
  })
  if (data.isError) {
    let errorMessage = ''
    $.each(data.errors, function (i, val) {
      errorMessage += '<li>' + val + '</li>'
    })
    addNotification('<ul>' + errorMessage + '</ul>', 'danger')
  }
  return terms
}

function getDefaultOptions () {
  return {
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
    dataCallback: getRequestParameters.bind(this)
  }
}

export default {
  methods: {
    getRequestParameters,
    getAutocompleteResultsAfterRequest,
    getDefaultOptions
  }
}
