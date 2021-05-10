import { configure } from 'mobx'

configure({
  enforceActions: 'observed',
})

class GlobalAPPStore {}

export default new GlobalAPPStore()
