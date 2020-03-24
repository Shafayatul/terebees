import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../Dashboard/Dashboard.vue'
import Profile from '../Dashboard/Profile.vue'
import Admin from '../Dashboard/Admin.vue'
import Articals from '../Dashboard/Articals.vue'
import AskCouch from '../Dashboard/AskCouch.vue'
import Gallery from '../Dashboard/Gallery.vue'
import Training from '../Dashboard/Training'
import Packages from '../Dashboard/Packages.vue'
import NotFound from '../views/NotFound.vue'
import ClassSchedule from '../views/ClassSchedule.vue'
import Clasess from '../views/Clasess.vue'
import ClassDetail from '../views/ClassDetail.vue'
import OurTrainer from '../views/OurTrainer.vue'
import Ask_Trainer from '../views/Ask_Trainer.vue'
// import Gallery from '../views/Gallery.vue'
import BlogList from '../views/BlogList.vue'
import BlogSingle from '../views/BlogSingle.vue'
import Subscribe from '../views/Subscriptions.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import login from '../auth/Login.vue'
import Adminlogin from '../auth/Adminlogin.vue'
import SignupCustomer from '../auth/SignupCustomer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      footerTop: true,
      header: true,
      footer: true,
      requiresVisitor: true,
    }
  },
  {
    path: '',
    name: '',
    redirect: "/dashboard",
    component: Dashboard,
    meta:{footer: false, requiresAuth: true,},    
    children: [       
      { path: '/dashboard', component: Admin, name:' لوحة التحكم',},
      { path: '/dashboard/askCouch', component: AskCouch, name:' إسأل المدرب',},
      { path: '/dashboard/gallery', component: Gallery, name: 'مكتبة الفيديو',},
      { path: '/dashboard/training', component: Training , name:' جداول التدريب ',},
      { path: '/dashboard/packages', component: Packages , name:' الحزم',},
      { path: '/dashboard/articals', component: Articals , name:'المقالات الرياضية', }, 
      { path: '/dashboard/profile', component: Profile , name:'F', },    

      // ...other sub routes
    ],   
  },
  {
    path: '/404',
    component: NotFound,
    name: 'NotFound',
    meta: {
      footerTop: false,
      header:false,
      requiresVisitor: true,
      
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
      header: true,
      footer: true,
      requiresVisitor: true,

    }
  },
  {
    path: '/class-schedule',
    name: 'classSchedule',
    component: ClassSchedule,
    meta: {
      footerTop: false,
      header: true,
      footer: true,
      requiresVisitor: true,
    }
  },
  {
    path: '/clasess',
    name: 'clasess',
    component: Clasess,
    meta: {
      footerTop: false,
      header: true,
      footer: true,
      requiresVisitor: true,
    }
  },
  {
    path: '/class-detail',
    name: 'classDetail',
    component: ClassDetail,
    meta: {
      footerTop: false,
      header: true,
      footer: true,
      requiresVisitor: true,
    }
  },
  {
    path: '/our-trainer',
    name: 'ourTrainer',
    component: OurTrainer,
    meta: {
      footerTop: false,
      header: true,
      footer: true,
      requiresVisitor: true,
    }
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: Gallery,
    meta: {
      footerTop: false,
      header: true,
      requiresVisitor: true,
    }
  },
  {
    path: '/article',
    name: 'blogList',
    component: BlogList,
    meta: {
      footerTop: false,
      header: true,
      footer: true,
      requiresVisitor: true,
    }
  },
  {
    path: '/article/:id',
    name: 'blogSingle',
    component: BlogSingle,
    meta: {
      footerTop: false,
      header: true,
      footer: true,
      requiresVisitor: true,
    }
  },
 
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: {
      footerTop: false,
      header: true,
      footer: true,
      requiresVisitor: true,

    }
  },
  {
    path: '/Ask_Trainer',
    name: 'Ask_Trainer',
    component:Ask_Trainer,
    meta: {
      footerTop: false,
      header: true,
      footer: true,
      requiresVisitor: true,

    }
  },
  { path: '/signup',
    component: SignupCustomer,
    name: 'singup',
    meta: {
      footerTop: false,
      header: true,
      footer: true,
      requiresVisitor: true,

      
    }
   },
  { path: '/subscribe',
    component: Subscribe,
    name: 'Subscribe',
    meta: {
      footerTop: false,
      header: true,
      footer: true
      
    }
   },
   { path: '/login',
    component: login,
    name: 'login',
    meta: {
      footerTop: false,
      header: true,
      footer: true,
      requiresVisitor: true,
      
    }
  },
    { path: '/adminlogin',
    component: Adminlogin,
    name: 'Adminlogin',
    meta: {
      footerTop: false,
      header: false,
      footer: true,
      requiresVisitor: true,
    }
   },
  
  
  { path: '*', redirect: '/' }
  
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//       var user = localStorage.loggedIn;
//       if (!user ) {
//         next({
//           path: '/login',
//         })
//       } else {
//         next()
//       }
//     }else if (to.matched.some(record => record.meta.requiresVisitor)) {
//       if (user) {
//         next({
//           path: '/',
//         })
//       } else {
//         next()
//       }
//     }
// })

export default router
