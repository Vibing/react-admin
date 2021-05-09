import {
  observable,
  configure,
  action,
  makeObservable,
  runInAction,
} from 'mobx'

configure({
  enforceActions: 'observed',
})

class GlobalAPPStore {
  constructor() {
    makeObservable(this)
  }
}

export default new GlobalAPPStore()
