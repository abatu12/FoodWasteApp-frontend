<template>
  <div class="p-4 max-w-lg mx-auto">
    <h1 class="text-2xl font-bold mb-4">
      {{ isEdit ? 'Edit Listing' : 'New Listing' }}
    </h1>

    <form @submit.prevent="submit" class="space-y-4">
      <!-- Title -->
      <div>
        <label class="block mb-1 font-medium">Title</label>
        <input
          v-model="form.title"
          type="text"
          required
          class="w-full border rounded px-3 py-2"
        />
      </div>

      <!-- Description -->
      <div>
        <label class="block mb-1 font-medium">Description</label>
        <textarea
          v-model="form.description"
          required
          rows="4"
          class="w-full border rounded px-3 py-2"
        ></textarea>
      </div>

      <!-- Quantity & Expires At -->
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block mb-1 font-medium">Quantity</label>
          <input
            v-model.number="form.quantity"
            type="number"
            min="1"
            required
            class="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label class="block mb-1 font-medium">Expires At</label>
          <input
            v-model="form.expiresAt"
            type="datetime-local"
            required
            class="w-full border rounded px-3 py-2"
          />
        </div>
      </div>

      <!-- Buttons -->
      <div class="flex space-x-2">
        <button
          type="submit"
          class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          {{ isEdit ? 'Save Changes' : 'Create Listing' }}
        </button>
        <button
          type="button"
          @click="cancel"
          class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
      </div>

      <!-- Error -->
      <div v-if="error" class="mt-2 text-red-600">{{ error }}</div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  createListing,
  getListing,
  updateListing
} from '@/api/listings'
import type { ListingDTO } from '@/types'

export default defineComponent({
  name: 'ListingForm',
  setup() {
    const route  = useRoute()
    const router = useRouter()
    const idParam = route.params.id as string | undefined
    const isEdit = Boolean(idParam)

    // reactive form model
    const form = reactive<ListingDTO>({
      title: '',
      description: '',
      quantity: 1,
      expiresAt: new Date().toISOString().slice(0,16)
    })

    const error = ref<string | null>(null)

    // if editing, load existing
    const load = async () => {
      if (isEdit && idParam) {
        try {
          const data = await getListing(Number(idParam))
          form.title       = data.title
          form.description = data.description
          form.quantity    = data.quantity
          // slice to fit datetime-local input
          form.expiresAt   = data.expiresAt.slice(0,16)
        } catch {
          error.value = 'Failed to load listing'
        }
      }
    }

    // submit handler
    const submit = async () => {
      error.value = null
      try {
        if (isEdit && idParam) {
          await updateListing(Number(idParam), form)
        } else {
          await createListing(form)
        }
        router.push({ name: 'ListingsList' })
      } catch (e: any) {
        error.value = e.response?.data?.message || 'Save failed'
      }
    }

    const cancel = () => {
      router.back()
    }

    onMounted(load)

    return { form, isEdit, submit, cancel, error }
  }
})
</script>
