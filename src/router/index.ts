import _                          from 'lodash';
import Vue                        from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { Environment }            from '$/lib/utilities/environment';

Vue.use(VueRouter);

export const routes = _({
    home    : { path : '/', component : () => import(/* webpackChunkName: "home" */ '../views/Home.vue') },
    journey : { path : '/journey', component : () => import(/* webpackChunkName: "about" */ '../views/Journey.vue') },
    work    : { path : '/work/:name?', component : () => import(/* webpackChunkName: "about" */ '../views/Work.vue') },
    contact : { path : '/contact', component : () => import(/* webpackChunkName: "about" */ '../views/Contact.vue') },
    rants   : { path : '/rants', component : () => import(/* webpackChunkName: "about" */ '../views/Rants.vue') },

    playground : {
        visible   : !Environment.isProduction,
        path      : '/playground/:page?',
        component : () => import(/* webpackChunkName: "playground" */ '../views/playground/Playground.vue'),
    },
} as Record<string, Route>)
    .pickBy(route => [ true, undefined ].includes(route.visible))
    .mapValues((route, name) => {
        route.name = name;
        return route;
    })
    .values()
    .valueOf() as any as RouteConfig[];

export default new VueRouter({
    mode : 'history',
    base : process.env.BASE_URL,
    routes,
});

interface Route extends Omit<RouteConfig, 'path'> {
    visible? : boolean; // if false, excludes the route
}
