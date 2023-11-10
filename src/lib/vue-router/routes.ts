import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
	{ path: '/', 			component : () => import('../../views/Home.vue') },
	{ path: '/journey',		component : () => import('../../views/Journey.vue') },
];