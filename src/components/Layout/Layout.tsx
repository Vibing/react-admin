import './sty.less'
import React, { Component } from 'react'
import { Layout } from 'antd'
import { withRouter, Route } from 'react-router-dom'
import loadable from '@loadable/component'
import SlideMenu from './SlideMenu'
import LayoutHeader from './Header'
import LayoutContent from './Content'
import Breadcrumb from './Breadcrumb'

@withRouter
export default class BaseLayout extends Component {
  props: { route: any; iconfontUrl: string; children: any; history: any }
  state: { pathname: string }

  constructor(props) {
    super(props)
    this.state = {
      pathname: '/home',
    }
  }

  render() {
    const { pathname } = this.state

    return (
      <Layout className="app-layout">
        <SlideMenu />
        <Layout className="site-layout">
          <LayoutHeader />
          <Breadcrumb />
          <LayoutContent />
        </Layout>
      </Layout>
    )
  }

  renderRoutes = () => {
    return (routes || []).map((route, idx) => {
      if (route.component) {
        return (
          <Route
            key={idx}
            path={route.path}
            exact={route.exact}
            name={route.name}
            render={props => {
              const CurrComponent = loadable(route.component)
              return <CurrComponent {...props} />
            }}
          />
        )
      }
    })
  }
}
