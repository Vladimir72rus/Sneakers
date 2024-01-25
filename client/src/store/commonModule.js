import axios from 'axios'

export const commonModule = {
  state: () => ({
    listItem: [],
    isLoading: false,
    query: ''
  }),

  mutations: {
    setListItem(state, items) {
      state.listItem = items
    },
    setLoading(state, bool) {
      state.isLoading = bool
    },
    setQueryParams(state, params) {
      const queryParams = params.join()
      const query = params.length ? `?brands=${queryParams}` : ''
      state.query = query
    }
  },

  actions: {
    async fetchSneakers({state, commit}) {
      try {
        commit('setLoading', true)
        const { data } = await axios.get(`http://localhost:5050/sneakers/${state.query}`)
        commit('setListItem', data)
      } catch (e) {
        console.log(e)
      } finally {
        commit('setLoading', false)
      }
    }
  },

  namespaced: true
}