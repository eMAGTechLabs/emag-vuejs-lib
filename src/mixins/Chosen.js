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

  return Object.assign(defaultOptions, this.dataOptions || {})
}

function initChosen () {
  try {
    let $chosen = $('#chosen_' + this.id)
    let self = this

    $chosen.chosen(this.options)

    $chosen.on('change', function() {
      let selectedValues = [];
      self.$emit('input', $(this).val())

      if($.isArray($(this).val())) {
        selectedValues = $(this).val()
      } else {
        selectedValues.push($(this).val())
      }

      self.dataOptions.selected = selectedValues;
      self.dataOptions.items = []
      $(this).find('option').each( function(index, option) {
        let $option = $(option);
        let value = $option.attr('value')
        if (value) {
          let selected = $.inArray(value, selectedValues) === -1 ? false : true;
          self.dataOptions.items.push({
            name: $option.html(),
            value: value,
            disabled: ($option.attr('disabled') === 'disabled'),
            class: $option.attr('class'),
            selected: selected
          })
        }
      })
    })
  } catch (ex) { }
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
