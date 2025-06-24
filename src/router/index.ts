import { createRouter, createWebHistory } from 'vue-router'
import HomePage      from '@/components/HomePage.vue'
import LoginForm     from '@/components/LoginForm.vue'
import RegisterForm  from '@/components/RegisterForm.vue'
import AboutPage     from '@/components/AboutPage.vue' 
import ContactPage   from '@/components/ContactPage.vue' 

const routes = [
  { path: '/',         component: HomePage },
  { path: '/about',    component: AboutPage },
  { path: '/contact',  component: ContactPage },
  { path: '/login',    component: LoginForm },
  { path: '/register', component: RegisterForm },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
