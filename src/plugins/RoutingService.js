/* eslint-disable no-unused-vars */
export default function (Vue, options) {
  let router = {}
  let routerMode = {}
  let VueRouter = options.router
  let routes = (options && options.routes) ? options.routes : []
  let finalRoutes = []
  routerMode = options.mode || 'hash'
  finalRoutes.push(..._setMenuItems(_getRawMenuItems(routes), options.useLocale && true))
  finalRoutes.push(..._setMenuItems(_getItems(routes), options.useLocale && true))

  router = new VueRouter({
    routes: finalRoutes,
    mode: routerMode
  })

  if (!Vue.helpers) {
    Vue.helpers = {}
  }
  Vue.helpers.getVueRouter = _getVueRouter
  _forwardRequestIfLocale()
  _initStaticNavigation()

  // Helpers
  function _initStaticNavigation () {
    router.afterEach((to, from) => {
      let routePath = to.fullPath
      if (routerMode === 'hash') {
        routePath = '#' + routePath
      }
      /* eslint-disable no-undef */
      staticNavigation(routePath)
    })
  }

  function _setMenuItems (items, useLocale = true) {
    let routerPaths = []
    for (let i = 0; i < items.length; i++) {
      if (items[i].link && items[i].component) {
        let route = {
          path: (useLocale && items[i].link && items[i].link !== '*') ? '/:locale' + items[i].link : items[i].link,
          component: items[i].component,
          redirect: items[i].redirect || null,
          meta: {
            requiresAuth: items[i].requiresAuth || false,
            urlWithoutLocale: items[i].link
          }
        }
        if (items[i].alias) {
          route.alias = items[i].alias || ''
        }
        routerPaths.push(route)
      }
      if (items[i].children) {
        routerPaths.push(..._setMenuItems(items[i].children, useLocale))
      }
    }
    return routerPaths
  }

  function _getVueRouter () {
    return router
  }

  function _getRawMenuItems (routes) {
    return routes.menuItems
  }

  function _getItems (routes) {
    return routes.items
  }

  function _forwardRequestIfLocale () {
    router.beforeEach((to, from, next) => {
      let locales = (options.config && options.config.locales) ? options.config.locales : []
      if (to.params && to.params.locale) {
        locales.forEach((el, index) => {
          if (el.urlPath === to.params.locale) {
            next()
          }
        })
      } else {
        next()
      }
    })
  }
}
