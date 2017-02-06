export default {
  sidebar: {
    visible: true
  },
  notifications: {
    total: 0,
    items: []
  },
  user: {
    label: 'welcome.messageNoLogin',
    imageLink: '',
    account: {
      label: 'label.accountSettings',
      link: '',
      onClick: () => {}
    },
    logout: {
      label: 'label.logout',
      link: '/logout',
      onClick: () => {}
    }
  },
  useLocale: true,
  locale: {
    label: 'RO',
    key: 'ro_RO',
    urlPath: 'ro',
    icon: 'flag-icon-ro'
  },
  locales: [
    {
      label: 'RO',
      key: 'ro_RO',
      urlPath: 'ro',
      icon: 'flag-icon-ro'
    },
    {
      label: 'GB',
      key: 'en_GB',
      urlPath: 'en',
      icon: 'flag-icon-gb'
    },
    {
      label: 'BG',
      key: 'bg_BG',
      urlPath: 'bg',
      icon: 'flag-icon-bg'
    },
    {
      label: 'HU',
      key: 'hu_HU',
      urlPath: 'hu',
      icon: 'flag-icon-hu'
    },
    {
      label: 'PL',
      key: 'pl_PL',
      urlPath: 'pl',
      icon: 'flag-icon-pl'
    }
  ]
}
