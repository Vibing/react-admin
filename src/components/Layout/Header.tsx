import React, { Component } from 'react'
import { Layout, Avatar, Badge, Popover, Image } from 'antd'
import { inject, observer } from 'mobx-react'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

const { Header } = Layout

const text = <span>Title</span>
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
)

@inject('uiStore')
@observer
export default class LayoutHeader extends Component {
  props: any

  render() {
    return (
      <Header className="app-header">
        {this.renderCollap()}
        <Popover
          arrowPointAtCenter
          placement="bottomRight"
          title={text}
          content={content}
          trigger="click"
        >
          <Badge className="app-avatar" count={1}>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </Badge>
        </Popover>
      </Header>
    )
  }

  toggleCollapsed = () => {
    const { uiStore } = this.props
    uiStore.changeCollapsed(!uiStore.collapsed)
  }

  renderCollap = () => {
    const { collapsed } = this.props.uiStore

    return collapsed ? (
      <MenuUnfoldOutlined class="app-trigger" onClick={this.toggleCollapsed} />
    ) : (
      <MenuFoldOutlined class="app-trigger" onClick={this.toggleCollapsed} />
    )
  }
}
