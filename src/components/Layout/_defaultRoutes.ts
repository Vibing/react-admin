export default {
  routes: [
    {
      path: '/home',
      name: '首页',
      icon: 'icon-16',
      children: []
    },
    {
      path: '/article',
      name: '文章管理',
      icon: 'icon-lianxi2hebing_shipin',
      children: [
        {
          path: '/article/demopage1',
          name: 'demoPage1',
          icon: null
        }
      ]
    },
    {
      path: '/set',
      name: '视频管理',
      icon: 'icon-lianxi2hebing_shipin',
      children: [
        {
          path: '/set/demopage2',
          name: 'demoPage2',
          icon: null
        },
        {
          path: '/set/demohooks',
          name: 'demohooks',
          icon: null
        }
      ]
    }
  ]
}
