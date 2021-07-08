import React, { Component } from 'react'
import { Result, Button } from 'antd'
import { withRouter } from 'react-router-dom'

@withRouter
export default class FourZeroFour extends Component {
  render() {
    const { history } = this.props
    return (
      <Result
        status="404"
        title="404"
        subTitle="抱歉, 你访问的页面不存在."
        extra={
          <Button type="primary" onClick={() => history.push('/')}>
            返回首页
          </Button>
        }
      />
    )
  }
}
