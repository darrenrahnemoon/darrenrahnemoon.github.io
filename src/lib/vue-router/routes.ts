import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
	{ path: '/', 				component: () => import('$/views/home/Home.vue') },
	{ path: '/journey',			component: () => import('$/views/journey/Journey.vue') },
	{ path: '/projects',		component: () => import('$/views/projects/Projects.vue') },
	{ path: '/project/:slug', 	component: () => import('$/views/projects/Project.vue') },
	{ path: '/gallery',			component: () => import('$/views/gallery/Gallery.vue') },
	{ path: '/rants',			component: () => import('$/views/rants/Rants.vue') },
	{ path: '/:match(.*)*', 	component: () => import('$/views/components/404.vue') },
];
