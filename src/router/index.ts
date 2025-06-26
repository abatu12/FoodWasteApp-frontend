import { createRouter, createWebHistory } from 'vue-router'
import HomePage      from '@/components/HomePage.vue'
import LoginForm     from '@/components/LoginForm.vue'
import RegisterForm  from '@/components/RegisterForm.vue'
import AboutPage     from '@/components/AboutPage.vue'
import ContactPage   from '@/components/ContactPage.vue'
import AllRecipes    from '@/components/AllRecipes.vue'
import ListingsList  from '@/components/ListingsList.vue'
import ListingDetail from '@/components/ListingDetail.vue'
import ListingForm   from '@/components/ListingForm.vue'
import MyClaims      from '@/components/MyClaims.vue'

const routes = [
  { path: '/',           name: 'Home',      component: HomePage },
  { path: '/about',      name: 'About',     component: AboutPage },
  { path: '/contact',    name: 'Contact',   component: ContactPage },
  { path: '/login',      name: 'Login',     component: LoginForm },
  { path: '/register',   name: 'Register',  component: RegisterForm },
  { path: '/recipes',    name: 'Recipes',   component: AllRecipes },
  {
    path: '/listings',
    name: 'ListingsList',
    component: ListingsList,
    meta: { requiresAuth: true },
  },
  {
    path: '/listings/new',
    name: 'ListingCreate',
    component: ListingForm,
    meta: { requiresAuth: true },
  },
  {
    path: '/listings/:id',
    name: 'ListingDetail',
    component: ListingDetail,
    props: true,
    meta: { requiresAuth: true },
  },
  {
    path: '/listings/:id/edit',
    name: 'ListingEdit',
    component: ListingForm,
    props: true,
    meta: { requiresAuth: true },
  },
  {
    path: '/claims',
    name: 'MyClaims',
    component: MyClaims,
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _from, next) => {
  const isLoggedIn = Boolean(localStorage.getItem('accessToken'))
  if (to.meta.requiresAuth && !isLoggedIn) {
    return next({ name: 'Login' })
  }
  next()
})

export default router
