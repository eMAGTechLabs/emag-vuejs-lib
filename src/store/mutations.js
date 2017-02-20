import Vue from 'vue'

export default {
  showSidebar: (state) => {
    state.config.sidebar.visible = true
  },
  hideSidebar: (state) => {
    state.config.sidebar.visible = false
  },
  setHeaderNotifications: (state, headerNotifications) => {
    state.config.notifications.items = headerNotifications.items
    state.config.notifications.total = headerNotifications.total
  },
  setLocale: (state, locale) => {
    /* eslint-disable no-undef */
    state.config.locale = Object.assign({}, state.config.locale, locale)
  }
}
