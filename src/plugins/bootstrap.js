import {
  BButton,
  BCard,
  BModal,
  BTable,
  BContainer,
  BRow,
  BCol,
  BFormInput,
  BNavbar,
  BNavbarBrand,
  BNavbarToggle,
  BCollapse,
  BNavbarNav,
  BNavItem,
  BIcon
} from 'bootstrap-vue-next'

export default {
  install (app) {
    app.component('BButton', BButton)
    app.component('BCard', BCard)
    app.component('BModal', BModal)
    app.component('BTable', BTable)
    app.component('BContainer', BContainer)
    app.component('BRow', BRow)
    app.component('BCol', BCol)
    app.component('BFormInput', BFormInput)
    app.component('BNavbar', BNavbar)
    app.component('BNavbarBrand', BNavbarBrand)
    app.component('BNavbarToggle', BNavbarToggle)
    app.component('BCollapse', BCollapse)
    app.component('BNavbarNav', BNavbarNav)
    app.component('BNavItem', BNavItem)
    app.component('BIcon', BIcon)
  }
}
