<template>
    <div class="input-group">
        <input type="text" :id="'date_time_' + id" class="form-control" autocomplete="off">
        <div class="input-group-addon"><i :class="icons.date"></i>
        </div>
    </div>
</template>
<script>
import datetimeMixin from './../mixins/Datetimepicker'
/* eslint-disable no-undef */
export default {
  name: 'datetimepicker',
  props: ['dataOptions'],
  mixins: [ datetimeMixin ],
  data () {
    this.id = this._uid
    const defaultOptions = {
      format: 'YYYY-MM-DD HH:mm:ss',
      icons: {
        date: ''
      }
    }
    let options = Object.assign(defaultOptions, this.dataOptions || {})
    options.icons.date = this.getIcon(options.format)
    return options
  },
  mounted () {
    $('#date_time_' + this.id).datetimepicker(this.options)
  },
  destroyed: function () {
    try {
      $(this.$el).find('#date_time_' + this.id).data('DateTimePicker').destroy()
    } catch (ex) {}
  }
}
</script>
