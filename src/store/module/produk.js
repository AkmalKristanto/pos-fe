//import global API
import Api from '../../api/api'
const produk = {
    namespaced: true,
    state: {
        produk: [],
        empty: ''
    },
    mutations: {
        SET_EMPTY(state) {
            state.empty = ''
        },
        SET_PRODUK(state, produk) {
            state.produk = produk
        },
    },
    actions: {
        produk({ commit }) {
            return new Promise((resolve, reject) => {
                Api.get('/produk/list')
                    .then(response => {
                        commit('SET_PRODUK', response.data.data)
                        resolve(response)
                    }).catch(error => {
                        reject(error)
                    })
            })
        },
        tambahProduk({ commit }, data) {
            return new Promise((resolve, reject) => {
                Api.post('/produk/create', data)
                    .then(response => {
                        commit('SET_EMPTY', '')
                        resolve(response)
                    }).catch(error => {
                        reject(error)
                    })
            })
        }
    },
    getters: {
        getProduk(state) {
            return state.produk;
        },
    }

}

export default produk