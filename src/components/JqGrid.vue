<template>
  <div :id="'wrap_grid_table_' + id" class="">
    <table :id="'grid_table_' + id"></table>
    <div :id="'grid_pager_' + id"></div>
  </div>
</template>
<script>
import generalMixin from './../mixins/General'
import jqGridMixin from './../mixins/JqGrid'

export default {
  name: 'jqGrid',
  mixins: [ generalMixin, jqGridMixin ],
  props: ['dataOptions'],
  beforeCreate () {
    this.id = this._uid
  },
  computed: {
    watchProperties() {
      return this.generateWatchProperties( [ this.dataOptions ] )
    }
  },
  beforeMount () {
    this.unwatch = this.$watch('watchProperties', function (data) {
      this.destroyJqGrid()
      this.initJqGrid()
    }, { deep: true })
  },
  mounted () {
    document.getElementById('grid_table_' + this.id).className = document.getElementById('wrap_grid_table_' + this.id).className
    document.getElementById('wrap_grid_table_' + this.id).className = ''
    this.initJqGrid()
  },
  destroyed: function () {
    this.destroyJqGrid()
    this.unwatch()
  }
}
</script>
