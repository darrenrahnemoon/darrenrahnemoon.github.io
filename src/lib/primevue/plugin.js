import PrimeVue from 'primevue/config';
import Tooltip from 'primevue/tooltip';
import { theme } from './theme';
import 'primeicons/primeicons.css';
export var PrimeVueIntegrationPlugin = {
    install: function (app) {
        app.use(PrimeVue, {
            theme: {
                preset: theme,
                options: {
                    cssLayer: {
                        name: 'primevue',
                        order: 'tailwind-base, primevue, tailwind-utilities',
                    },
                },
            },
        });
        app.directive('tooltip', Tooltip);
    },
};
