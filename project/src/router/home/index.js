export default {
  path: '/home',
  component: () => import('@/views/home'),
  children: [
    {
      path: 'nowplaying',
      component: () => import('@/views/home-module/nowplaying')
    },
    {
      path: 'Header',
      component: () => import('@/views/home-module/Header')
    },
    {
      path: 'Swiper',
      component: () => import('@/views/home-module/Swiper')
    },
    {
      path: '/home',
      redirect: '/home/nowplaying'
    }
  ]
}
