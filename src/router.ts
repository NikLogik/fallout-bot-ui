import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import RaceStep from './components/steps/RaceStep.vue'

const routes: RouteRecordRaw[] = [
    { path: '', component: RaceStep }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})

