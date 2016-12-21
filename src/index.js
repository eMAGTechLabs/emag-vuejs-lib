import * as components from './components/components'

function plugin (Vue) {
  if (plugin.installed) {
    return
  }

  Object.keys(components).forEach(function (key) {
    Vue.component(key, components[key])
  })
}

if (window && window.Vue) {
  window.Vue.use(plugin)
}

export * from './components/components'
export default plugin
