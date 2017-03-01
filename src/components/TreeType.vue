<template>
  <div>
    <div class="hide-with-opacity">
      <select :id="'tree_type_' + _uid" class="form-control" :disabled="disabled" multiple="multiple" :name="name" :required="required">
        <option value=""></option>
        <option :value="item.key" v-for="item in options.treeData" :selected="item.selected">
            {{ item.title }}
        </option>
      </select>
    </div>
    <div class="input-group input-group-no-separation">
      <div class="form-control" :id="'id_tree_type_' + _uid"></div>
      <span class="input-group-addon">
          <i class="fa fa-sitemap" v-on:click="openTree"></i>
      </span>
    </div>
  </div>
</template>
<script>
  import treeType from './../mixins/TreeType'
  export default {
    name: 'tree-type',
    props: ['dataOptions', 'disabled', 'name', 'required'],
    mixins: [ treeType ],
    computed: {
      options: function () {
        return this.getOptions()
      },
      translations: function () {
        return this.getTranslations()
      }
    },
    methods: {
      openTree () {
        try {
          this.$el.querySelector('#id_tree_type_' + this._uid).click()
        } catch (ex) {}
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
        /* eslint-disable no-undef */
        this.updateTreeData(this.options.treeData)
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
