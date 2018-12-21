<template>
    <div class="input-group">
        <input
          class="form-control"
          autocomplete="off"
          type="text"
          :id="'date_range_' + id"
          :disabled="disabled"
          :name="name"
          :required="required"
        >
        <div class="input-group-addon cursor-pointer">
            <i :class="options.icons.date"></i>
        </div>
    </div>
</template>
<script>
import daterangeMixin from './../mixins/Daterangepicker'

export default {
  name: 'daterangepicker',
  props: ['dataOptions', 'disabled', 'name', 'required'],
  mixins: [ daterangeMixin ],
  data () {
    return { options: this.getOptions() }
  },
  beforeMount () {
    this.unwatch = this.$watch('dataOptions', function (data) {
      this.options = this.getOptions()
      this.destroyDaterangepicker()
      this.initDaterangepicker()
    }, { deep: true })
  },
  mounted () {
    this.initDaterangepicker()
  },
  destroyed: function () {
    this.destroyDaterangepicker()
    this.unwatch()
  },
  methods: {}
}
</script>
