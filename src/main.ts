import { createApp } from 'vue'
import { PrimeVueIntegrationPlugin } from './lib/primevue/plugin';
import { VueRouterIntegrationPlugin } from './lib/vue-router/plugin';
import App from './App.vue'

const app = createApp(App);
app.use(PrimeVueIntegrationPlugin);
app.use(VueRouterIntegrationPlugin)
app.mount('#app');