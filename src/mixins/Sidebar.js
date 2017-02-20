function getHrefForMenuItem (item) {
  return item.link || 'javascript:void(0)'
}

function isAbsolute (item) {
  return !!item.absolute
}

function hasEmptyLink (item) {
  return !(item.link && item.link.length)
}

function getMenuItemCssClass (item) {
  let menuItemCssClass = 'menu-item'
  if (item.children && item.children.length) {
    menuItemCssClass += ' menu-item-has-children'
  }
  if (item.open) {
    menuItemCssClass += ' active'
  }
  return menuItemCssClass
}

function getCollapsedCssClass (collapsed) {
  return collapsed ? 'menu-item-min-link' : ''
}

function getItems () {
  /* eslint-disable no-unused-vars */
  let items = (this.dataOptions && this.dataOptions.items) ? this.dataOptions.items : []
  if (this.$store.state.config && this.$store.state.config.useLocale) {
    _appendCurrentLocaleToItems.call(this, items, this.$store.state.config.locale)
  }
  return items
}

function _appendCurrentLocaleToItems (items, locale) {
  for (let i = 0; i < items.length; i++) {
    if (!hasEmptyLink(items[i])) {
      if (!items[i]._baseUrl) {
        items[i]._baseUrl = items[i].link
      }
      items[i].link = '/' + locale.urlPath + items[i]._baseUrl
    }
    if (items[i].children && items[i].children.length) {
      _appendCurrentLocaleToItems.call(this, items[i].children, locale)
    }
  }
}

export default {
  methods: {
    getHrefForMenuItem,
    isAbsolute,
    hasEmptyLink,
    getMenuItemCssClass,
    getCollapsedCssClass,
    getItems
  }
}
