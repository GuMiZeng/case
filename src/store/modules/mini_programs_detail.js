// import localUser from '../../local/user'
/* eslint-disable */
const state = {
    appId: null,
    icon: null,
    qrCode: null,
}

const getters = {

}

const mutations = {
    appId(state, _value) {
        state.appId = _value
            // localUser.appId(_value)
    },
    icon(state, _value) {
        state.icon = _value
    },
    qrCode(state, _value) {
        state.qrCode = _value
    },
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