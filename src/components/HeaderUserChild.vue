<template>
    <li v-if="user.label" class="dropdown">
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
            <li v-for="link in user.links">
                <router-link :to="{name: link.route}"><template v-if="isFunction($t)">{{ $t(link.label) }}</template><template v-else>{{ link.label }}</template></router-link>
            </li>
            <li v-if="logout">
                <router-link :to="{name: 'logout'}"><template v-if="isFunction($t)">{{ $t(logout.label) }}</template><template v-else>{{ logout.label }}</template></router-link>
            </li>
        </ul>
    </li>
</template>
<script>
  import generalMixin from './../mixins/General'
  import LinkItem from './LinkItem'

  export default {
    name: 'headerUserChild',
    mixins: [ generalMixin ],
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
      let username = localStorage.getItem('username')
      let userImageLink = localStorage.getItem('user-image-link')
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
