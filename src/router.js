import { createRouter, createWebHistory } from "vue-router";
import DashboardViewVue from "./views/dashboard/DashboardView.vue";
import ProvidersViewVue from "./views/insights/ProvidersView.vue";


const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: DashboardViewVue
    },
    {
        path: '/providers',
        name: "Providers",
        component: ProvidersViewVue
    }
]

const router = createRouter({
    history: createWebHistory('/'),
    routes
})

export default router