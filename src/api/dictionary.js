import api from "./index";
let d = {};


/**
 * 登录
 * 必填： username用户账号、passwd密码
 */
d.query = {
    data: {
        parentCode: null, //	String	不是	父编码,二选一 不能和type同时为空
        type: null, //Integer	不是	类型,二选一 不能和parentCode同时为空
        //类型值说明：
        //1-国家  2-省或行政区(parentCode=86) 3-市 4-区
        //-行业分类(parentCode=4000001)
        pageIndex: null, //Integer	不是	当前页码，默认不分页
        pageSize: null //Integer	不是	每页显示的记录数，默认不分页
    },
    post() {
        let form = true; // 表单传输
        let path = "system/dictionary/findPageList";
        return api.axios("POST", path, form, this.data);
    }
};

export default d;