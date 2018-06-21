import localMenu from '../../local/menu'
const state = {
    officialWbsite: [{
        name: ' 内容展示',
        icon: 'micon_info',
        path: '/exhibition/info',
        children: [{
                name: '基础信息',
                path: '/exhibition/info'
            },
            {
                name: '联系方式及地址',
                path: '/exhibition/address'
            },
            {
                name: '图集/视频视频管理',
                path: '/exhibition/images'
            },
            {
                name: '文章管理',
                path: '/exhibition/article'
            }
        ]
    }],
    shopWebsite: [{
            name: ' 通用设置',
            icon: 'micon_set',
            path: '/setting/receive',
            children: [{
                    name: '收货方式管理',
                    path: '/setting/receive'
                },
                {
                    name: '收银管理配置',
                    path: '/setting/payment'
                },
                {
                    name: '积分设置',
                    path: '/setting/integral'
                },
                {
                    name: '直播设置',
                    path: '/setting/live'
                }
            ]
        },
        {
            name: ' 活动推广',
            icon: 'micon_promotion',
            path: '/promotion/slider',
            children: [{
                name: '轮播图管理',
                path: '/promotion/slider'
            }]
        },
        {
            name: ' 商品管理',
            icon: 'micon_goods',
            path: '/goods/categorys',
            children: [{
                    name: '商品分类管理',
                    path: '/goods/categorys'
                },
                {
                    name: '商品管理',
                    path: '/goods/management'
                }
            ]
        },
        {
            name: ' 订单及会员',
            icon: 'micon_member',
            path: '/member/detail',
            children: [{
                    name: '会员详情',
                    path: '/member/detail'
                },
                {
                    name: '优惠券管理',
                    path: '/member/coupon'
                },
                {
                    name: '订单管理',
                    path: '/member/order'
                }
            ]
        },
        {
            name: ' 数据分析',
            icon: 'micon_statistics',
            path: '/analysis/tradsaction',
            children: [{
                name: '交易统计',
                path: '/analysis/tradsaction'
            }]
        }
    ],
    aditList: [{
            name: ' 内容展示',
            icon: 'micon_info',
            path: '/exhibition/info',
            children: [{
                    name: '基础信息',
                    path: '/exhibition/info'
                },
                {
                    name: '联系方式及地址',
                    path: '/exhibition/address'
                },
                {
                    name: '图集/视频视频管理',
                    path: '/exhibition/images'
                },
                {
                    name: '文章管理',
                    path: '/exhibition/article'
                }
            ]
        },
        {
            name: ' 通用设置',
            icon: 'micon_set',
            path: '/setting/receive',
            children: [{
                    name: '收货方式管理',
                    path: '/setting/receive'
                },
                {
                    name: '收银管理配置',
                    path: '/setting/payment'
                },
                {
                    name: '积分设置',
                    path: '/setting/integral'
                },
                {
                    name: '直播设置',
                    path: '/setting/live'
                }
            ]
        },
        {
            name: ' 活动推广',
            icon: 'micon_promotion',
            path: '/promotion/slider',
            children: [{
                name: '轮播图管理',
                path: '/promotion/slider'
            }]
        },
        {
            name: ' 商品管理',
            icon: 'micon_goods',
            path: '/goods/categorys',
            children: [{
                    name: '商品分类管理',
                    path: '/goods/categorys'
                },
                {
                    name: '商品管理',
                    path: '/goods/management'
                }
            ]
        },
        {
            name: ' 订单及会员',
            icon: 'micon_member',
            path: '/member/detail',
            children: [{
                    name: '会员详情',
                    path: '/member/detail'
                },
                {
                    name: '优惠券管理',
                    path: '/member/coupon'
                },
                {
                    name: '订单管理',
                    path: '/member/order'
                }
            ]
        },
        {
            name: ' 数据分析',
            icon: 'micon_statistics',
            path: '/analysis/tradsaction',
            children: [{
                name: '交易统计',
                path: '/analysis/tradsaction'
            }]
        }
    ],
    menuList: [

    ]
}

const getters = {

}

const mutations = {
    editList(state, _val) {
        state.editList = _val
    },
    officialWbsite(state, _val) {
        state.officialWbsite = _val
    },
    shopWebsite(state, _val) {
        state.shopWebsite = _val
    },
    menuList(state, _val) {
        state.menuList = _val
        localMenu.list(_val)
    }
}

const actions = {

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}