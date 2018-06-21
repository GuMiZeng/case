import {
    local
} from './index'

let namespace = 'menu' // 本地存储命名空间
let menu = {}

/**
 * 获取、设置 菜单
 */
menu.list = (_str) => {
    // return _str == null ? local.get(namespace + 'list') : local.set(namespace + 'list', _str,60 * 50 * 1000)
    return _str == null ? local.get(namespace + 'list') : local.set(namespace + 'list', _str)
}

export default menu