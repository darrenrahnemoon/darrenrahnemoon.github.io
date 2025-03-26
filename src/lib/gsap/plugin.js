import { ScrollToDirective } from './scroll-to';
import { ScrollTriggerDirective } from './scroll-trigger';
export var GSAPIntegrationPlugin = {
    install: function (app) {
        app.directive('scroll-to', ScrollToDirective);
        app.directive('scroll-trigger', ScrollTriggerDirective);
    },
};
