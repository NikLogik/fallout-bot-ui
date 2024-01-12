import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import RaceStep from './components/steps/RaceStep.vue'
import StartStep from './components/steps/StartStep.vue'

const routes: RouteRecordRaw[] = [
    { path: '', component: StartStep },
    { path: '/races', component: RaceStep }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})