import React, { Component, Fragment } from 'react'
import { Layout, Menu } from 'antd'
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import Iconfont from 'components/Iconfont'
import Logo from './Logo'

import menusData from './_defaultRoutes'

const { Sider } = Layout
const { SubMenu } = Menu
@withRouter
@inject('uiStore')
@observer
export default class SlideMenu extends Component {
  props: any
  state: any

  constructor(props) {
    super(props)

    this.state = {
      openKeys: [],
    }
  }

  componentDidMount() {
    // 设置openKeys
    this.handleOpenKeys()
  }

  render() {
    const { collapsed } = this.props.uiStore

    return (
      <Sider
        trigger={null}
        className="app-slide"
        collapsible
        collapsed={collapsed}
      >
        <Logo />
        {this.renderMenus()}
      </Sider>
    )
  }

  renderMenus = () => {
    if (!menusData.routes || !menusData.routes.length) {
      return null
    }

    const { openKeys } = this.state
    const { history } = this.props
    const { routes } = menusData

    return (
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[history.location.pathname]}
        openKeys={openKeys}
        onSelect={this.handleMenuSelect}
        onOpenChange={this.onOpenChange}
      >
        {this.renderMenuItems(routes)}
      </Menu>
    )
  }

  renderMenuItems = routes => {
    const renderMenu = ({ path, icon, name, children }) => {
      const itemProps = {
        key: path,
        icon: icon ? <Iconfont type={icon} /> : null,
      }
      if (!children?.length) {
        return <Menu.Item {...itemProps}>{name}</Menu.Item>
      }
      return (
        <SubMenu {...itemProps} title={name}>
          {this.renderMenuItems(children)}
        </SubMenu>
      )
    }

    return <Fragment>{routes.map(route => renderMenu(route))}</Fragment>
  }

  handleMenuSelect = ({ item, key, keyPath, selectedKeys, domEvent }) => {
    const { history } = this.props
    key !== history.location.pathname && history.push(key)
  }

  handleOpenKeys = () => {
    const { location } = this.props.history
    const pathArr = location.pathname.split('/')

    switch (pathArr.length) {
      case 2:
        this.setState({
          openKeys: [],
        })
        break
      case 3:
        this.setState({
          openKeys: [pathArr.slice(0, 2).join('/')],
        })
        break
    }
  }

  onOpenChange = (openKeys: string[]) => {
    this.setState({
      openKeys,
    })
  }
}
