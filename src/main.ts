import Vue from 'vue';
import App from './App.vue';
import './lib/serviceWorker';
import router from './router';
import './lib/components';

Vue.config.productionTip = false;

new Vue({
    router,
    render : h => h(App),
}).$mount('#app');
