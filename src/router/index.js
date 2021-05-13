import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
const mainRoutes = [
    {
        path: "/",
        name: "index",
        redirect: "/index",
    },
    {
        path: "/index",
        name: "index",
        component: () => import("@/views/index"),
        meta: {
            title: "招标代理机构信息",
        },
    },
    {
        path: "/agent",
        name: "agent",
        component: () => import("@/views/index/agent"),
        meta: {
            title: "代理季度考核结果",
        },
    },
    {
        path: "/pdetail",
        name: "pdetail",
        component: () => import("@/views/pdetail"),
        meta: {
            title: "详情页",
        },
    },
];

// 消除重复跳转警告
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
};

const router = new Router({
    mode: "hash", // hash history
    base: __dirname,
    routes: mainRoutes,
});

router.beforeEach((to, from, next) => {
    next();
});

export default router;
