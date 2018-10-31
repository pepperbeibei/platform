export default {
    menus: [ // 菜单相关路由
        { key: '/asrs', title: '首页', icon: 'mobile', component: 'Home', },
        {
            key: '/asrs/list', title: '名单', icon: 'scan',
            subs: [
                { key: '/asrs/list/whitelist', title: '白名单', component: 'WhiteList'},
                { key: '/asrs/list/blacklist', title: '黑名单', component: 'BlackList'},
            ],
        },
        {
            key: '/asrs/Shelves', title: '货架', icon: 'rocket',
            subs: [
                { key: '/asrs/Shelves/2d', title: '2D', component: 'Shelves2D'},
                { key: '/asrs/Shelves/3d', title: '3D', component: 'Shelves3D'},
            ],
        },
        {
            key: '/asrs/form', title: '报表', icon: 'edit',
            subs: [
                { key: '/asrs/form/dayform', title: '日报表', component: 'DayForm'},
                { key: '/asrs/form/Monthform', title: '月报表', component: 'MonthForm'},
            ],
        },
        {
            key: '/asrs/about', title: '关于', icon: 'star', component: 'About',
        },
        {
            key: '/login', title: '登录', icon: 'rocket', component: 'Login',

        },
    ],
    others: [] // 非菜单相关路由
}