<template>
  <div class="auth-container">
    <!-- Marketing panel -->
    <div class="auth-panel">
      <div class="auth-panel__inner">
        <h2 class="auth-panel__title">Sign Up to</h2>
        <p class="auth-panel__desc">Lorem ipsum is simply dummy text of the printing.</p>
        <p class="text-sm">
          If you already have an account you can
          <router-link to="/login" class="auth-panel__link ml-1">
            Login here!
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

    <!-- Form panel -->
    <div class="auth-form-panel">
      <form @submit.prevent="handleRegister" class="auth-form">
        <h3 class="auth-form__heading">Sign Up</h3>
        <input
          v-model="email"
          type="email"
          placeholder="Enter Email"
          class="auth-input"
          required
        />
        <input
          v-model="username"
          type="text"
          placeholder="Create User name"
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
        <input
          v-model="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          class="auth-input"
          required
        />
        <button type="submit" class="auth-btn">Register</button>
        <p v-if="error"   class="auth-error">{{ error }}</p>
        <p v-if="message" class="auth-message">{{ message }}</p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '@/api/axios'

const email           = ref('')
const username        = ref('')
const password        = ref('')
const confirmPassword = ref('')
const message         = ref('')
const error           = ref('')
const router          = useRouter()

async function handleRegister() {
  message.value = ''
  error.value   = ''
  if (password.value !== confirmPassword.value) {
    error.value = 'Passwords do not match'
    return
  }
  try {
    const { data } = await api.post('/api/auth/register', {
      username: username.value,
      email:    email.value,
      password: password.value,
    })
    message.value = data.message || 'Registered successfully!'
    setTimeout(() => router.push('/login'), 1500)
  } catch (e: any) {
    error.value = e.response?.data?.message || 'Registration failed'
  }
}
</script>
