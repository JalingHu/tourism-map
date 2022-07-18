import Vue from 'vue'
import App from './App.vue'
import router from './router'
import  './assets/css/global.css'
import Header from '@/components/Header'
import Footer from "@/components/Footer"
import 'element-ui/lib/theme-chalk/index.css';
import { Dialog,Button } from 'element-ui';
Vue.use(Dialog)
Vue.use(Button)
// 全局组件这里一定要给部分组件起名字
Vue.component(Header.name,Header);
Vue.component(Footer.name,Footer);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')








