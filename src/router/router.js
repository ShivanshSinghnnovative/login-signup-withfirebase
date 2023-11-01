import { createRouter, createWebHashHistory } from 'vue-router' ;

const routes = [
    {
        path: '/',
        name: 'register',
        component: () => import('../pages/registerUser.vue'),
      },
]
const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
  })
export default router