## Webpack 5 新特性

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
