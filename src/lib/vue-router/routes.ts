import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
	{ path : '/', 				component : () => import('$/views/Home.vue') },
	{ path : '/journey',		component : () => import('$/views/journey/Journey.vue') },
	{ path : '/projects',		component : () => import('$/views/projects/Projects.vue') },
	{ path : '/project/:slug', 	component : () => import('$/views/projects/Project.vue') },
	{ path : '/gallery',		component : () => import('$/views/Gallery.vue') },
	{ path : '/rants',			component : () => import('$/views/Rants.vue') },
];
