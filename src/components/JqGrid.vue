<template>
  <div>
    <table :id="'grid_table_' + id" class="table table-bordered"></table>
    <div :id="'grid_pager_' + id"></div>
  </div>
</template>
<script>
export default {
  name: 'jqGrid',
  props: ['dataOptions'],
  beforeCreate () {
    this.id = this._uid
  },
  mounted () {
    let options = Object.assign(this.dataOptions, {
      table: '#grid_table_' + this.id,
      pager: '#grid_pager_' + this.id
    })
    /* eslint-disable no-undef */
    var photonGrid = new PhotonJqGrid(options)
    photonGrid.init()
    if (this.dataOptions && this.dataOptions.mountCallback) {
      this.dataOptions.mountCallback(photonGrid.grid || {})
    }
  }
}
</script>
