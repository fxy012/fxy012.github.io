import Vue from 'vue';
import home from '../components/home/home';
import order from '../components/order/order';
import personal from '../components/personal/personal';
import foods from '../components/foods/foods';

import goods from '../components/goods/goods';

export const routes = [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    },
    {
      path: '/foods',
      name: 'foods',
      component: foods
    }
]
