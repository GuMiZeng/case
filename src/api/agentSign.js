import api from "./index";
let d = {};


/**
 * 发送短信验证码
 */
d.sendMessage = {
    data: {
        mobile: null //String	是	账号
    },
    post() {
        let form = true; // 表单传输
        let path = "netease/sms/sendCode";
        return api.axios("POST", path, form, this.data, );
    }
};
/**
 * 校验短信验证码
 */
d.verifyMessage = {
    data: {
        mobile: null, //String	是	目标手机号
        code: null, //String	是	验证码
        typeFlag: null //Integer	是	验证类型:100-注册用户;200-找回密码;300-其他验证
    },
    post() {
        let form = true; // 表单传输
        let path = "netease/sms/verifyCode";
        return api.axios("POST", path, form, this.data);
    }
};

d.addAgent = {
    data: {
        manager: null, //	String	不是	负责人
        mobile: null, //	String	是	手机号码
        smsCode: null, // 	String	是	短信验证码
        corporation: null, //	String	不是	公司名称
        province: null, //	String	不是	省份
        city: null, //	String	不是	城市
        region: null, //	String	不是	地区
        remark: null, //	String	不是	备注
    },
    post() {
        let form = true; // 表单传输
        let path = "agentInfo/add4App";
        return api.axios("POST", path, form, this.data, );
    }
};

export default d;