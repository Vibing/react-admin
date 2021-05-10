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

  @observable user = null

  @action
  changeUser(user) {
    runInAction(() => {
      this.user = user
    })
  }
}

export default new GlobalAPPStore()
