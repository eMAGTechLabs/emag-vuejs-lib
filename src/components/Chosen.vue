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
    props: {
      dataOptions: {
        default: function () {
          return {}
        }
      },
      disabled: {
        default: function () {
          return false
        }
      },
      multiple: {
        default: function () {
          return false
        }
      }
    },
    mixins: [ generalMixin, chosenMixin ],
    data () {
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
