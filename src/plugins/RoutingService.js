/* eslint-disable no-unused-vars */
/**
 * Routing service for adding menu and custom routes (that are not in a menu, for example a /edit)
 * Adds getVueRouter method for adding custom callbacks if needed. The method is available as Vue.helpers.getVueRouter()
 *
 * @param  {Vue} Vue     Vue instance
 * @param  {Object} options
 */
/**
 * options object accepts the following keys:
 *    {Object}  router      Vue router (mandatory)
 *    {Object}  routes      Routes (mandatory)
 *    {Object}  config      Store config file (mandatory)
 *    {Boolean} useLocale   Sets if locale is used in URL or not
 *    {Object}  mode        Routing mode (default is hash - it does not work with history for now)
 */
export default function (Vue, options) {
  let localesPaths = options.config.locales.map((item) => {
    return item.urlPath
  })
  // Regex used for locales. If do not match locale key it will be redirected to NotFoundComponent used in boilerplate
  let localesRegexPattern = _getRegexPatternForLocales(localesPaths)
  let router = {}
  let routerMode = {}
  let VueRouter = options.router
  let routes = (options && options.routes) ? options.routes : []
  let rootPage = (options && options.rootPage) ? options.rootPage : '/login'
  let finalRoutes = []
  routerMode = options.mode || 'hash'

  finalRoutes.push(..._setMenuItems(_getRawMenuItems(routes), options.config.useLocale))
  finalRoutes.push(..._setMenuItems(_getItems(routes), options.config.useLocale))
  router = new VueRouter({
    routes: finalRoutes,
    mode: routerMode
  })
  if (!Vue.helpers) {
    Vue.helpers = {}
  }
  Vue.helpers.getVueRouter = _getVueRouter
  _forwardRequestIfLocale()
  _rootPageRedirectToDashboard()
  _initStaticNavigation()
  _refreshIfLocaleChangeInBrowser()
  _replacePatternBeforeEnteringPage()

  // Helpers
  function _initStaticNavigation () {
    router.afterEach((to, from) => {
      let routePath = to.fullPath
      if (routerMode === 'hash') {
        routePath = '#' + routePath
      }
      /* eslint-disable no-undef */
      try {
        staticNavigation(routePath)
      } catch (ex) {}
    })
  }

  function _setMenuItems (items, useLocale) {
    let routerPaths = []
    for (let i = 0; i < items.length; i++) {
      if ((items[i].link && items[i].component) || (items[i].redirect) || (items[i].alias)) {
        let route = {
          path: _getPath(useLocale, items[i]),
          component: items[i].component,
          redirect: items[i].redirect ? _replaceLocalePatternWithCurrent(items[i].redirect) : null,
          meta: {
            requiresAuth: items[i].requiresAuth || false,
            urlWithoutLocale: items[i].link
          }
        }
        route.alias = items[i].alias || ''
        route.name = items[i].name || ''
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

  function _getPath (useLocale, item) {
    if (useLocale && item.link && item.link !== '*' && !item.redirect) {
      if (item.useLocale && item.useLocale === false) {
        return item.link
      }
      return '/:locale' + localesRegexPattern + item.link
    }
    return item.link
  }

  function _getRegexPatternForLocales (localesPaths) {
    return '(' + Array.join(localesPaths, '|') + ')'
  }

  // :locale/add-product will be en/add-product if on english language
  function _replaceLocalePatternWithCurrent (routePath) {
    return routePath.replace(':locale', options.config.locale.urlPath)
  }

  // Menu items
  function _getRawMenuItems (routes) {
    return routes.menuItems
  }

  // Items that will use routing system but not show in menu
  function _getItems (routes) {
    return routes.items
  }

  function _forwardRequestIfLocale () {
    router.beforeEach(function (to, from, next) {
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

  function _rootPageRedirectToDashboard () {
    // When user enter on "/" it is redirected to page set on rootPage
    router.beforeEach(function (to, from, next) {
      if (to.path === '/' && to.matched.length === 0) {
        next(rootPage)
      }
      next()
    })
  }

  function _replacePatternBeforeEnteringPage () {
    router.beforeEach(function (to, from, next) {
      if (to.fullPath.search(':locale') !== -1) {
        next(_replaceLocalePatternWithCurrent(to.fullPath))
      }
      next()
    })
  }

  function _refreshIfLocaleChangeInBrowser () {
    // Before each route test to see if locale changes and refresh (by default hash mode does not refresh)
    router.beforeEach(function (to, from, next) {
      if ((to.params && to.params.locale) && (from.params && from.params.locale)) {
        if (to.params.locale !== from.params.locale) {
          location.reload()
        }
      }
      next()
    })
  }
}
