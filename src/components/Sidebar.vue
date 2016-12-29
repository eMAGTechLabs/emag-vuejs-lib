<template>
    <div id="sidebar" class="sidebar sidebar-fixed">
        <div class="sidebar-outer scrollable default-skin" tabindex="-1">
            <div class="viewport">
                <div class="overview">
                    <ul class="sidebar-inner">
                        <li v-for="item in items"
                            :class="['menu-item', item.children && item.children.length ? 'menu-item-has-children': '', item.open ? 'active' : '']">
                            <router-link :to="item.link" :href="item.link.length ? item.link: 'javascript:void(0)'">
                                <i :class="['menu-icon', item.icon]"></i>
                                <span class="menu-text">{{ item.label }}</span>
                            </router-link>
                            <div class="menu-item-data">
                                <router-link :to="item.link" class="menu-item-min-link" :href="item.link.length ? item.link: 'javascript:void(0)'">
                                    <span class="menu-text">{{ item.label }}</span>
                                </router-link>
                                <submenu :item="item" v-if="item.children.length"></submenu>
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
import SidebarControl from './SidebarControl'
import Submenu from './Submenu'

export default {
  name: 'sidebar',
  props: ['dataOptions'],
  data () {
    return Object.assign({}, { items: (this.dataOptions && this.dataOptions.items) ? this.dataOptions.items : [] })
  },
  components: {
    Submenu, SidebarControl
  },
  mounted () {
    try {
      /* eslint-disable no-undef */
      initSidebarEvents()
      staticNavigation(this.$route.path)
      initScrollbarForSidebar()
    } catch (ex) {
      console.log(ex)
    }
  }
}
</script>
