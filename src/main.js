import Vue from 'vue'
import App from './App.vue'
import '../plugins/element'
import 'font-awesome/scss/font-awesome.scss'
import router from './router'
import AuthService from "@/services/AuthService";

Vue.config.productionTip = false
Vue.prototype.service = AuthService

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
