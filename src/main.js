// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.config.productionTip = false

const Home = App.components.Home
const Notice = App.components.Notice
const About = App.components.About
const Story = App.components.Story
const Faq = App.components.Faq
const Recruit = App.components.Recruit

const routes = [
  {path: '/', component : Home},
  {path: '/notice', component : Notice},
  {path: '/about', component : About},
  {path: '/story', component : Story},
  {path: '/faq', component : Faq},
  {path: '/recruit', component : Recruit}
]
const router = new VueRouter({
  mode : 'history',
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
