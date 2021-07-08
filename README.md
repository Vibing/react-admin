这是一个空的 react + antd 管理后台，只需要开发页面就能让它成为你想要的管理系统

线上地址：https://vibing.github.io/react-admin/index.html

![](https://tva1.sinaimg.cn/large/008i3skNly1gs9d35qq9dj313u0qvteg.jpg)
![](https://tva1.sinaimg.cn/large/008i3skNly1gs9d3p3ljhj313t0qt46x.jpg)

项目地址：https://github.com/Vibing/react-admin 欢迎 Star 和提供更好的建议

## 概述

- 该管理后台基于 webpack5、 react@17、react-router@5.2、typescript、antd@4.10 
- 状态管理使用 [mobx@6.x](https://github.com/mobxjs/mobx)，相比 redux 使用更简单，整个项目使用多 store 进行状态管理更容易维护
- 支持页面刷新后菜单和面包屑自动聚焦
- 使用 [dayjs](https://github.com/iamkun/dayjs) 代替 momentjs
- 支持 Code Splitting(代码分割)、Optional Chaining(可选链)、Nullish Coalescing Operator(控制合并运算符)
- 使用 [DLL](https://webpack.docschina.org/plugins/dll-plugin/) 提取公共库进行缓存 提高项目加载速度
- 使用 [Tree Shaking](https://webpack.docschina.org/guides/tree-shaking/#root) 优化项目，打包时删除没用到的代码
- antd 组件库按需引入

## 项目结构

```
.
├── dll // 生成的DLL
├── node_modules
├── src 
  ├── components // 公用组件
  ├── pages // 用于存放所有页面
  ├── store // 顶级store，项目内任何地方都能访问
  ├── public 
  ├── App.tsx // APP组件
  ├── routes.ts // 路由
  ├── index.tsx // 整个项目的入口
	└── index.ejs // 模板
├── tsconfig.json // typescript配置
├── typings // 自定义类型
├── webpack
├── package.json
└── yarn.lock
```

## 使用

```shell
- git clone https://github.com/Vibing/react-admin.git
- cd react-admin && yarn
- yarn dll
- yarn dev
```

执行上面命令后 打开 http://localhost:3000/#/home 即可访问

## 描述

### 基于 mobx 的多 store 状态管理

项目提供两个顶级 store : ui-store 和 app-store 分别用于项目级别的UI状态控制和逻辑状态控制：

```tsx
// store/index.ts
import uiStore from './ui-store'
import appStore from './app-store'

export { uiStore, appStore }

// index.tsx
class Main extends Component {
  render() {
    return (
      <Provider
        uiStore={uiStore}
        appStore={appStore}
        children={
          <ConfigProvider locale={zhCN}>
            <BaseLayout />
          </ConfigProvider>
        }
      ></Provider>
    )
  }
}
```

你也可有只使用一个顶级 store ，具体看你项目规划和大小

除了顶级 store 用于项目级的状态管理，为了更好的状态维护，我们给每个页面创建一个对应的 store，页面级的 store 里只维护当前页面的状态：

```typescript
// pages/Home/store/index.ts
import { action, configure, makeObservable, observable } from 'mobx'

configure({
  enforceActions: 'observed'
})

export default class Store {
  constructor() {
    makeObservable(this, {
      count: observable,
      changeCount: action
    })
  }

  count: number = 0

  changeCount = (count: number) => {
    this.count = count
  }
}
```



```tsx
// pages/Home/index.tsx
import React from 'react'
import { Provider } from 'mobx-react'
import Content from './components/content'
import Store from './store'

export default class Home extends React.Component {
  store: Store = new Store()

  render() {
    return <Provider store={this.store} children={<Content />} />
  }
}
```

每个页面的 store 在页面被创建时创建，页面组件销毁时自动销毁，不会给内存压力

你可以启动项目，在 home 页面中点击按钮改变 store 的值体验一下

### 菜单数据

目前的菜单数据是模拟的，在 `src/components/Layout/_defaultRoutes.ts`中，实际开发时，这里的数据应该通过接口请求，然后渲染出来，你可以告知服务端小伙伴使用`_defaultRoutes.ts`里的数据格式

## 打包

在项目中运行`yarn build`就可以将项目打包到根目录的`dist`文件夹中，如果想将打包后的项目上传到阿里云OSS，我推荐你使用我编写的 webpack 插件：[webpack-oss-plugin](https://github.com/Vibing/webpack-oss-plugin) 它可以在打包后将打包产物上传到你配置的 OSS 中

## 其他

### webpack 5 新特性

`webpack5` 相较于之前版本，主要以优化为主

- 使用长期缓存，提升构建速度
- 减少原先 bundle 内自动生成的冗余代码
- NodeJS 的 polyfill 脚本被移除
- 更好的 TreeShaking
- Module Federation 让 Webpack 达到了线上 runtime 的效果，让代码直接在独立应用间利用 CDN 直接共享，可以说为微前端提供了一个新思路

关于 `webpack5` 新特性和 `Module Federation`可以看[这篇文章](https://blog.towavephone.com/webpack-v5-new-feature)

总之，随着 webpack 不断更新，它身后的团队肯定是不断对 webpack 进行优化的，我们尽量使用新版本(稳定版)来构建项目

### DLL

将不常改动的库或插件(react、react-dom、axios...)压缩在一个文件里，浏览器访问后缓存下来，以后再访问会快很多。

### 关于 @babel/preset-env

这里我没有使用`useBuiltIns`和`corejs`，因为我公司项目是内部使用，基本都是现代浏览器，不用考虑浏览器兼容问题，如果你需要考虑浏览器兼容 ES6 新语法，请使用`corejs`来作为 polyfill

### typescript

不需要使用`ts-loader`, `babel-loader`已经兼容 typescript 的编译，配合 @babel/preset-typescript 就能使用 typescript 开发。

### 图片、文字

`webpack5` 不需要`url-loader` 等 loader 来解析图片和文字文件了，具体配置看代码吧

### resolve

解析范围尽量缩小 来减少 webpack 搜索范围，比如使用 exclude、include

### 多线程编译打包

nodejs 可以多线程来充分使用 CPU，所以可以使用类似 `thread-loader`的库或插件来进行优化，提高构建效率

### 其他

有些没说，具体看代码吧，有更好的优化请告知我，谢谢





