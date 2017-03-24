<template>
    <li class="dropdown">
        <a href="javascript:void(0)" class="dropdown-toggle dd-user" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
            <div class="profile-thumb hidden-xs">
                <img v-if="user.imageLink" class="nav-user-photo" :src="user.imageLink" alt="" onerror="this.src='~emag-apps-ui-kit/dist/css/icons/default_user.png'" height="36">
                <img v-else class="nav-user-photo" src="~emag-apps-ui-kit/dist/css/icons/default_user.png" alt="" height="36">
            </div>
            <template v-if="user.label">
              <span>
                  <strong>
                      {{ $t(user.label) }}
                  </strong>
              </span>
                <i class="fa fa-angle-down hidden-xs"></i>
            </template>
            <template v-else>
              <span>
                {{ $t('welcome.messageNoLogin') }}
              </span>
            </template>
        </a>
        <template v-if="user.label">
            <ul class="dropdown-menu">
                <li v-if="account">
                    <link-item :item="account"></link-item>
                </li>
                <li v-if="logout">
                    <link-item :item="logout"></link-item>
                </li>
            </ul>
        </template>
    </li>
</template>
<script>
  import LinkItem from './LinkItem'

  export default {
    name: 'headerUserChild',
    data () {
      return {
        user: this.$store.state.config.user
      }
    },
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
