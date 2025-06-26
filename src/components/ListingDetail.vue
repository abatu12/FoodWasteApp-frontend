<template>
  <div class="p-4 space-y-4">
    <!-- Back button -->
    <button
      @click="router.back()"
      class="text-green-600 hover:underline"
    >
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
