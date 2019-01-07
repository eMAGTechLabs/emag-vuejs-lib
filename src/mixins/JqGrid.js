function initJqGrid () {
  let options = Object.assign(this.dataOptions, {
    table: '#grid_table_' + this.id,
    pager: '#grid_pager_' + this.id
  })
  /* eslint-disable no-undef */
  this.photonGrid = new PhotonJqGrid(options)
  this.photonGrid.init()
  if (this.dataOptions && this.dataOptions.mountCallback) {
    this.dataOptions.mountCallback(this.photonGrid.grid || {})
  }
}

function destroyJqGrid () {
  try {
    $.jgrid.gridUnload('#grid_table_' + this.id)
  } catch (ex) {}
}

export default {
  methods: {
    initJqGrid,
    destroyJqGrid
  }
}
  