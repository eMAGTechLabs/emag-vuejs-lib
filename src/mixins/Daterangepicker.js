export default {
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
    initDaterangepicker () {
      try {
        let self = this
        let $picker = $('#date_range_' + this.id)

        // load picker with vue options
        $picker.daterangepicker(this.options)

        // show picker on click
        $picker.next().on('click', () => {
          $('#date_range_' + self.id).data('DateRangePicker').show()
        })

        // attach jquery events on change
        $picker.on('input change paste show.daterangepicker hide.daterangepicker showCalendar.daterangepicker hideCalendar.daterangepicker apply.daterangepicker cancel.daterangepicker', (e) => {
          if (e.namespace === 'daterangepicker') {
            e.type = 'drp-' + e.type
          }
          self.$emit(e.type, e)
        })
      } catch(e) {}
    },
    destroyDaterangepicker () {
      try {
        let $picker = $(this.$el).find('#date_range_' + this.id)

        // remove value, destroy and unwatch
        $picker.val('')
        $picker.data('DateRangePicker').destroy()
        this.unwatch()
      } catch(e) {}
    }
  }
}
