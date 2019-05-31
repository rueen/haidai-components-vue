import countdown from "../doc/countdown.vue"

import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

const routes = [
    {
      path:'/countdown',
      component: countdown
    }
]

export default new VueRouter({
    routes
})
