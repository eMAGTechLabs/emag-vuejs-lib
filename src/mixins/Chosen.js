/* eslint-disable no-undef */
function getOptions () {
  this.id = this._uid
  const defaultOptions = {
    placeholder_text_multiple: this.translations.chosen.multipleText,
    placeholder_text_single: this.translations.chosen.singleText,
    no_results_text: this.translations.chosen.noResult,
    allow_single_deselect: true,
    items: []
  }
  console.log('getoptions - defaultOptions', defaultOptions)
  console.log('getoptions - this.dataOptions', this.dataOptions)
  let resulted = Object.assign(defaultOptions, this.dataOptions || {})
  if (this.dataOptions.items) {
    resulted.items = this.dataOptions.items
  }
  console.log('getOptions - resulted', resulted)
  return resulted
}

function initChosen () {
  $('#chosen_' + this.id).chosen(this.options)
}

function updateChosen () {
  let self = this
  setTimeout(function () {
    $('#chosen_' + self.id).trigger('chosen:updated')
  }, 0)
}

function destroyChosen () {
  try {
    $('#chosen_' + this.id).chosen('destroy')
    this.unwatch()
  } catch (ex) {}
}

export default {
  methods: {
    getOptions: getOptions,
    initChosen: initChosen,
    destroyChosen: destroyChosen,
    updateChosen: updateChosen
  }
}
