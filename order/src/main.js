// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import VueRouter from 'vue-router'

import App from './App';
// import router from './router';
import {routes} from './router';
import store from './store'
import axios from 'axios'
import './common/stylus/index.styl'
import './common/stylus/weui.min.css'
import './common/stylus/jquery-weui.min.css'
import './common/stylus/additional.css'
import $ from 'jquery'
import weui from 'jquery-weui/dist/js/jquery-weui'
import swiper from 'jquery-weui/dist/js/swiper'
import citypicker from 'jquery-weui/dist/js/city-picker.min'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(VueRouter)
axios.defaults.baseURL = "/"
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
  mode: 'history',
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)

  // data :{
  //   eventHub: new Vue()
  // },
  // template: '<App/>',
  // components: { App }
});
