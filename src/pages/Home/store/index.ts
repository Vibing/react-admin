import { action, configure, makeObservable, observable } from 'mobx'

configure({
  enforceActions: 'observed'
})

export default class Store {
  constructor() {
    makeObservable(this, {
      count: observable,
      changeCount: action
    })
  }

  count: number = 0

  changeCount = (count: number) => {
    this.count = count
  }
}
