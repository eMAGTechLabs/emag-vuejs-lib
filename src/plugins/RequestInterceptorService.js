/* eslint-disable no-undef */
export default function RequestInterceptorService (Vue, options) {
  if (!Vue.helpers) {
    Vue.helpers = {}
  }
  Vue.helpers.pushRequestInterceptorCallback = _pushRequestInterceptorCallback

  if (localStorage && localStorage['access-token']) {
    _pushRequestInterceptorCallback((xhr) => {
      xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage['access-token'])
    })
  }

  function _pushRequestInterceptorCallback (callback) {
    var oldSend, i
    if (XMLHttpRequest.callbacks) {
      XMLHttpRequest.callbacks.push(callback)
    } else {
      XMLHttpRequest.callbacks = [callback]
      oldSend = XMLHttpRequest.prototype.send
      XMLHttpRequest.prototype.send = function () {
        for (i = 0; i < XMLHttpRequest.callbacks.length; i++) {
          XMLHttpRequest.callbacks[i](this)
        }
        oldSend.apply(this, arguments)
      }
    }
  }
}
