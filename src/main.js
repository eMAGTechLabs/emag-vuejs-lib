import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// Reusable items
import Chosen from './components/Chosen'
import Header from './components/Header'
import JqGrid from './components/JqGrid'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import TreeType from './components/TreeType'
import Submenu from './components/Submenu'
import SidebarControl from './components/SidebarControl'
import Autocomplete from './components/Autocomplete'
import Datetimepicker from './components/Datetimepicker'
import HeaderLocalePart from './components/HeaderLocalePart'
import HeaderNotificationsPart from './components/HeaderNotificationsPart'
import HeaderUserPart from './components/HeaderUserPart'
import LinkItem from './components/LinkItem'

// Store
import config from './store/config'
import mutations from './store/mutations'

// Mixins
import chosen from './mixins/Chosen'
import datetimepicker from './mixins/Datetimepicker'
import header from './mixins/Header'
import sidebar from './mixins/Sidebar'
import treetype from './mixins/TreeType'

// Translations
import Translations from './translations/messages.js'

// Plugins
import TranslationsService from './plugins/TranslationsService.js'

const EmagVueLib = {
  Chosen,
  Footer,
  Header,
  JqGrid,
  Sidebar,
  Submenu,
  SidebarControl,
  TreeType,
  Translations,
  Autocomplete,
  Datetimepicker,
  HeaderLocalePart,
  HeaderNotificationsPart,
  HeaderUserPart,
  LinkItem,
  store: {
    config,
    mutations
  },
  mixins: {
    chosen,
    datetimepicker,
    header,
    sidebar,
    treetype
  },
  services: {
    TranslationsService
  }
}

module.exports = EmagVueLib
