import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: () => import('../views/ManageLogin.vue')
        },
        {
            path: '/show',
            component: () => import('../views/showPlatform.vue'),
            redirect: '/show/myTest',
            children: [
                {
                    path: '/show/myTest',
                    component: () => import('../views/myTest.vue')
                }
            ]
        }
    ]
});

export default router;
