import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'

@inject('uiStore')
@observer
export default class Logo extends Component {
  render() {
    const { collapsed } = this.props.uiStore

    return (
      <div className="app-logo">
        <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />

        {!collapsed ? (
          <h3
            style={{
              color: '#ccc',
              margin: '0 0 0 10px',
              whiteSpace: 'nowrap'
            }}
          >
            Ant Design
          </h3>
        ) : null}
      </div>
    )
  }
}
