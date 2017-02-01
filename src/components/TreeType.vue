<template>
  <div>
    <div class="hide-with-opacity">
      <select :id="'tree_type_' + _uid" class="form-control" :disabled="disabled" multiple="multiple">
      </select>
    </div>
    <div class="input-group input-group-no-separation">
      <div class="form-control" :id="'id_tree_type_' + _uid"></div>
      <span class="input-group-addon">
          <i class="fa fa-sitemap"></i>
      </span>
    </div>
  </div>
</template>
<script>
  import treeType from './../mixins/TreeType'
  export default {
    name: 'tree-type',
    props: ['dataOptions', 'disabled'],
    mixins: [ treeType ],
    computed: {
      options: function () {
        return this.getOptions()
      },
      translations: function () {
        return {
          modalTitle: this.$t('tree.modalTitle'),
          modalResetLabel: this.$t('tree.modalResetLabel'),
          modalCancelLabel: this.$t('tree.modalResetLabel'),
          modalOkLabel: this.$t('tree.modalOkLabel'),
          textUnmatched: this.$t('tree.textUnmatched'),
          textSelectHierarchy: this.$t('tree.textSelectHierarchy'),
          noResults: this.$t('label.selectNoResults'),
          textSelected: this.$t('tree.textSelected'),
          searchPlaceholder: this.$t('tree.searchPlaceholder')
        }
      }
    },
    watch: {
      translations: function () {
        this.initTreeType()
      }
    },
    beforeMount () {
      this.unwatch = this.$watch('dataOptions', function (data) {
        this.options = this.getOptions()
        this.initTreeType()
      }, { deep: true })
    },
    destroyed () {
      this.unwatch()
    },
    mounted () {
      this.initTreeType()
    }
  }
</script>
