import axios from '@/api/axios'

const getPod = () => {
  return axios.get(`/health`).then(response => response)
}

export default {
  getPod,
}
