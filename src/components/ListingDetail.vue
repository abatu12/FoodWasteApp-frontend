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
  <div class="p-4 space-y-4">
    <!-- Back button -->
    <button @click="router.back()" class="text-green-600 hover:underline">
      ← Back to listings
    </button>

    <!-- Loading state -->
    <div v-if="loading" class="text-center py-10">Loading…</div>

    <!-- Error state -->
    <div v-else-if="error" class="text-red-600">{{ error }}</div>

    <!-- Actual listing details -->
    <div v-else class="border p-6 rounded shadow">
      <h2 class="text-2xl font-bold mb-2">{{ listing.title }}</h2>
      <p class="mb-2">{{ listing.description }}</p>
      <p class="mb-1">Quantity: {{ listing.quantity }}</p>
      <p class="mb-4 text-gray-600">
        Expires: {{ formatDate(listing.expiresAt) }}
      </p>

      <div class="flex space-x-2">
        <button
          @click="goEdit"
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Edit
        </button>
        <button
          @click="remove"
          class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getListing, deleteListing } from '@/api/listings'
import type { ListingDTO } from '@/types'

export default defineComponent({
  name: 'ListingDetail',
  setup() {
    const route   = useRoute()
    const router  = useRouter()
    const id      = Number(route.params.id)
    const listing = ref<ListingDTO | null>(null)
    const loading = ref(true)
    const error   = ref<string | null>(null)

    const fetchListing = async () => {
      loading.value = true
      try {
        listing.value = await getListing(id)
      } catch (e: any) {
        error.value = e.response?.data?.message || 'Cannot load this listing'
      } finally {
        loading.value = false
      }
    }

    const goEdit = () => {
      router.push({ name: 'ListingEdit', params: { id } })
    }

    const remove = async () => {
      if (!confirm('Delete this listing?')) return
      try {
        await deleteListing(id)
        router.push({ name: 'ListingsList' })
      } catch {
        error.value = 'Failed to delete'
      }
    }

    const formatDate = (iso: string) =>
      new Date(iso).toLocaleString()

    onMounted(fetchListing)

    return { listing, loading, error, goEdit, remove, router, formatDate }
  },
})
</script>
<style scoped>
/* padding + vertikalni razmak */
.p-4             { padding:      1rem; }
.space-y-4 > * + * { margin-top:   1rem; }

/* back-button */
.text-green-600    { color:        #16a34a; }
.hover\:underline:hover { text-decoration: underline; }

/* loading / error */
.text-center       { text-align:   center; }
.py-10             { padding-top: 2.5rem; padding-bottom: 2.5rem; }
.text-red-600      { color:        #e53e3e; }

/* detail card */
.border            { border:       1px solid #e2e8f0; }
.p-6               { padding:      1.5rem; }
.rounded           { border-radius:8px; }
.shadow            { box-shadow:   0 2px 4px rgba(0,0,0,0.05); }

/* naslovi i tekstovi */
.text-2xl          { font-size:    1.5rem; }
.font-bold         { font-weight:  700; }
.mb-2              { margin-bottom:0.5rem; }
.mb-1              { margin-bottom:0.25rem; }
.mb-4              { margin-bottom:1rem; }
.text-gray-600     { color:        #718096; }

/* layout flex + razmak između gumba */
.flex              { display:      flex; }
.space-x-2 > * + * { margin-left:  0.5rem; }

/* button styling */
.px-4              { padding-left: 1rem; padding-right: 1rem; }
.py-2              { padding-top:  0.5rem; padding-bottom:0.5rem; }
.text-white        { color:        #fff; }
.rounded           { border-radius:4px; }

/* plavi Edit */
.bg-blue-500       { background-color: #3b82f6; }
.hover\:bg-blue-600:hover { background-color: #2563eb; }

/* crveni Delete */
.bg-red-500        { background-color: #ef4444; }
.hover\:bg-red-600:hover  { background-color: #dc2626; }
</style>
