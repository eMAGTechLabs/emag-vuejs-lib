<template>
    <select class="form-control" :id="'autocomplete_' + id" :multiple="options.multiple || multiple ? true : false" :disabled="options.disabled || disabled ? true : false">
        <option value=""></option>
        <option v-for="item in dataOptions.items" :value="item.value" :selected="item.selected" :disabled="item.disabled" :class="item.class">{{ item.name }}</option>
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
        type: Object,
        default: () => { return {} }
      },
      multiple: {
        type: Boolean,
        default: () => { return false }
      },
      disabled: {
        type: Boolean,
        default: () => { return false }
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
    methods: {
      setValue(value) {
        $('#autocomplete_' + this.id).val(value).trigger('change').trigger('chosen:updated');
      },
      getValue() {
        return $('#autocomplete_' + this.id).val();
      }
    },
    computed: {
      watchProperties() {
        return [JSON.stringify(this.dataOptions), this.multiple, this.disabled].join()
      }
    },
    beforeMount () {
      this.unwatch = this.$watch('watchProperties', (data) => {
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
