<template>
  <header class="navbar">
    <div class="navbar__inner container">
      <div class="text-2xl font-bold">FoodWasteApp</div>
      <nav>
        <router-link to="/"       class="navbar__link">Home</router-link>
        <router-link to="/about"  class="navbar__link">About</router-link>
        <router-link to="/contact"class="navbar__link">Contact</router-link>
        <router-link to="/login"   class="navbar__btn">Login</router-link>
        <router-link to="/register"class="navbar__btn">Sign Up</router-link>
      </nav>
    </div>
  </header>

  <div class="container" style="padding: 4rem 0;">
    <h1 class="text-center text-2xl font-extrabold mb-4">
      Check out our newest leftover-based recipes!
    </h1>
    <p class="text-center text-gray-600 mb-8">
      Discover creative, simple ways to turn your leftovers into tasty meals
    </p><br>

    <div v-if="recipes.length" class="recipes-grid">
      <div v-for="r in recipes" :key="r.id" class="recipe-card">
        <img :src="r.image || '/images/placeholder.jpg'" alt="Recipe image" />
        <div class="recipe-info">
          <h2>{{ r.title }}</h2>
          <p><strong>Opis:</strong> {{ r.description }}</p>
          <p><strong>Sastojci:</strong> {{ r.ingredients }}</p>
          <p>
            <strong>Koraci:</strong><br />
            <span v-html="formatSteps(r.steps)"></span>
          </p>
          <p><em>Datum: {{ formatDate(r.createdAt) }}</em></p>
        </div>
      </div>
    </div>

    <div v-else class="no-recipes text-center text-gray-500">
      Trenutno nema recepata.
    </div>
  </div>

  <footer class="site-footer">
    <p class="text-center">&copy; 2025 Food Sharing Project. All rights reserved.</p>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '@/api/axios'
import { useRouter } from 'vue-router'

const recipes = ref([])
const router  = useRouter()

onMounted(async () => {
  const token = localStorage.getItem('accessToken')
  if (!token) {
    alert('Morate biti prijavljeni kako biste vidjeli recepte.')
    router.push('/login')
    return
  }

  try {
    const { data } = await api.get('/recipes')
    recipes.value = data
  } catch (err) {
    console.error('Greška pri dohvaćanju recepata:', err)
  }
})

/**
 * Zamijeni sve nove linije u tekstu s <br> oznakama
 */
function formatSteps(steps = '') {
  return steps
    .split('\n')
    .map(line => line.trim())
    .filter(line => line)
    .join('<br>')
}

/**
 * Pretvori ISO date string (ili Date) u čitljiv format dd. mm. yyyy.
 */
function formatDate(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('hr-HR', {
    day:   '2-digit',
    month: '2-digit',
    year:  'numeric',
  })
}
</script>

<style scoped>
/* Tvoj postojeći scoped stil (ili možeš ostaviti prazno) */
</style>
