import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { runInAction } from 'mobx'
import { Button } from 'antd'

@inject('store')
@observer
export default class Content extends Component {
  render() {
    const { timestamp } = this.props.store
    return (
      <div>
        Home Page
        <br />
        <Button type="primary" onClick={this.changeName}>
          Change Store Value: {timestamp}
        </Button>
      </div>
    )
  }

  changeName = () => {
    runInAction(() => {
      this.props.store.timestamp = new Date().getTime()
    })
  }
}
