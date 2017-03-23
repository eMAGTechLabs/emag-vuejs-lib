/* eslint-disable no-undef */
/**
 * RequestInterceptorService sends the 'access-token' to every request after login
 * It also exposes you 'pushRequestInterceptorCallback' method to push your custom interceptor methods
 * To use pushRequestInterceptorCallback method you have to write the following: Vue.helpers.pushRequestInterceptorCallback(<callback>)
 * @param {Vue} Vue           Vue instance
 * @param {Object} options    You can set useAccessTokenCallback key to false if do not want default behaviour
 *                            for setting access-token to every request
 */
export default function RequestInterceptorService (Vue, options) {
  if (!Vue.helpers) {
    Vue.helpers = {}
  }
  Vue.helpers.pushRequestInterceptorCallback = _pushRequestInterceptorCallback

  // Set default useAccessTokenCallback to be true
  if (!options || options.useAccessTokenCallback === 'undefined') {
    options = Object.assign({}, options, { useAccessTokenCallback: true })
  }

  if (options.useAccessTokenCallback) {
    if (localStorage && localStorage['access-token']) {
      _pushRequestInterceptorCallback((xhr) => {
        xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage['access-token'])
      })
    }
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
