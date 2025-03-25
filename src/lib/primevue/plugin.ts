import { Plugin } from 'vue';
import PrimeVue   from 'primevue/config';
import Tooltip    from 'primevue/tooltip';
import { theme }  from './theme';
import 'primeicons/primeicons.css';

export const PrimeVueIntegrationPlugin: Plugin = {
	install(app) {
		app.use(PrimeVue, {
			theme: {
				preset : theme,
				options: {
					cssLayer: {
						name : 'primevue',
						order: 'tailwind-base, primevue, tailwind-utilities',
					},
				},
			},
		});
		app.directive('tooltip', Tooltip);
	},
};
