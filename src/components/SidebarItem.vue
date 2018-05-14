<template>
    <a :href="getHrefForMenuItem(item)" :class="getCollapsedCssClass(collapsed)" v-if="isAbsolute(item) || hasEmptyLink(item)">
        <i :class="['menu-icon', item.icon]" v-if="!collapsed"></i>
        <span class="menu-text"><template v-if="isFunction($t)">{{ $t(item.label) }}</template><template v-else>{{ item.label }}</template></span>
    </a>
    <router-link :to="{name: item.link, params: item.params }" :class="getCollapsedCssClass(collapsed)" v-else-if="item.params">
        <i :class="['menu-icon', item.icon]" v-if="!collapsed"></i>
        <span class="menu-text"><template v-if="isFunction($t)">{{ $t(item.label) }}</template><template v-else>{{ item.label }}</template></span>
    </router-link>
    <router-link :to="{path: item.link}" :class="getCollapsedCssClass(collapsed)" v-else>
        <i :class="['menu-icon', item.icon]" v-if="!collapsed"></i>
        <span class="menu-text"><template v-if="isFunction($t)">{{ $t(item.label) }}</template><template v-else>{{ item.label }}</template></span>
    </router-link>
</template>
<script>
    import generalMixin from './../mixins/General'
    import sidebarMixin from './../mixins/Sidebar'

    export default {
    name: 'sidebar-item',
    props: ['item', 'collapsed'],
    mixins: [ generalMixin, sidebarMixin ]
    }
</script>
