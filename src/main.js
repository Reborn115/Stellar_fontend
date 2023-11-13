import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

import './assets/icon/iconfont.css';

import router from './router';
Vue.use(ElementUI);

import axios from 'axios';

Vue.config.productionTip = false;
import store from './store/index';
new Vue({
    render: (h) => h(App),
    store,
    axios,
    router
}).$mount('#app');
