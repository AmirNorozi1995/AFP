import {createApp} from 'vue'
import App from './App.vue'
import AppView from './AppView.vue'
import router from './router/router'

// createApp(App).use(router).mount('#app')
createApp(AppView).use(router).mount('#app')
