<template>
    <a :href="getHrefForMenuItem(item)" :class="getCollapsedCssClass(collapsed)" v-if="isAbsolute(item) || hasEmptyLink(item)">
        <i :class="['menu-icon', item.icon]" v-if="!collapsed"></i>
        <span class="menu-text">{{ item.label }}</span>
    </a>
    <router-link :to="item.link" :class="getCollapsedCssClass(collapsed)" v-else>
        <i :class="['menu-icon', item.icon]" v-if="!collapsed"></i>
        <span class="menu-text">{{ item.label }}</span>
    </router-link>
</template>
<script>
import sidebarMixin from './../mixins/Sidebar'

export default {
  name: 'sidebar-item',
  props: ['item', 'collapsed'],
  mixins: [ sidebarMixin ]
}
</script>
