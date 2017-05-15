<template>
    <select :id="'autocomplete_' + id" class="form-control" :multiple="options.multiple || multiple ? true : false">
        <option value=''></option>
        <option v-for="item in dataOptions.items" :value="item.value" :selected="item.selected">{{ item.name }}</option>
    </select>
</template>
<script>
  import translationMessages from './../translations/messages'
  import generalMixin from './../mixins/General'
  import chosenMixin from '../mixins/Chosen'
  import autocompleteMixin from '../mixins/Autocomplete'
  /* eslint-disable no-undef */
  export default {
    name: 'autocomplete',
    props: {
      dataOptions: {
        default: function () {
          return {}
        }
      },
      multiple: {
        default: function () {
          return false
        }
      }
    },
    mixins: [ generalMixin, chosenMixin, autocompleteMixin ],
    updated () {
      this.updateAutocomplete()
    },
    data () {
      this.id = this._uid
      this.translations = translationMessages.translations[this.getDefaultLang()]
      return {
        options: this.getAutocompleteOptions()
      }
    },
    beforeMount () {
      this.unwatch = this.$watch('dataOptions', function (data) {
        this.options = this.getAutocompleteOptions()
        this.destroyAutocomplete()
        this.initAutocomplete()
      }, { deep: true })
    },
    mounted () {
      this.initAutocomplete()
    },
    destroyed () {
      this.destroyAutocomplete()
    }
  }
</script>
