import React, { Component } from 'react'
import { Layout } from 'antd'
import { Redirect, Route, Switch } from 'react-router-dom'
import loadable from '@loadable/component'
import routes from '@/routes'

const { Content } = Layout

const CannotFind = loadable(() => import('../../pages/404'))

export default class LayoutContent extends Component {
  render() {
    return (
      <Content className="app-container">
        <div
          className="site-layout-background"
          style={{ padding: 24, textAlign: 'center' }}
        >
          <Switch>
            {this.renderRoutes()}
            <Redirect exact from="/" to="/home" />
            <Route render={props => <CannotFind {...props} />} />
          </Switch>
        </div>
      </Content>
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
