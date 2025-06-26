<template>
  <div class="p-4">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold">Food Listings</h1>
      <button
        @click="goCreate"
        class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        New Listing
      </button>
    </div>

    <div v-if="loading" class="text-center py-10">Loading…</div>

    <ul v-else class="space-y-4">
      <li
        v-for="item in listings"
        :key="item.id"
        class="p-4 border rounded hover:shadow"
      >
        <router-link
          :to="{ name: 'ListingDetail', params: { id: item.id } }"
          class="block space-y-1"
        >
          <div class="font-semibold text-lg">{{ item.title }}</div>
          <div>Qty: {{ item.quantity }}</div>
          <div class="text-sm text-gray-500">
            Expires: {{ formatDate(item.expiresAt) }}
          </div>
        </router-link>
      </li>
    </ul>

    <div v-if="error" class="mt-4 text-red-600">{{ error }}</div>
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
