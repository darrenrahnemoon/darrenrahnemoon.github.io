import { Plugin }                 from 'vue';
import { ScrollToDirective }      from './scroll-to';
import { ScrollTriggerDirective } from './scroll-trigger';

export const GSAPIntegrationPlugin: Plugin = {
	install(app) {
		app.directive('scroll-to', ScrollToDirective);
		app.directive('scroll-trigger', ScrollTriggerDirective);
	},
};
