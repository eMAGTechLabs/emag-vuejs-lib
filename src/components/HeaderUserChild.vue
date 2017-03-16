<template>
    <li class="dropdown">
        <a href="javascript:void(0)" class="dropdown-toggle dd-user" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
            <div class="profile-thumb hidden-xs">
                <img v-if="user.imageLink" class="nav-user-photo" :src="user.imageLink" alt="user.label" :onerror="this.src='require('static/css/icons/default_user.png')'" height="36">
                <img v-else class="nav-user-photo" :src="require('static/css/icons/default_user.png')" alt="user.label" height="36">
            </div>
            <template v-if="ok">
              <span class="visible-lg-inline">
                {{ $t(welcome.message) }}
              </span>
              <span>
                  <strong>
                      {{ $t(user.label) }}
                  </strong>
              </span>
            </template>
            <template v-else>
              <span>
                {{ $t(welcome.messageNoLogin) }}
              </span>
            </template>

            <i class="fa fa-angle-down hidden-xs"></i>
        </a>
        <ul class="dropdown-menu">
            <li v-if="account">
                <link-item :item="account"></link-item>
            </li>
            <li v-if="logout">
                <link-item :item="logout"></link-item>
            </li>
        </ul>
    </li>
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
    components: {
      LinkItem
    }
  }
</script>
