import {
    local
} from './index'

let namespace = 'user' // 本地存储命名空间
let user = {}

/**
 * 获取、设置 jwt
 */
user.proxyUserToken = (_str) => {
    // return _str == null ? local.get(namespace + '_proxyUserToken') : local.set(namespace + '_proxyUserToken', _str, 60 * 50 * 1000)
    return _str == null ? local.get(namespace + '_proxyUserToken') : local.set(namespace + '_proxyUserToken', _str)
}
user.appId = (_str) => {
    // return _str == null ? local.get(namespace + '_appId') : local.set(namespace + '_appId', _str, 60 * 50 * 1000)
    return _str == null ? local.get(namespace + '_appId') : local.set(namespace + 'appId_', _str)
}

// export default user