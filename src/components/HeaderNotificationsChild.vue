<template>
    <li v-if="user.label" class="dropdown">
        <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
            <i class="fa fa-bell nav-icon-lg hidden-xs"></i>
            <span class="visible-xs-inline">{{ $t('baseNotifications.titleNotice') }}</span>
            <span class="jewel" v-if="total != 0">{{ total }} </span>
        </a>
        <ul class="dropdown-menu">
            <li class="dm-header hidden-xs">
                <span>{{ $t(label) }}</span>
            </li>
            <li v-for="notification in notifications">
              <link-item :item="notification"></link-item>
            </li>
        </ul>
    </li>
</template>
<script>
  import LinkItem from './LinkItem'

  export default {
    name: 'headerNotificationsChild',
    computed: {
      total () {
        return this.$store.state.config.notifications.total
      },
      notifications () {
        return this.$store.state.config.notifications.items
      },
      label () {
        return this.$store.state.config.notifications.label || 'baseNotifications.titleNotice'
      },
      user () {
        return this.$store.state.config.user
      }
    },
    created () {
      let username = localStorage.getItem('username');
      if (username) {
        this.$store.commit('setUser', {
          label: username
        })
      }
    },
    components: {
      LinkItem
    }
  }
</script>
