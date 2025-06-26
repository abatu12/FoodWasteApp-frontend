<template>
  <div class="auth-container">
    <div class="auth-panel">
      <div class="auth-panel__inner">
        <h2 class="auth-panel__title">Sign in to</h2>
        <p class="auth-panel__desc">Lorem ipsum is simply dummy text of the printing.</p>
        <p class="text-sm">
          If you don’t have an account you can
          <router-link to="/register" class="auth-panel__link ml-1">
            Register here!
          </router-link>
        </p>
        <div class="auth-panel__socials">
          <button class="auth-social-btn social-btn-facebook">
            <i class="fab fa-facebook-f"></i>
          </button>
          <button class="auth-social-btn social-btn-github">
            <i class="fab fa-github"></i>
          </button>
          <button class="auth-social-btn social-btn-google">
            <i class="fab fa-google"></i>
          </button>
        </div>
      </div>
    </div>

    <div class="auth-form-panel">
      <form @submit.prevent="handleLogin" class="auth-form">
        <h3 class="auth-form__heading">Sign in</h3>
        <input
          v-model="username"
          type="text"
          placeholder="Enter email or user name"
          class="auth-input"
          required
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="auth-input"
          required
        />
        <button type="submit" class="auth-btn">Login</button>
        <p v-if="error" class="auth-error">{{ error }}</p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '@/api/axios'

const username = ref('')
const password = ref('')
const error    = ref('')
const router   = useRouter()

async function handleLogin() {
  error.value = ''
  try {
    const { data } = await api.post('/api/auth/login', {
      username: username.value,
      password: password.value,
    })
    localStorage.setItem('accessToken', data.accessToken)
    localStorage.setItem('refreshToken', data.refreshToken)
    router.push('/')
  } catch (e: any) {
    error.value = e.response?.data?.message || 'Login failed'
  }
}
</script>

