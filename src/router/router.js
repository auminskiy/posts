import MainPage from '@/pages/MainPage'
import PostsPage from '@/pages/PostsPage'
import AboutPage from '@/pages/AboutPage'
import PostIdPage from '@/pages/PostIdPage'
import PostPageWithStore from '@/pages/PostPageWithStore'
import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/posts',
        component: PostsPage
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    },
    {
        path: '/info',
        component: AboutPage
    },
    {
        path: '/store',
        component: PostPageWithStore
    }
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;