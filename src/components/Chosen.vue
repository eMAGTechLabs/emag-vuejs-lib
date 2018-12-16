<template>
    <select class="form-control" :id="'chosen_' + id" :multiple="options.multiple || multiple ? true : false" :disabled="options.disabled || disabled ? true : false">
        <option value=""></option>
        <option v-for="item in dataOptions.items" :value="item.value" :selected="item.selected" :disabled="item.disabled" :class="item.class">{{ item.name }}</option>
    </select>
</template>
<script>
  import translationMessages from './../translations/messages'
  import generalMixin from './../mixins/General'
  import chosenMixin from './../mixins/Chosen'
  
  export default {
    name: 'chosen',
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
    mixins: [ generalMixin, chosenMixin ],
    updated () {
      this.updateChosen()
    },
    data () {
      this.translations = translationMessages.translations[this.getDefaultLang()]

      return { options: this.getOptions() }
    },
    methods: {
      setValue(value) {
        $('#chosen_' + this.id).val(value).trigger('change').trigger('chosen:updated');
      },
      getValue() {
        return $('#chosen_' + this.id).val();
      }
    },
    computed: {
      watchProperties() {
        return this.generateWatchProperties( [this.dataOptions, this.multiple, this.disabled ] )
      }
    },
    beforeMount () {
      this.unwatch = this.$watch('watchProperties', (data) => {
        this.options = this.getOptions()
        this.destroyChosen()
        this.initChosen()
        this.updateChosen()
      }, { deep: true, immediate: true })
    },
    mounted () {
      this.initChosen()
    },
    destroyed () {
      this.destroyChosen()
    }
  }
</script>
