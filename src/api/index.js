import Axios from 'axios'
// import apiUser from './user'
// import localUser from '../local/user'
import Qs from 'qs'

let d = {}

d.axios = function(_method, _path, _form, _data) {
    if (_form) {
        _data = Qs.stringify(_data)
    }
    // 适配www解析
    let url = document.domain;
    return Axios.request({
        method: _method,
        url: _path,
        data: _data,
        // baseURL: '/officialWeb', //代理
        baseURL: '//' + url,
        headers: {
            // 'Conten-Type': 'application/x-www-form-urlencoded;charset=utf-8;application/json',
            'Conten-Type': 'application/x-www-form-urlencoded;',
            'Access-Control-Allow-Origin': '*',
        }
    })
}

export default d