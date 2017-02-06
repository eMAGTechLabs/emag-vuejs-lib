<template>
    <li class="dropdown">
        <a href="javascript:void(0)" class="dropdown-toggle dd-user" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
            <div class="profile-thumb hidden-xs">
                <img v-if="user.imageLink" class="nav-user-photo" :src="user.imageLink" alt="User image" height="36">
            </div>
            <span>
                {{ $t(user.label) }}
            </span>
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
    name: 'headerUserPart',
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
