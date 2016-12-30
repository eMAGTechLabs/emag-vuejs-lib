<template>
  <ul class="sidebar-submenu">
    <li v-for="child in item.children" :class="['menu-item', child.children && child.children.length ? 'menu-item-has-children': '', child.open ? 'active' : '']">
      <router-link v-bind:to="child.link" :href="child.link.length ? child.link: 'javascript:void(0)'">
        <span class="menu-text">{{ child.label }}</span>
      </router-link>
      <submenu :item="child"></submenu>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'submenu',
  props: ['item']
}
</script>
