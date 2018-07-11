<template>
    <a :href="getHrefForMenuItem(item)" v-on:click="item.onClick || null" v-if="isAbsolute(item) || hasEmptyLink(item)">
        <i :class="['flag-icon', item.icon]" v-if="item.icon"></i>
        <span class="menu-text"><template v-if="isFunction(this.$t)">{{ $t(item.label) }}</template><template v-else>{{ item.label }}</template></span>
    </a>
    <router-link :to="item.link" v-on:click="onClick || null" v-else>
        <i :class="['flag-icon', item.icon]" v-if="item.icon"></i>
        <span class="menu-text"><template v-if="isFunction(this.$t)">{{ $t(item.label) }}</template><template v-else>{{ item.label }}</template></span>
    </router-link>
</template>
<script>
    import generalMixin from './../mixins/General'
    import sidebarMixin from './../mixins/Sidebar'

    export default {
    name: 'link-item',
    props: ['item'],
    mixins: [ generalMixin, sidebarMixin ]
    }
</script>
