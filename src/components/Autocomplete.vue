<template>
    <select :id="'autocomplete_' + id" class="form-control" :multiple="this.options.multiple ? this.options.multiple : false">
        <option value=''></option>
        <option v-for="item in dataOptions.items" :value="item.value" selected>
            {{ item.name }}
        </option>
    </select>
</template>
<script>
  import TranslationMessages from './../translations/messages'
  /* eslint-disable no-undef */
  export default {
    name: 'autocomplete',
    props: ['dataOptions'],
    updated () {
      $('#autocomplete_' + this.id).trigger('chosen:updated')
    },
    data () {
      this.id = this._uid
      this.translations = TranslationMessages.translations[getDefaultLang(this)]

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
        dataCallback: function () {
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
      }
      return {
        options: Object.assign(defaultOptions, this.dataOptions || {})
      }
    },
    mounted () {
      $('#autocomplete_' + this.id).ajaxChosen(this.options, (data) => {
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
      })
    }
  }

  // Helpers
  const getDefaultLang = (self) => {
    if (self.$store.state && self.$store.state.lang) {
      return self.$store.state.lang
    }
    return Object.keys(TranslationMessages.translations)[0]
  }
</script>