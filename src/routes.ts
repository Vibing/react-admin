export default [
  {
    path: '/home',
    name: '主页',
    exact: true,
    component: () => import('./pages/Home'),
  },
  {
    path: '/article/demopage1',
    name: 'demoPage1',
    exact: true,
    component: () => import('./pages/DemoPage1'),
  },
  {
    path: '/set/demopage2',
    name: 'demoPage2',
    exact: true,
    component: () => import('./pages/DemoPage2'),
  },
]
