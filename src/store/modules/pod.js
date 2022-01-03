import podApi from '@/api/pod'

const state = {
  data: null,
  isLoading: false,
  error: null
}

export const mutationTypes = {
  getPodStart: '[pod] Get pod start',
  getPodSuccess: '[pod] Get pod success',
  getPodFailure: '[pod] Get pod failure',
}

export const actionTypes = {
  getPod: '[pod] Get pod',
}

const mutations = {
  [mutationTypes.getPodStart](state) {
    state.isLoading = true
    state.data = null
  },
  [mutationTypes.getPodSuccess](state, payload) {
    state.isLoading = false
    state.data = payload
  },
  [mutationTypes.getPodFailure](state) {
    state.isLoading = false
  },
}

const actions = {
  [actionTypes.getPod](context) {
    return new Promise(resolve => {
      context.commit(mutationTypes.getPodStart)
      podApi
        .getPod()
        .then(res => {
          context.commit(mutationTypes.getPodSuccess, res.data.status)
          resolve(res)
        })
        .catch(() => {
          context.commit(mutationTypes.getPodFailure)
        })
    })
  },
}

export default {
  state,
  actions,
  mutations
}
