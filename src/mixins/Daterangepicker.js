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
          $picker.data('daterangepicker').show()

          return;
        })

        // attach jquery events on change
        $picker.on('show.daterangepicker hide.daterangepicker showCalendar.daterangepicker hideCalendar.daterangepicker cancel.daterangepicker apply.daterangepicker', (event) => {
          if (event.namespace === 'daterangepicker') {
            event.type = 'drp-' + event.type
          }
          self.$emit(event.type, event)
        })

        // attach events for v-model
        $picker.on('input change paste', (event) => {
          self.$emit('input', $picker.val())
        })

        this.unwatch = this.$watch('dataOptions', function (data) {
          this.options = this.getOptions()
          this.destroyDaterangepicker()
          this.initDaterangepicker()
        }, { deep: true })
      } catch(e) {}
    },
    destroyDaterangepicker () {
      try {
        let $picker = $(this.$el).find('#date_range_' + this.id)

        // remove value, destroy and unwatch
        $picker.val('')
        $picker.data('daterangepicker').destroy()
        this.unwatch()
      } catch(e) {}
    }
  }
}
