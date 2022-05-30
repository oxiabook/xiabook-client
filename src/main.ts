import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
import axios from "axios"; //引入axios
import VueAxios from "vue-axios"; // 引入vue-axios
Vue.use(VueAxios, axios); //使用
Vue.config.productionTip = false;
Vue.use(ViewUI);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
