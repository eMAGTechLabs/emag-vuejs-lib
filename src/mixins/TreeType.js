/* eslint-disable no-undef */
function getOptions () {
  return Object.assign({
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

export default {
  methods: {
    getOptions,
    initTreeType,
    updateTreeData
  }
}
