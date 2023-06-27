//import global API
import Api from '../../api/api'
const menu = {
    namespaced: true,
    state: {
        menu: [],
        detailProduk: {},
        empty: ''
    },
    mutations: {
        SET_EMPTY(state) {
            state.empty = ''
        },
        SET_MENU(state, menu) {
            state.menu = menu
        },
        SET_DETAIL_PRODUK(state, detailProduk) {
            state.detailProduk = detailProduk
        },
    },
    actions: {
        daftarMenu({ commit }, data) {
            return new Promise((resolve, reject) => {
                Api.get(`/menu/list?search=${data.search}`)
                    .then(response => {
                        commit('SET_MENU', response.data.data)
                        resolve(response)
                    }).catch(error => {
                        reject(error)
                    })
            })
        },
        detailProduk({ commit }, data) {
            return new Promise((resolve, reject) => {
                Api.get(`/menu/detail?id_produk=${data.id}`)
                    .then(response => {
                        console.log(response.data)
                        commit('SET_DETAIL_PRODUK', response.data)
                        resolve(response.data)
                    }).catch(error => {
                        reject(error)
                    })
            })
        },
    },
    getters: {
        getMenu(state) {
            return state.menu;
        },
        getDetailProduk(state) {
            return state.detailProduk;
        },
    }

}

export default menu