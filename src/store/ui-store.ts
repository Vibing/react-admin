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

class GlobalUIStore {
  constructor() {
    makeObservable(this)
  }

  @observable collapsed = false

  @action
  changeCollapsed(collapsed: boolean) {
    runInAction(() => {
      this.collapsed = collapsed
    })
  }
}

export default new GlobalUIStore()
