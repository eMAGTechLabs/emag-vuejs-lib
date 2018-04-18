<template>
    <div class="input-group">
        <input type="text" :id="'date_time_' + id" class="form-control" autocomplete="off" :disabled="disabled" :name="name" :required="required">
        <div class="input-group-addon cursor-pointer"><i :class="options.icons.date"></i></div>
    </div>
</template>
<script>
import datetimeMixin from './../mixins/Datetimepicker'
/* eslint-disable no-undef */
export default {
  name: 'datetimepicker',
  props: ['dataOptions', 'disabled', 'name', 'required'],
  mixins: [ datetimeMixin ],
  data () {
    return { options: this.getOptions() }
  },
  mounted () {
    this.initDatetimepicker()
    this.unwatch = this.$watch('dataOptions', function (data) {
      this.options = this.getOptions()
      this.destroyDatetimepicker()
      this.initDatetimepicker()
    }, { deep: true })
  },
  destroyed: function () {
    this.destroyDatetimepicker()
  },
  methods: {}
}
</script>
