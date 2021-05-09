import { observable, configure, makeObservable } from 'mobx'

configure({
  enforceActions: 'observed',
})

export default class Store {
  constructor() {
    makeObservable(this)
  }

  @observable timestamp = new Date().getTime()
}
