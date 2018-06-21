import api from "./index";
let d = {};

let form = true; // 表单传输
// let form = true; // 表单传输
/**
 * 登录
 * 必填： username用户账号、passwd密码
 */
d.query = {
    data: {
        category: null, //Integer	是	数据类型：1-轮播图 2-代理说,默认1
        name: null, //String	不是	名称
        type: null, //String	不是	所属行业
        typeName: null, //String	不是	所属行业名称
        startPrice: null, //Integer	不是	起始价格(元/年)
        endPrice: null, //Integer	不是	结束价格(元/年)
        pageIndex: null, //Integer	不是	当前页码，默认不分页
        pageSize: null //Integer	不是	每页显示的记录数，默认不分页
    },
    post() {

        let path = "content/pic/findPageList";
        return api.axios("POST", path, form, this.data);
    }
};

export default d;