import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Skills from '../views/skills.vue'
import Portfolio from '../views/portfolio.vue'
import Services from '../views/services.vue'
import Contact from '../views/contact.vue'

import logosComp from '../components/logos.vue'
import WepApps from '../components/WebApps.vue'
Vue.use(VueRouter)

  const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/skills', name: 'Skills', component: Skills },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio, 
    children: [
      {path: '/', component: logosComp},
      {path: 'logos', component: logosComp, name: 'portfolio.logos'},
      {path: 'apps', component: WepApps, name: 'portfolio.apps'}
    ]
  },
  { path: '/services', name: 'Services', component: Services },
  { path: '/contact', name: 'Contact', component: Contact },
]

const router = new VueRouter({
  mode : 'history',
  routes
})

export default router
