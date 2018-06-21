/* eslint-disable */
const state = {
    loginStep: 1, // 登录步骤， 0 --> register, 1--> login, 2 --> forgot
    weChatBind: false,
    alipayBind: false,
    type: 1,
    isLoading: false
}

const getters = {

}

const mutations = {
    loginStep(state, _value) {
        state.loginStep = _value
    },
    weChatBind(state, _bool) {
        state.weChatBind = _bool
    },
    alipayBind(state, _bool) {
        state.alipayBind = _bool
    },
    type(state, _bool) {
        state.type = _bool
    },
    isLoading(state, _bool) {
        state.isLoading = _bool
    }
}

const actions = {

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}