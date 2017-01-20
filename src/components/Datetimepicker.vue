
<template>
    <div class="input-group">
        <input type="text" :id="'date_time_' + id" class="form-control" autocomplete="off" :disabled="disabled">
        <div class="input-group-addon"><i :class="options.icons.date"></i>
        </div>
    </div>
</template>
<script>
import datetimeMixin from './../mixins/Datetimepicker'
/* eslint-disable no-undef */
export default {
  name: 'datetimepicker',
  props: ['dataOptions', 'disabled'],
  mixins: [ datetimeMixin ],
  data () {
    return { options: this.getOptions(this) }
  },
  mounted () {
    this.initDatetimepicker(this)
    this.$watch('dataOptions', function (data) {
      this.options = this.getOptions(this)
      this.destroyDatetimepicker(this)
      this.initDatetimepicker(this)
    }, { deep: true })
  },
  destroyed: function () {
    this.destroyDatetimepicker(this)
  }
}
</script>