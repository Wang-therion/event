import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/home' // 重定向到home
    }, {
        path: '/home',
        component: () => import('@/components/Home.vue'),
    }, {
        path: '/login',
        component: () => import('@/components/Login.vue')
    }, {
        path: '/register',
        component: () => import('@/components/Register.vue')
    }, {
        path: '/error',
        component: () => import('@/components/Error.vue')
    }],
    mode: 'history'
})