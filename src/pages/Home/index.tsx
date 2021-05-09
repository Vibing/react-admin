import React from 'react'
import { Provider } from 'mobx-react'
import Content from './components/content'
import Store from './store'

export default class Home extends React.Component {
  store: any = new Store()

  render() {
    return <Provider store={this.store} children={<Content />} />
  }
}
