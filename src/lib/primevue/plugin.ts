import { Plugin } from 'vue';
import PrimeVue   from 'primevue/config';
import Tooltip    from 'primevue/tooltip';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './themes/custom/theme.scss';

export const PrimeVueIntegrationPlugin: Plugin = {
	install(app) {
		app.use(PrimeVue);
		app.directive('tooltip', Tooltip);
	},
};
