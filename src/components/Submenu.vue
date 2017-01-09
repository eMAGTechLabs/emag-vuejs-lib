<template>
  <ul class="sidebar-submenu">
    <li v-for="child in item.children" :class="getMenuItemCssClass(child)">
      <sidebar-item :item="child" :collapsed="true"></sidebar-item>
      <submenu :item="child"></submenu>
    </li>
  </ul>
</template>
<script>
/* eslint-disable no-unused-vars */
import sidebarMixin from './../mixins/Sidebar'
import SidebarItem from './SidebarItem'

export default {
  name: 'submenu',
  props: ['item'],
  mixins: [ sidebarMixin ],
  components: { SidebarItem }
}
</script>
