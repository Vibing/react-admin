import React, { Component } from 'react'
import { Breadcrumb } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import { nanoid } from 'nanoid'
import menuData from './_defaultRoutes'

@withRouter
export default class LayoutBreadcrumb extends Component {
  unHistoryListener: any

  state = {
    breadcrumbs: []
  }

  componentDidMount() {
    const { history } = this.props
    const breadcrumbs = this.setBreadcrumb()

    this.setState({
      breadcrumbs
    })
    this.unHistoryListener = history.listen((i, a) => {
      const breadcrumbs = this.setBreadcrumb()

      this.setState({
        breadcrumbs
      })
    })
  }

  componentWillUnmount() {
    this.unHistoryListener()
  }

  render() {
    const { breadcrumbs } = this.state

    return (
      <Breadcrumb style={{ margin: '5px 24px' }}>
        {breadcrumbs.map(b => (
          <Breadcrumb.Item key={nanoid()}>
            {b?.children?.length ? (
              b.name
            ) : (
              <Link to={b.path} key={nanoid()}>
                {b.name}
              </Link>
            )}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    )
  }

  setBreadcrumb = () => {
    const { location } = this.props.history
    const pathArr = location.pathname.split('/')
    const breadcrumbArr = []

    if (pathArr.length > 1) {
      menuData.routes.forEach(route => {
        if (location.pathname.startsWith(route.path)) {
          breadcrumbArr.push(route)
          if (route?.children?.length) {
            route.children.forEach(cRoute => {
              if (location.pathname.startsWith(cRoute.path)) {
                breadcrumbArr.push(cRoute)
              }
            })
          }
        }
      })
    }
    return breadcrumbArr
  }
}
