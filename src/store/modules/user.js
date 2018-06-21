/* eslint-disable */
import apiUser from '../../api/user'
// import localUser from '../../local/user'

const state = {
    proxyUserToken: null, // 用户唯一标识
    proxyUserInfo: {}, // 用户信息
    proxyUserApp: {}, // 用户app

}

const getters = {

}

const mutations = {
    // 用户唯一标识
    proxyUserToken(state, _str) {
        state.proxyUserToken = _str
            // localUser.proxyUserToken(_str) // 存储唯一标识
    },
    proxyUserInfo(state, _str) {
        state.proxyUserInfo = _str
    },
    proxyUserApp(state, _str) {
        state.proxyUserApp = _str
    }
}

const actions = {

    /**
     * 初始化 jwt
     * @param {*} param0
     * @param {*} _str
     */
    initJWT({
        commit
    }) {
        let loc_jwt = localUser.jwt()
        if (loc_jwt) commit('jwt', loc_jwt) // ls转vuex
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}