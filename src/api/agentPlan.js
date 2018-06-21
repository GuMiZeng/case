import api from './index'
let d = {}

let type = 2
    /**
     * 方案新建
     */
d.add = {
        data: {
            title: null, //String	不是	名称
            agentPrice: null, //	String	不是	代理价格，例如：两万。
            agentReference: null, //	String	不是	推荐代理
            feature: null, //	String	不是	特点
            reason: null, //	String	不是	推荐原因
            icon: null, //	Long	不是	样图
        },
        post() {
            let path = 'content/agentScheme/add'
            return api.axios('POST', path, type, this.data)
        }
    }
    /**
     * 方案修改
     */
d.modify = {
        data: {
            id: null,
            title: null, //String	不是	名称
            agentPrice: null, //	String	不是	代理价格，例如：两万。
            agentReference: null, //	String	不是	推荐代理
            feature: null, //	String	不是	特点
            reason: null, //	String	不是	推荐原因
            icon: null, //	Long	不是	样图
        },
        post() {
            let path = 'content/agentScheme/update'
            return api.axios('POST', path, type, this.data)
        }
    }
    /**
     * 方案删除
     */
    /**
     * 案例置顶
     */
d.toTop = {
        data: {
            id: null, //	Long	是	记录主键PK
            isTop: null, //	Integer	不是	是否置顶(1-是,0-否),默认1

        },
        post() {
            let path = 'content/agentScheme/updateTopStatus'
            return api.axios('POST', path, type, this.data)
        }
    }
    /**
     * 方案搜索
     */
d.search = {
        data: {
            id: null, //	Long	是	记录主键PK
        },
        post() {
            let path = `content/agentScheme/find/${this.data.id}`
            return api.axios('POST', path, type)
        }
    }
    /**
     * 方案查询
     */
d.query = {
    data: {
        title: null, //String	不是	名称
        agentPrice: null, //	String	不是	代理价格，例如：两万。
        agentReference: null, //	String	不是	推荐代理
        feature: null, //	String	不是	特点
        reason: null, //	String	不是	推荐原因
        icon: null, //	Long	不是	样图
        pageIndex: null, //	Integer	不是	当前页码，默认不分页
        pageSize: null, //	Integer	不是	每页显示的记录数，默认不分页
    },
    post() {
        let path = `content/agentScheme/findPageList`
        return api.axios('POST', path, type)
    }
}

export default d