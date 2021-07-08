import './style.less'
import React, { Component } from 'react'
import { Form, Input, Checkbox, Button } from 'antd'
import { withRouter } from 'react-router-dom'

@withRouter
export default class Login extends Component<any, any> {
  render() {
    return (
      <section className="login-page">
        <section className="top">
          <h1 className="title">Webpack5 + React + antd4 后台管理系统</h1>
          <p className="desc">
            空空如也的后台管理系统，你只需在里面添加页面即可
          </p>
        </section>

        <section className="login-form-wrap">
          <Form
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: '请输入账号!' }]}
            >
              <Input className="ipt" size="large" placeholder="请输入账号" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: '请输入密码!' }]}
            >
              <Input.Password
                className="ipt"
                size="large"
                placeholder="请输入密码"
              />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>记住我</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="submitbtn"
              >
                确定
              </Button>
            </Form.Item>
          </Form>
        </section>
      </section>
    )
  }

  onFinish = (values: any) => {
    console.log('Success:', values)
    const { history } = this.props
    history.push('/')
  }

  onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
}
