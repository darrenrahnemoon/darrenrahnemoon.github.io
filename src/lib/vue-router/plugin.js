import { createWebHistory, createRouter } from 'vue-router';
import { routes } from './routes';
export var VueRouterIntegrationPlugin = {
    install: function (app) {
        var router = createRouter({
            scrollBehavior: function () {
                return { top: 0 };
            },
            history: createWebHistory(),
            routes: routes,
        });
        app.use(router);
    },
};
