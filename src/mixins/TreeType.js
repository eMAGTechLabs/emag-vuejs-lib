/* eslint-disable no-undef */
function getOptions () {
  return Object.assign({}, {
    treeData: [],
    selectId: 'tree_type_' + this._uid
  }, this.translations, this.dataOptions)
}

function initTreeType () {
  let self = this
  try {
    $('#id_tree_type_' + self._uid).TreeType(self.options)
  } catch (ex) {
  }
}

function getTranslations () {
  return {
    modalTitle: this.$t('tree.modalTitle'),
    modalResetLabel: this.$t('tree.modalResetLabel'),
    modalCancelLabel: this.$t('tree.modalCancelLabel'),
    modalOkLabel: this.$t('tree.modalOkLabel'),
    textUnmatched: this.$t('tree.textUnmatched'),
    textSelectHierarchy: this.$t('tree.textSelectHierarchy'),
    noResults: this.$t('label.selectNoResults'),
    textSelected: this.$t('tree.textSelected'),
    searchPlaceholder: this.$t('tree.searchPlaceholder')
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
    getTranslations,
    updateTreeData
  }
}
