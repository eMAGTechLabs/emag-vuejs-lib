/* eslint-disable no-undef */
function getOptions () {
  let options = Object.assign({
    treeData: [],
    selectId: 'tree_type_' + this._uid,
    modalTitle: this.translations.tree.modalTitle,
    modalResetLabel: this.translations.tree.modalResetLabel,
    modalCancelLabel: this.translations.tree.modalCancelLabel,
    modalOkLabel: this.translations.tree.modalOkLabel,
    textUnmatched: this.translations.tree.textUnmatched,
    textSelectHierarchy: this.translations.tree.textSelectHierarchy,
    noResults: this.translations.label.selectNoResults,
    textSelected: this.translations.tree.textSelected,
    searchPlaceholder: this.translations.tree.searchPlaceholder
  }, this.dataOptions)
  options.selectData = this.getSelectData(options.treeData)

  return options
}

function initTreeType () {
  let self = this
  try {
    $('#id_tree_type_' + self._uid).TreeType(self.options)
  } catch (ex) {
  }
}

function updateTreeData (treeData) {
  try {
    $('#id_tree_type_' + this._uid).TreeType('treeData', treeData)
    let self = this
    setTimeout(function () {
      $('#tree_type_' + self._uid).trigger('change')
    }, 0)
  } catch (ex) {
  }
}

function getSelectData (treeData) {
  let selectData = []

  for (let nodeId in treeData) {
    selectData.push(treeData[nodeId])
    if (treeData[nodeId] && treeData[nodeId].children && treeData[nodeId].children.length > 0) {
      let childrenData = this.getSelectData(treeData[nodeId].children)
      
      for (let childId in childrenData) {
        selectData.push(childrenData[childId])
      }
    }
  }

  return selectData
}

export default {
  methods: {
    getOptions,
    initTreeType,
    updateTreeData,
    getSelectData
  }
}
