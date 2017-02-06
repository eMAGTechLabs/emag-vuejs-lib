<template>
    <a :href="getHrefForMenuItem(item)" v-on:click="item.onClick || null" v-if="isAbsolute(item) || hasEmptyLink(item)">
        <i :class="['flag-icon', item.icon]" v-if="item.icon"></i>
        <span class="menu-text">{{ $t(item.label) }}</span>
    </a>
    <router-link :to="item.link" v-on:click="onClick || null" v-else>
        <i :class="['flag-icon', item.icon]" v-if="item.icon"></i>
        <span class="menu-text">{{ $t(item.label) }}</span>
    </router-link>
</template>
<script>
import sidebarMixin from './../mixins/Sidebar'
export default {
  name: 'link-item',
  props: ['item'],
  mixins: [ sidebarMixin ]
}
</script>
