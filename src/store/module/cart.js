//import global API
import Api from '../../api/api'
const cart = {
    namespaced: true,
    state: {
        empty: ''
    },
    mutations: {
        SET_EMPTY(state) {
            state.empty = ''
        },
    },
    actions: {
        create_transaksi({ commit }, data) {
            return new Promise((resolve, reject) => {
                Api.post(`/transaksi/create`, data)
                    .then(response => {
                        commit('SET_EMPTY', '')
                        resolve(response)
                    }).catch(error => {
                        reject(error)
                    })
            })
        },
    },
    getters: {
    }

}

export default cart