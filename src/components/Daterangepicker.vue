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
export default {
  name: 'daterangepicker',
  props: ['dataOptions', 'disabled', 'name', 'required'],
  data () {
    return { options: this.getOptions() }
  },
  mounted () {
    this.initDateRangePicker()
    this.unwatch = this.$watch('dataOptions', function (data) {
      this.options = this.getOptions()
      this.destroyDateRangePicker()
      this.initDateRangePicker()
    }, { deep: true })
  },
  destroyed: function () {
    this.destroyDateRangePicker()
  },
  methods: {
    getOptions () {
      this.id = this._uid
      let options = {
        icons: {
          date: 'fa fa-calendar'
        }
      }
      return Object.assign({}, options, this.dataOptions)
    },
    initDateRangePicker () {
        let self = this;
        let $picker = $('#date_range_' + this.id);

        // load picker with vue options
        $picker.daterangepicker(this.options)

        // show picker on click
        $picker.next().on('click', () => {
          $('#date_range_' + self.id).data('DateRangePicker').show()
        })

        // attach jquery events on change
        $picker.on('input change dp.hide dp.show dp.change dp.error dp.update', (e) => {
          if (e.type === 'dp' && e.namespace) {
            e.type += e.namespace
          }
          self.$emit(e.type, e)
        })
    },
    destroyDateRangePicker () {
        let $picker = $(this.$el).find('#date_range_' + this.id)

        // remove value, destroy and unwatch
        $picker.val('')
        $picker.data('DateRangePicker').destroy()
        this.unwatch()
    }
  }
}
</script>
