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
import Modal from './components/Modal'
import Datetimepicker from './components/Datetimepicker'
import Daterangepicker from './components/Daterangepicker'
import HeaderLocaleChild from './components/HeaderLocaleChild'
import HeaderNotificationsChild from './components/HeaderNotificationsChild'
import HeaderUserChild from './components/HeaderUserChild'
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
import TranslationService from './plugins/TranslationService.js'
import AuthService from './plugins/AuthService.js'
import RoutingService from './plugins/RoutingService.js'
import RequestInterceptorService from './plugins/RequestInterceptorService.js'

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
  Modal,
  Datetimepicker,
  Daterangepicker,
  HeaderLocaleChild,
  HeaderNotificationsChild,
  HeaderUserChild,
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
    TranslationService,
    AuthService,
    RoutingService,
    RequestInterceptorService
  }
}

module.exports = EmagVueLib
