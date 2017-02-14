/* eslint-disable no-undef */
export default function (Vue, options) {
  Vue.helpers.getVueRouter().beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (localStorage.getItem('access-token').lenth) {
        next({
          path: options.redirectTo || '/login',
          query: {
            redirect: to.fullPath
          }
        })
      } else {
        next()
      }
    } else {
      next()
    }
  })
}
