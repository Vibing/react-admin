import { observable, configure, action, makeObservable } from 'mobx'

configure({
  enforceActions: 'observed'
})

class GlobalUIStore {
  constructor() {
    makeObservable(this, {
      collapsed: observable,
      changeCollapsed: action
    })
  }

  collapsed = false

  changeCollapsed(collapsed: boolean) {
    this.collapsed = collapsed
  }
}

export default new GlobalUIStore()
