import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api',
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
})

api.interceptors.request.use(config => {
  const token = localStorage.getItem('accessToken')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

api.interceptors.response.use(
  res => res,
  async err => {
    const origReq = err.config
    const status = err.response?.status

    if ((status === 401 || status === 403) && !origReq._retry) {
      origReq._retry = true
      try {
        const refreshToken = localStorage.getItem('refreshToken')
        const r = await axios.post(
          (import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080') + '/api/auth/refresh',
          { refreshToken },
          { withCredentials: true }
        )
        const newAccess = r.data.accessToken
        localStorage.setItem('accessToken', newAccess)
        origReq.headers.Authorization = `Bearer ${newAccess}`
        return api(origReq)
      } catch (refreshErr) {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        window.location.href = '/login'
        return Promise.reject(refreshErr)
      }
    }

    return Promise.reject(err)
  }
)

export default api
