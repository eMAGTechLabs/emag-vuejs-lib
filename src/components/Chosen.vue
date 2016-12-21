<template>
    <select :id="'chosen_' + id" class="form-control">
        <option value=''></option>
        <option :value="item.value" v-for="item in options.items">
            {{ item.name }}
        </option>
    </select>
</template>
<script>
  import TranslationMessages from './../translations/messages'

  export default {
    name: 'chosen',
    props: ['dataOptions'],
    data () {
      const defaultOptions = {
        placeholder_text_multiple: this.translations.chosen.multipleText,
        placeholder_text_single: this.translations.chosen.singleText,
        no_results_text: this.translations.chosen.noResult,
        allow_single_deselect: true
      }
      return {
        options: Object.assign(defaultOptions, this.dataOptions || {})
      }
    },
    beforeCreate () {
      this.id = this._uid
      this.translations = TranslationMessages.translations[getDefaultLang(this)]
    },
    mounted () {
      /* eslint-disable no-undef */
      $('#chosen_' + this.id).chosen(this.options)
    }
  }

  // Helpers
  const getDefaultLang = (self) => {
    if (self.$store.state && self.$store.state.lang) {
      return self.$store.state.lang
    }
    return 'en'
  }
</script>
