import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import '@/assets/less/reset.less'
import '@/assets/less/style.less'
import '@/iconfont/iconfont.css'
import 'lib-flexible' 
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant)
Vue.config.productionTip = false;



new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
