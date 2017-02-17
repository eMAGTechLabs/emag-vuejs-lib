<template>
    <select :id="'autocomplete_' + id" class="form-control" :multiple="options.multiple || multiple ? true : false">
        <option value=''></option>
        <option v-for="item in dataOptions.items" :value="item.value" :selected="item.selected">
            {{ item.name }}
        </option>
    </select>
</template>
<script>
  import TranslationMessages from './../translations/messages'
  import chosenMixin from '../mixins/Chosen'
  import autocompleteMixin from '../mixins/Autocomplete'
  /* eslint-disable no-undef */
  export default {
    name: 'autocomplete',
    props: ['dataOptions', 'multiple'],
    mixins: [ chosenMixin, autocompleteMixin ],
    updated () {
      $('#autocomplete_' + this.id).trigger('chosen:updated')
    },
    data () {
      this.id = this._uid
      this.translations = TranslationMessages.translations[this.getDefaultLang()]
      const defaultOptions = this.getDefaultOptions()
      return {
        options: Object.assign(defaultOptions, this.dataOptions || {})
      }
    },
    mounted () {
      $('#autocomplete_' + this.id).ajaxChosen(this.options, this.getAutocompleteResultsAfterRequest)
    }
  }
</script>
