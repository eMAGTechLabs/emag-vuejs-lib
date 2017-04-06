<template>
  <template v-if="user.label">
    <li class="dropdown">
        <a href="javascript:void(0)" class="dropdown-toggle dd-user" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
            <div class="profile-thumb hidden-xs">
                <img v-if="user.imageLink" class="nav-user-photo" :src="user.imageLink" alt="" onerror="this.src='~emag-apps-ui-kit/dist/css/icons/default_user.png'" height="36">
                <img v-else class="nav-user-photo" src="~emag-apps-ui-kit/dist/css/icons/default_user.png" alt="" height="36">
            </div>
            <span>
              {{ user.label }}
            </span>
            <i class="fa fa-angle-down hidden-xs"></i>
        </a>
        <ul class="dropdown-menu">
            <li v-if="account">
                <link-item :item="account"></link-item>
            </li>
            <li v-if="logout">
                <router-link :to="{name: 'logout'}">{{ $t(logout.label) }}</router-link>
            </li>
        </ul>
    </li>
  </template>
</template>
<script>
  import LinkItem from './LinkItem'

  export default {
    name: 'headerUserChild',
    computed: {
      account () {
        return this.$store.state.config.user.account
      },
      logout () {
        return this.$store.state.config.user.logout
      },
      user () {
        return this.$store.state.config.user
      }
    },
    beforeMount () {
      let username = localStorage.getItem('username');
      let userImageLink = localStorage.getItem('user-image-link');
      if (username) {
        this.$store.commit('setUser', {
          label: username
        })
      }
      if (userImageLink) {
          this.$store.commit('setUser', {
              imageLink: userImageLink
          })
      }
    },
    components: {
      LinkItem
    }
  }
</script>
