import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Button } from 'antd'
import Store from '../store'

@inject('store')
@observer
export default class Content extends Component {
  store: Store = this.props.store

  render() {
    const { count } = this.store
    return (
      <div>
        Home Page
        <br />
        <Button type="primary" onClick={this.handleChange}>
          Change Store Value: {count}
        </Button>
      </div>
    )
  }

  handleChange = () => {
    const { count } = this.store
    this.store.changeCount(count + 1)
  }
}
