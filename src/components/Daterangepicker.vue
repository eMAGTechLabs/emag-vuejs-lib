<template>
    <div class="input-group">
        <input type="text" :id="'date_range_' + id" class="form-control" autocomplete="off" :disabled="disabled" :name="name" :required="required">
        <div class="input-group-addon cursor-pointer"><i :class="options.icons.date"></i></div>
    </div>
</template>
<script>
import daterangeMixin from './../mixins/Daterangepicker'
/* eslint-disable no-undef */
export default {
  name: 'daterangepicker',
  props: ['dataOptions', 'disabled', 'name', 'required'],
  mixins: [ daterangeMixin ],
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
  methods: {
  }
}
</script>
