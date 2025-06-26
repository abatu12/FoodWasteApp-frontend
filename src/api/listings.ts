import api from './axios'
import type { ListingDTO } from '@/types'

const BASE = '/listings'

export const getListings = (): Promise<ListingDTO[]> =>
  api.get(BASE).then(res => res.data)

export const getListing = (id: number): Promise<ListingDTO> =>
  api.get(`${BASE}/${id}`).then(res => res.data)

export const createListing = (payload: ListingDTO): Promise<ListingDTO> =>
  api.post(BASE, payload).then(res => res.data)

export const updateListing = (id: number, payload: ListingDTO): Promise<ListingDTO> =>
  api.put(`${BASE}/${id}`, payload).then(res => res.data)

export const deleteListing = (id: number): Promise<void> =>
  api.delete(`${BASE}/${id}`).then(res => res.data)
