<template>
  <li class="dropdown">
    <a href="javascript:void(0)" class="dropdown-toggle dd-language" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">
      <span class="visible-xs-inline">{{ $t('baseNotifications.titleNotice') }}</span>
      <span><i :class="['flag-icon', locale.icon]"></i>{{ locale.label }}</span><i class="fa fa-angle-down hidden-xs"></i>
    </a>
    <ul class="dropdown-menu dm-language">
      <li v-for="item in items" v-on:click="reloadPage()">
        <link-item :item="item"></link-item>
      </li>
    </ul>
  </li>
</template>
<script>
  import LinkItem from './LinkItem'
  import headerMixin from './../mixins/Header'
  import sidebarMixin from './../mixins/Sidebar'

  export default {
    name: 'headerLocalePart',
    data () {
      return {
        locales: this.$store.state.config.locales
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
    components: {
      LinkItem
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
