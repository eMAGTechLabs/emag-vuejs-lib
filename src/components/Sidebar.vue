<template>
    <div id="sidebar" class="sidebar sidebar-fixed">
        <div class="sidebar-outer scrollable default-skin" tabindex="-1">
            <div class="viewport">
                <div class="overview">
                    <ul class="sidebar-inner">
                        <li v-for="item in items"
                            :class="['menu-item', item.children && item.children.length ? 'menu-item-has-children': '', item.open ? 'active' : '']">
                            <a :href="item.link">
                                <i :class="['menu-icon', item.icon]"></i>
                                <span class="menu-text">{{ item.label }}</span>
                            </a>
                            <div class="menu-item-data">
                                <a :href="item.link" class="menu-item-min-link">
                                    <span class="menu-text">{{ item.label }}</span>
                                </a>
                                <submenu v-bind:item="item" v-if="item.children.length"></submenu>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <sidebar-control></sidebar-control>
    </div>
</template>

<script>
import Submenu from './Submenu.vue'
import SidebarControl from './SidebarControl.vue'

export default {
  name: 'sidebar',
  props: ['dataOptions'],
  data () {
    return Object.assign({}, this.dataOptions)
  },
  components: {
    Submenu, SidebarControl
  },
  mounted () {
    try {
      /* eslint-disable no-undef */
      initScrollbarForSidebar()
    } catch (ex) {
      console.log(ex)
    }
  }
}
</script>
