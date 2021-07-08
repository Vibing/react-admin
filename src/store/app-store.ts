import {
  observable,
  configure,
  action,
  makeObservable,
  runInAction
} from 'mobx'

configure({
  enforceActions: 'observed'
})

class GlobalAPPStore {
  constructor() {
    makeObservable(this, {
      user: observable,
      changeUser: action
    })
  }

  user = null

  changeUser(user) {
    this.user = user
  }
}

export default new GlobalAPPStore()
