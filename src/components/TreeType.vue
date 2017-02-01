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
        return this.getTranslations()
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
