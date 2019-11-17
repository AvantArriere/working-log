import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/components/Index.vue'
import SignUp from '@/components/auth/SignUp.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: 'http://localhost:8080',
    routes: [
      {
        path: '/',
        name: 'index',
        component: Index
      },
      {
        path: '/signup',
        name: 'signUp',
        component: SignUp
      }
    ]

})