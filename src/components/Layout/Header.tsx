import React, { Component } from 'react'
import { Layout, Avatar, Menu, Dropdown } from 'antd'
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import Iconfont from '@/components/Iconfont'

const { Header } = Layout

@withRouter
@inject('uiStore')
@observer
export default class LayoutHeader extends Component {
  props: any

  render() {
    return (
      <Header className="app-header">
        {this.renderCollap()}
        <Dropdown overlay={this.overlayContent}>
          <div className="app-avatar">
            <Avatar
              style={{ width: 40, height: 40 }}
              src="https://tva1.sinaimg.cn/large/008i3skNly1gqc704hpilj305k05kt92.jpg"
            />
            <span style={{ marginLeft: 5 }}>Feiliang</span>
          </div>
        </Dropdown>
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

  overlayContent = () => {
    return (
      <Menu
        className="app-header-popover"
        style={{ width: 180 }}
        onClick={this.handleClick}
      >
        <p className="app-customer-info">
          账户资金:
          <span style={{ color: '#C41D7F', marginLeft: 5 }}>87622.22</span>
        </p>
        <Menu.Item
          key="update-password"
          icon={<Iconfont type="icon-xiugaimima" style={{ fontSize: 20 }} />}
        >
          修改密码
        </Menu.Item>
        <Menu.Item
          key="logout"
          icon={<Iconfont type="icon-icon4" style={{ fontSize: 20 }} />}
        >
          退出登录
        </Menu.Item>
      </Menu>
    )
  }

  handleClick = e => {
    console.log('click ', e)
    if (e.key == 'logout') {
      this.props.history.push('/login')
    }
  }
}
