import Vue from 'vue'

export default {
  showSidebar: (state) => {
    state.config.sidebar.visible = true
  },
  hideSidebar: (state) => {
    state.config.sidebar.visible = false
  },
  setHeaderNotifications: (state, headerNotifications) => {
    state.config.headerNotifications.notifications = headerNotifications.notifications
    state.config.headerNotifications.nrOfNotifications = headerNotifications.nrOfNotifications
  },
  setLocale: (state, locale) => {
    /* eslint-disable no-undef */
    state.config.locale = Object.assign({}, state.config.locale, locale)
  }
}
