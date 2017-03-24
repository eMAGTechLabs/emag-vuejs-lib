<template>
  <li class="dropdown">
    <a href="javascript:void(0)" class="dropdown-toggle dd-language" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">
      <span class="visible-xs-inline">{{ $t('baseNotifications.titleNotice') }}</span>
      <span><i :class="['flag-icon', locale.icon]"></i>{{ locale.label }}</span><i class="fa fa-angle-down hidden-xs"></i>
    </a>
    <ul class="dropdown-menu dm-language">
      <li v-for="item in items" v-on:click="reloadPage()">
        <a :href="getHrefForMenuItem(item)" v-on:click="item.onClick || null" v-if="isAbsolute(item) || hasEmptyLink(item)">
            <i :class="['flag-icon', item.icon]" v-if="item.icon"></i>
            <span class="menu-text">{{ $t(item.label) }}</span>
        </a>
        <router-link :to="item.link" v-on:click="onClick || null" v-else>
            <i :class="['flag-icon', item.icon]" v-if="item.icon"></i>
            <span class="menu-text">{{ $t(item.label) }}</span>
        </router-link>
      </li>
    </ul>
  </li>
</template>
<script>
  import headerMixin from './../mixins/Header'
  import sidebarMixin from './../mixins/Sidebar'

  export default {
    name: 'headerLocaleChild',
    data () {
      return {
        locales: this.$store.state.config.locales,
        locale: this.$store.state.config.locale,
        items: []
      }
    },
    mixins: [ headerMixin, sidebarMixin ],
    computed: {
      locale () {
        return this.$store.state.config.locale
      },
      items () {
        return this.getLocaleItems()
      }
    },
    methods: {
      reloadPage () {
        /* eslint-disable no-undef */
        location.reload()
      }
    },
    beforeMount () {
      this.setDefaultLocale()
      this.setLinksForLocales()
    }
  }
</script>
