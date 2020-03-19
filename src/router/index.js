import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import ClassSchedule from '../views/ClassSchedule.vue'
import Clasess from '../views/Clasess.vue'
import ClassDetail from '../views/ClassDetail.vue'
import OurTrainer from '../views/OurTrainer.vue'
import Ask_Trainer from '../views/Ask_Trainer.vue'
import Gallery from '../views/Gallery.vue'
import BlogList from '../views/BlogList.vue'
import BlogSingle from '../views/BlogSingle.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import login from '../auth/Login.vue'
import SignupCustomer from '../auth/SignupCustomer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      footerTop: true,
      header: true
    }
  },
  {
    path: '/404',
    component: NotFound,
    name: 'NotFound',
    meta: {
      footerTop: false,
      header:false,
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
    meta: {
      footerTop: false,
      header: true
    }
  },
  {
    path: '/class-schedule',
    name: 'classSchedule',
    component: ClassSchedule,
    meta: {
      footerTop: false,
      header: true
    }
  },
  {
    path: '/clasess',
    name: 'clasess',
    component: Clasess,
    meta: {
      footerTop: false,
      header: true
    }
  },
  {
    path: '/class-detail',
    name: 'classDetail',
    component: ClassDetail,
    meta: {
      footerTop: false,
      header: true
    }
  },
  {
    path: '/our-trainer',
    name: 'ourTrainer',
    component: OurTrainer,
    meta: {
      footerTop: false,
      header: true
    }
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: Gallery,
    meta: {
      footerTop: false,
      header: true
    }
  },
  {
    path: '/blog-list',
    name: 'blogList',
    component: BlogList,
    meta: {
      footerTop: false,
      header: true
    }
  },
  {
    path: '/blog-single',
    name: 'blogSingle',
    component: BlogSingle,
    meta: {
      footerTop: false,
      header: true
    }
  },
 
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: {
      footerTop: false,
      header: true
    }
  },
  {
    path: '/Ask_Trainer',
    name: 'Ask_Trainer',
    component:Ask_Trainer,
    meta: {
      footerTop: false,
      header: true
    }
  },
  { path: '/login',
    component: login,
    name: 'login',
    meta: {
      footerTop: false,
      header: true
    }
   },
  { path: '/signup',
   component:SignupCustomer,
    meta: {
    footerTop: false,
    header: true
    }
  },
  { path: '*', redirect: '/' }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
