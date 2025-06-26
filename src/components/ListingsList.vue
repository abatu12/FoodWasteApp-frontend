<template>
    <header class="navbar">
      <div class="navbar__inner container">
        <div class="text-2xl font-bold">FoodWasteApp</div>
        <nav>
          <router-link to="/"       class="navbar__link">Home</router-link>
          <router-link to="/about"  class="navbar__link">About</router-link>
          <router-link to="/contact" class="navbar__link">Contact</router-link>
          <router-link to="/login"   class="navbar__btn">Login</router-link>
          <router-link to="/register" class="navbar__btn">Sign Up</router-link>
        </nav>
      </div>
    </header>
  <div class="listings-page">
    <div class="listings-header">
      <h1>Food Listings</h1>
      <button @click="goCreate" class="btn-new">New Listing</button>
    </div>

    <div v-if="loading" class="loading">Loading…</div>

    <div v-else-if="error" class="error">{{ error }}</div>

    <ul v-else class="listings-grid">
      <li
        v-for="item in listings"
        :key="item.id"
        class="listing-card"
      >
        <router-link
          :to="{ name: 'ListingDetail', params: { id: item.id } }"
          class="card-link"
        >
          <h2 class="card-title">{{ item.title }}</h2>
          <p class="card-qty">Qty: {{ item.quantity }}</p>
          <p class="card-expires">Expires: {{ formatDate(item.expiresAt) }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>


<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { getListings } from '@/api/listings'
import type { ListingDTO } from '@/types'

export default defineComponent({
  setup() {
    const listings = ref<ListingDTO[]>([])
    const loading  = ref(true)
    const error    = ref<string | null>(null)
    const router   = useRouter()

    const fetchListings = async () => {
      loading.value = true; error.value = null
      try {
        listings.value = await getListings()
      } catch (e: any) {
        error.value = e.response?.data?.message || e.message
      } finally {
        loading.value = false
      }
    }

    const goCreate = () => {
      router.push({ name: 'ListingCreate' })
    }

    const formatDate = (iso: string) =>
      new Date(iso).toLocaleString()

    onMounted(fetchListings)
    return { listings, loading, error, goCreate, formatDate }
  },
})
</script>
<style scoped>
/* Container */
.listings-page {
  max-width: 1100px;
  margin: 2rem auto;
  padding: 0 1rem;
  font-family: Arial, sans-serif;
}

/* Header */
.listings-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}
.listings-header h1 {
  font-size: 1.75rem;
  margin: 0;
}
.btn-new {
  background-color: #22c55e;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}
.btn-new:hover {
  background-color: #16a34a;
}

/* Loading & Error */
.loading {
  text-align: center;
  font-size: 1.2rem;
  padding: 2rem 0;
}
.error {
  text-align: center;
  color: #e53e3e;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

/* Grid layout */
.listings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Kartica */
.listing-card {
  background-color: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
}
.listing-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
}

/* Link wrapper unutar kartice */
.card-link {
  display: block;
  padding: 1rem;
  color: inherit;
  text-decoration: none;
}

/* Naslov i meta */
.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
}
.card-qty {
  margin: 0 0 0.25rem;
}
.card-expires {
  font-size: 0.875rem;
  color: #718096;
  margin: 0;
}
</style>