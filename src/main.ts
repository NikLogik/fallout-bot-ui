import { createApp } from 'vue'
import App from './App.vue'
import VueTelegram from "vue-tg"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'


library.add(fas)

createApp(App)
    .use(VueTelegram)
    .component('FontAwesomeIcon', FontAwesomeIcon)
    .mount('#app')