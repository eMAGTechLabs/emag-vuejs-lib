<template>
  <div>
    <table :id="'grid_table_' + id" class="table table-bordered"></table>
    <div :id="'grid_pager_' + id"></div>
  </div>
</template>
<script>
import jqGridMixin from './../mixins/JqGrid'

export default {
  name: 'jqGrid',
  mixins: [ jqGridMixin ],
  props: ['dataOptions'],
  beforeCreate () {
    this.id = this._uid
  },
  computed: {
    watchProperties() {
      return [JSON.stringify(this.dataOptions)].join()
    }
  },
  beforeMount () {
    this.unwatch = this.$watch('watchProperties', function (data) {
      
    }, { deep: true })
  },
  mounted () {
    this.initJqGrid()
  },
  destroyed: function () {

  }
}
</script>
