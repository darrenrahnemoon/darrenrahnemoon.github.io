import Vue from 'vue';
import '$/lib/serviceWorker';
import '$/lib/extensions';
import '$/lib/components';
import router from '$/router';

import App from '$/views/App.vue';

Vue.config.productionTip = false;
new Vue({
    router,
    render : h => h(App),
}).$mount('#app');
