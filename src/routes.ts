export default [
  {
    path: '/home',
    name: '主页',
    exact: true,
    component: () => import('./pages/Home'),
  },
  {
    path: '/article/demopage1',
    name: '二级页面1',
    exact: true,
    component: () => import('./pages/DemoPage1'),
  },
  {
    path: '/set/demopage2',
    name: '二级页面1',
    exact: true,
    component: () => import('./pages/DemoPage2'),
  },
]
