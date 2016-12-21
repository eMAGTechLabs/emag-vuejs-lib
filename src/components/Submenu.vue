<template>
  <ul class="sidebar-submenu">
    <li class="menu-item" v-for="child in item.children">
      <a :href=child.link>
        <span class="menu-text">{{ child.label }}</span>
      </a>
      <submenu v-bind:item="child"></submenu>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'submenu',
  props: ['item']
}
</script>
