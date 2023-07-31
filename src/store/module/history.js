//import global API
import Api from '../../api/api'
const history = {
    namespaced: true,
    state: {
        history: [],
        detail: {},
        empty: ''
    },
    mutations: {
        SET_DETAIL(state, history) {
            state.detail = history
        },
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
                        commit('SET_HISTORY', response.data)
                        resolve(response.data)
                    }).catch(error => {
                        reject(error)
                    })
            })
        },
        detail({ commit }, data) {
            return new Promise((resolve, reject) => {
                Api.get(`/transaksi/detail?id_order=${data.id}`)
                    .then(response => {
                        console.log(response.data)
                        commit('SET_DETAIL', response.data)
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
        getDetail(state) {
            return state.detail;
        },
    }

}

export default history