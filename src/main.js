import Vue from 'vue'
import App from './app'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/index'
import Vuex from 'vuex'
import './config/rem'
import './config/http'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            if (from.meta.keepAlive) {
                from.meta.savedPosition = document.body.scrollTop;
            }
            return {
                x: 0,
                y: to.meta.savedPosition || 0
            }
        }
    }
})

new Vue({
    router,
    store
}).$mount('#app')