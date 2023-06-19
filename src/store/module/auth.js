//import global API
import Api from '../../api/api'
const auth = {
    namespaced: true,
    state: {
        token: localStorage.getItem('tokenfepos_') || '',
        user: JSON.parse(localStorage.getItem('userfepos_')) || {},
        empty: ''
    },
    mutations: {
        AUTH_SUCCESS(state, token, user) {
            state.token = token
            state.user = user
        },
        AUTH_EMPTY(state) {
            state.empty = ''
        },
    },
    actions: {
        login({ commit }, user) {
            return new Promise((resolve, reject) => {
                Api.post('login', user)
                    .then(response => {
                        const token = response.data.token_user
                        const user = response.data

                        localStorage.setItem('tokenfe_', token)
                        localStorage.setItem('userfe_', JSON.stringify(user))

                        Api.defaults.headers.common['Authorization'] = `Bearer ${token}`
                        commit('AUTH_SUCCESS', token, user)
                        resolve(response)
                    }).catch(error => {
                        reject(error)

                    })
            })
        }
    },
    getters: {
        user(state) {
            return state.toko;
        },
    }

}

export default auth