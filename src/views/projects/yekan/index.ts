import { Project } from '../types';

const yekan: Project = {
	slug      : 'yekan',
	name      : 'Yekan',
	summary   : 'School Administration Platform',
	thumbnail : '/assets/projects/yekan/yekan.jpeg',
	icon      : 'pi pi-desktop',
	date      : new Date('2015-05'),
	page      : () => import('./page.vue'),
};

export default yekan;
