import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.css'
Vue.config.productionTip = false
//按需引入
import { Button, Select,Input,Form,FormItem } from 'element-ui';

Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
