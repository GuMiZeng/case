import api from "./index";
import md5 from "js-md5";
let d = {};

let form = true; // 表单传输
/**
 * 登录
 * 必填： username用户账号、passwd密码
 */
d.login = {
    data: {
        username: null,
        passwd: null
    },
    post() {

        let path = "user/login";
        this.data.passwd = md5(this.data.passwd);

        return api.axios("POST", path, form, this.data);
    }
};
/**
 * 注销
 *
 */
d.loginOut = {
    data: {},
    post() {
        let path = "user/loginOut";
        return api.axios("POST", path, form, this.data);
    }
};
/**
 * 注册
 * 必填：username用户账号、passwd密码；
 * 选填：code验证码、icon图片ID
 */
d.register = {
    data: {
        username: null,
        passwd: null,
        code: null,
        icon: null
    },
    post() {
        let form = true;
        let path = "user/registUser";
        this.data.passwd = md5(this.data.passwd);

        return api.axios("POST", path, form, this.data);
    }
};
/**
 * 重置密码
 * 必填：usuername 用户账号、passwd 用户密码、code 验证码
 */
d.resetPwd = {
    data: {
        username: null,
        passwd: null,
        code: null
    },
    post() {
        let form = true;
        this.data.passwd = md5(this.data.passwd);
        let path = "user/resetPwd";
        return api.axios("POST", path, form, this.data);
    }
};
/**
 * 修改密码
 * 必填： proxyUserToken 标识、 passwdOld原密码、passwd 新密码
 */
d.updatePwd = {
    data: {
        proxyUserToken: null,
        passwdOld: null,
        passwd: null
    },
    post() {
        let path = "user/updatePasswd";
        return api.axios("POST", path, form, this.data);
    }
};

export default d;