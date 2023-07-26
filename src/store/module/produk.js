//import global API
import Api from '../../api/api'
const produk = {
    namespaced: true,
    state: {
        produk: [],
        detail: {},
        detail_addon: [],
        detail_variant: [],
        empty: ''
    },
    mutations: {
        SET_EMPTY(state) {
            state.empty = ''
        },
        SET_PRODUK(state, produk) {
            state.produk = produk
        },
        SET_PRODUK_DETAIL(state, produk) {
            state.detail = produk
            var temp = []
            produk.add_on.forEach(el => {
                let data = {
                    label: el.nama,
                    value: el.id_add_on
                }

                temp.push(data)
            });
            state.detail_addon = temp
            console.log(state.detail_addon)
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
        detail({ commit }, data) {
            return new Promise((resolve, reject) => {
                Api.get(`/produk/detail?id_produk=${data.id_produk}`)
                    .then(response => {
                        commit('SET_PRODUK_DETAIL', response.data)
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
        },
        delete({ commit }, data) {
            return new Promise((resolve, reject) => {
                Api.post('/produk/delete', data)
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
        getProdukDetail(state) {
            return state.detail;
        },
        getDetailAddon(state) {
            return state.detail_addon;
        },
    }

}

export default produk