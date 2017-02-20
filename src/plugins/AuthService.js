/* eslint-disable no-undef */
/**
 * AuthService checks if localStorage has key 'access-token' set (the key is set during login)
 * If not it will redirect you to login or another page set by you (using redirectTo key)
 * @param  {Vue} Vue     Vue instance
 * @param  {Object} options   You can set redirectTo key if the page is not /login
 */
export default function (Vue, options) {
  Vue.helpers.getVueRouter().beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!localStorage.getItem('access-token')) {
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
