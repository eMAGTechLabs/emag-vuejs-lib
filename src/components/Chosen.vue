<template>
    <select :id="'chosen_' + id" class="form-control" :disabled="disabled" :multiple="multiple">
        <option value=""></option>
        <option :value="item.value" v-for="item in options.items" :selected="item.selected">
            {{ item.name }}
        </option>
    </select>
</template>
<script>
  import translationMessages from './../translations/messages'
  import generalMixin from './../mixins/General'
  import chosenMixin from './../mixins/Chosen'
  export default {
    name: 'chosen',
    props: ['dataOptions', 'disabled', 'multiple'],
    mixins: [ generalMixin, chosenMixin ],
    data () {
      console.log('data')
      console.log(this.getDefaultLang())
      this.translations = translationMessages.translations[this.getDefaultLang()]
      return { options: this.getOptions() }
    },
    beforeMount () {
      this.unwatch = this.$watch('dataOptions', function (data) {
        this.options = this.getOptions()
        this.destroyChosen()
        this.initChosen()
        this.updateChosen()
      }, { deep: true })
    },
    mounted () {
      this.initChosen()
    },
    destroyed () {
      this.destroyChosen()
    }
  }
</script>
