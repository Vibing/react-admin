import './public/global.less'
import loadable from '@loadable/component'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import routes from './routes'

// 组件按需加载(Code Spliting)
const Layout = loadable(() => import('./components/Layout/Layout'))

const Login = loadable(() => import('./pages/Login'))

import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('uiStore')
@observer
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" render={props => <Login {...props} />} />
          <Route
            path="/"
            render={props => <Layout route={routes} {...props} />}
          />
        </Switch>
      </BrowserRouter>
    )
  }
}
