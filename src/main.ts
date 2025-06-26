import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { createI18n } from 'vue-i18n'

// import your locales as plain objects
import en from '@/locales/en.json'
import hr from '@/locales/hr.json'

const i18n = createI18n({
  legacy: false,            // Composition API mode
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en, hr },     // manually supply both
})

createApp(App)
  .use(router)
  .use(i18n)
  .mount('#app')
