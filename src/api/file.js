import api from "./index";
let d = {};


/**
 * 登录
 * 必填： username用户账号、passwd密码
 */
d.login = {
    data: {
        fileId: null
    },
    get() {
        // let form = true; // 表单传输
        let path = "space/showImg/" + this.data.fileId;

        return api.axios("GET", path, form);
    }
};

export default d;