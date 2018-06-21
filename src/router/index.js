import Router from 'vue-router'


const routes = [{
            path: '/',
            redirect: ' ',
            meta: {
                title: '小程序'
            },
            component: (resolve) => require(['../views/index'], resolve),
            children: [{
                    path: ' ',
                    meta: {
                        title: '首页'
                    },
                    component: (resolve) => require(['../views/home'], resolve),
                },
                {
                    path: '/mini_programs_detail',
                    meta: {
                        title: '小程序详情'
                    },
                    // component: mini_programs_detail,
                    component: (resolve) => require(['../views/mini_programs_detail/mini_programs_dedail'], resolve)
                },
                {
                    path: '/agent_cooperation',
                    meta: {
                        title: '代理合作'
                    },
                    // component: decorator((resolve) => require(['../views/agent_cooperation'], resolve)),                    
                    component: (resolve) => require(['../views/agent_cooperation'], resolve),
                },
                {
                    path: '/agent_case',
                    meta: {
                        title: '代理案例'
                    },
                    component: (resolve) => require(['../views/agent_case'], resolve),
                },
                {
                    path: '/activity_special',
                    meta: {
                        title: '峰会活动'
                    },
                    component: (resolve) => require(['../views/activity_special'], resolve),
                },
                {
                    path: '/about_us',
                    meta: {
                        title: '关于我们'
                    },
                    component: (resolve) => require(['../views/about_us.vue'], resolve)
                },
                {
                    path: '/mini_programs',
                    meta: {
                        title: '小程序'
                    },
                    component: (resolve) => require(['../views/mini_programs.vue'], resolve),
                },
                {
                    path: '/activity',
                    meta: {
                        title: '优惠活动'
                    },
                    component: (resolve) => require(['../views/activity.vue'], resolve),
                },
                {
                    path: '/test',
                    meta: {
                        title: '测试'
                    },
                    component: (resolve) => require(['../views/_agent_case.vue'], resolve),
                }
            ]
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
    // 滚动行为
const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        return savedPosition
    } else {
        return {
            y: 0
        }
    }
}

const router = new Router({
    // mode: "history",
    // base: '/officialWeb/officialWebsite',
    // base: '/officialWeb',
    routes,
    scrollBehavior,
    // linkActiveClass: 'active'
})

// 钩子
router.beforeEach((to, from, next) => {
    console.log('❤')
    window.document.title = to.meta.title // 设置页面title
        // 未登录 默认跳转
    next()
        // 禁止
        // history.pushState(null, null, document.URL);
        // window.addEventListener('popstate', function () {
        //   history.pushState(null, null, document.URL);
        // });
})

router.afterEach((to, from, next) => {
    // iView.LoadingBar.finish()
    window.scrollTo(0, 0)
})

export default router