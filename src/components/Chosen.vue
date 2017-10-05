<template>
    <select :id="'chosen_' + id" class="form-control" :disabled="disabled" :multiple="options.multiple || multiple ? true : false">
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
    updated () {console.log('component updated')
      this.updateChosen()
    },
    data () {
      this.translations = translationMessages.translations[this.getDefaultLang()]
      console.log('data - this.getOptions()', this.getOptions())
      return { options: this.getOptions() }
    },
    beforeMount () {
      this.unwatch = this.$watch('dataOptions', function (data) {console.log('before mount - component updated - dataOptions')
        this.options = this.getOptions()
        this.destroyChosen()
        this.initChosen()
        this.updateChosen()
      }, { deep: true })
      this.unwatch = this.$watch('disabled', function (data) {console.log('before mount - component updated - disabled')
        this.options = this.getOptions()
        this.destroyChosen()
        this.initChosen()
        this.updateChosen()
      }, { deep: true })
      this.unwatch = this.$watch('multiple', function (data) {console.log('before mount - component updated - multiple')
        this.options = this.getOptions()
        this.destroyChosen()
        this.initChosen()
        this.updateChosen()
      }, { deep: true })
    },
    mounted () {console.log('component mounted')
      this.initChosen()
    },
    destroyed () {console.log('component destroyed')
      this.destroyChosen()
    }
  }
</script>
