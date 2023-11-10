import { App } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import { routes } from './routes';

export const VueRouterIntegrationPlugin = {
	install(app: App) {
		const router = createRouter({
			history : createWebHistory(),
			routes,
		})
		app.use(router);
	}
}