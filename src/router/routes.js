import { Cookies } from 'quasar'

const routes = [
  {
    name: 'main',
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect: {name: 'deliveryIndex'} },
      { name: 'deliveryIndex', path: 'delivery', component: () => import('pages/DeliveryIndex.vue') },
      { name: 'directIndex', path: 'direct', component: () => import('pages/DirectIndex.vue') },
    ]
  },
  {
    name: 'delivery',
    path: '/delivery',
    component: () => import('layouts/DeliveryListLayout.vue'),
    children: [
      { name: 'deliveryList', path: ':category', component: () => import('pages/DeliveryList.vue') },
    ]
  },
  {
    name: 'direct',
    path: '/direct',
    component: () => import('layouts/DirectListLayout.vue'),
    children: [
      { name: 'directList', path: ':category', component: () => import('pages/DirectList.vue') },
    ]
  },
  {
    name: 'product',
    path: '/product',
    component: () => import('layouts/ProductLayout.vue'),
    children: [
      { name: 'productDetail', path: ':id', component: () => import('pages/ProductDetail.vue') },
    ]
  },
  {
    name: 'tab',
    path: '/tab',
    component: () => import('layouts/BackFooterLayout.vue'),
    children: [
      { name: 'addressSet', path: 'address', component: () => import('pages/AddressSet.vue')},
      { name: 'my', path: 'my', component: () => import('pages/MyInfo.vue'),
        // beforeEnter: (to, from, next) => {
        //   if (!Cookies.has('role')) {
        //     next({name: 'login'})
        //   } else {
        //     next()
        //   }
        // }
      },
    ]
  },
  {
    name: 'auth',
    path: '/auth',
    component: () => import('layouts/FullLayout.vue'),
    children: [
      { name: 'login', path: 'login', component: () => import('pages/Login.vue') },
      { name: 'join', path: 'join', component: () => import('pages/Join.vue') },
      { path: 'kakao/callback', component: () => import('pages/KakaoCallback.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  }
]

export default routes
