export default {
  routes: [
    {
      path: '/home',
      name: '主页',
      icon: 'icon-tongji',
      children: [],
    },
    {
      path: '/article',
      name: '一级菜单',
      icon: 'icon-tixian1',
      children: [
        {
          path: '/article/demopage1',
          name: 'demoPage1',
          icon: null,
        },
      ],
    },
    {
      path: '/set',
      name: '一级菜单',
      icon: 'icon-renwuguanli1',
      children: [
        {
          path: '/set/demopage2',
          name: 'demoPage2',
          icon: null,
        },
      ],
    },
  ],
}
