export default {
  methods: {
    getHrefForMenuItem: (item) => {
      return item.link || 'javascript:void(0)'
    },
    isAbsolute: (item) => {
      return !!item.absolute
    },
    hasEmptyLink: (item) => {
      return !(item.link && item.link.length)
    },
    getMenuItemCssClass: (item) => {
      let menuItemCssClass = 'menu-item'
      if (item.children && item.children.length) {
        menuItemCssClass += ' menu-item-has-children'
      }
      if (item.open) {
        menuItemCssClass += ' active'
      }
      return menuItemCssClass
    },
    getCollapsedCssClass: (collapsed) => {
      return collapsed ? 'menu-item-min-link' : ''
    }
  }
}
