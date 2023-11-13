import { Plugin }                         from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import { routes }                         from './routes';

export const VueRouterIntegrationPlugin: Plugin = {
	install(app) {
		const router = createRouter({
			scrollBehavior() {
				return { top : 0 };
			},
			history : createWebHistory(),
			routes,
		});
		app.use(router);
	},
};
