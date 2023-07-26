//import global API
import Api from '../../api/api'
const history = {
    namespaced: true,
    state: {
        history: [],
        empty: ''
    },
    mutations: {
        SET_HISTORY(state, history) {
            state.history = history
        },
        SET_EMPTY(state) {
            state.empty = ''
        },
    },
    actions: {
        list({ commit }, data) {
            return new Promise((resolve, reject) => {
                Api.get(`/transaksi/list?search=${data.search}`)
                    .then(response => {
                        commit('SET_HISTORY', response.data.data)
                        resolve(response.data)
                    }).catch(error => {
                        reject(error)
                    })
            })
        },
    },
    getters: {
        getHistory(state) {
            return state.history;
        },
    }

}

export default history