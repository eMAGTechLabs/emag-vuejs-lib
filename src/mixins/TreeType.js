/* eslint-disable no-undef */
import $ from 'jquery'

function getOptions () {
  return Object.assign({}, {
    treeData: [],
    selectId: 'tree_type_' + this._uid
  }, this.translations, this.dataOptions)
}

function initTreeType () {
  try {
    $('#id_tree_type_' + this._uid).TreeType(this.options)
  } catch (ex) {}
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

export default {
  methods: {
    getOptions,
    initTreeType,
    getTranslations
  }
}
