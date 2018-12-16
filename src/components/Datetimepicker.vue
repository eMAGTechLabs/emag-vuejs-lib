<template>
    <div class="input-group">
        <input type="text" :id="'date_time_' + id" class="form-control" autocomplete="off" :disabled="disabled" :name="name" :required="required">
        <div class="input-group-addon cursor-pointer"><i :class="options.icons.date"></i></div>
    </div>
</template>
<script>
import generalMixin from './../mixins/General'
import datetimeMixin from './../mixins/Datetimepicker'

/* eslint-disable no-undef */
export default {
  name: 'datetimepicker',
  props: ['dataOptions', 'disabled', 'name', 'required'],
  mixins: [ generalMixin, datetimeMixin ],
  data () {
    return { options: this.getOptions() }
  },
  computed: {
      watchProperties() {
        return this.generateWatchProperties( [ this.dataOptions, this.disabled, this.name, this.required ] )
      }
    },
  beforeMount () {
    this.unwatch = this.$watch('watchProperties', function (data) {
      this.options = this.getOptions()
      this.destroyDatetimepicker()
      this.initDatetimepicker()
    }, { deep: true })
  },
  mounted () {
    this.initDatetimepicker()
  },
  destroyed: function () {
    this.destroyDatetimepicker()
  },
  methods: {}
}
</script>
