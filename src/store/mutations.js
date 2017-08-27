import Vue from 'vue'

export default {
  showSidebar: (state) => {
    state.config.sidebar.visible = true
  },
  hideSidebar: (state) => {
    state.config.sidebar.visible = false
  },
  setHeaderNotifications: (state, notifications) => {
    state.config.notifications = notifications
  },
  setLocale: (state, locale) => {
    /* eslint-disable no-undef */
    state.config.locale = Object.assign({}, state.config.locale, locale)
  },
  setUser: (state, user) => {
    state.config.user = Object.assign({}, state.config.user, user)
  },
  setMenuItems: (state, menuItems) => {
    state.config.menu.items = menuItems

    let routePath = this.$route.path

    if (this.$router.mode === 'hash') {
      routePath = '#' + routePath
    }

    staticNavigation(routePath)
  }
}
