/* eslint-disable no-undef */
function getOptions () {
  return Object.assign({}, {
    treeData: [],
    selectId: 'tree_type_' + this._uid
  }, this.translations, this.dataOptions)
}

function initTreeType () {
  $('#id_tree_type_' + this._uid).TreeType(this.options)
}

export default {
  methods: {
    getOptions,
    initTreeType
  }
}
