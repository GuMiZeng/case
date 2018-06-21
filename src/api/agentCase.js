import api from './index'
let d = {}

let type = 2
    /**
     * 案例新建
     */
d.add = {
    data: {
        title: null, //String	不是	名称
        salesAmount: null, //String	不是	销售额，例如：两万
        agentDate: null, //Date	不是	代理时间，格式：yyyy-MM-dd
        teamMember: null, //Integer	不是	团队人数
        content: null, //String	不是	详情
        icon: null, //	Long	不是	样图
    },
    post() {
        let path = 'content/agentCase/add'
        return api.axios('POST', path, type, this.data)
    }
}

/**
 * 案例修改
 */
d.modify = {
    data: {
        id: null, //	Long	是	记录主键PK
        title: null, //	String	不是	名称
        salesAmount: null, //	String	不是	销售额，例如：两万
        agentDate: null, //	Date	不是	代理时间，格式：yyyy-MM-dd
        teamMember: null, //	Integer	不是	团队人数
        content: null, //	String	不是	详情
        icon: null, //	Long	不是	样图
    },
    post() {
        let path = 'content/agentCase/update'
        return api.axios('POST', path, type, this.data)
    }
}

/**
 * 案例删除
 */

/**
 * 案例置顶
 */
d.isTop = {
    data: {
        id: null, //	Long	是	记录主键PK
        isTop: null, //	Integer	不是	是否置顶(1-是,0-否),默认1
    },
    post() {
        let path = 'content/agentCase/updateTopStatus'
        return api.axios('POST', path, type, this.data)
    }
}

/**
 * 案例搜索
 */
d.search = {
    data: {
        id: null, //	Long	是	记录主键PK
        // isTop: null, //	Integer	不是	是否置顶(1-是,0-否),默认1
    },
    post() {
        let path = `content/agentCase/find/${this.data.id}`
        return api.axios('POST', path, type)
    }
}

/**
 * 案例查询
 */
d.query = {
    data: {
        title: null, //	String	不是	名称
        salesAmount: null, //	String	不是	销售额
        agentDateStart: null, //	String	不是	起始代理时间，格式yyyy-MM-dd
        agentDateEnd: null, //	String	不是	结束代理时间，格式yyyy-MM-dd
        teamMemberLow: null, //	Integer	不是	最小团队人数
        teamMemberHigh: null, //	Integer	不是	最大团队人数
        content: null, //	String	不是	详请
        pageIndex: null, //	Integer	不是	当前页码，默认不分页
        pageSize: null, //	Integer	不是	每页显示的记录数，默认不分页
    },
    post() {
        let path = `content/agentCase/findPageList`
        return api.axios('POST', path, type)
    }
}

export default d