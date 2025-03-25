import _ from 'lodash';

export const projects: Project[] = _.orderBy([
	{
		slug     : 'yekan',
		name     : 'Yekan',
		summary  : 'School Administration Platform',
		thumbnail: '/assets/views/projects/yekan/yekan.jpeg',
		icon     : 'pi pi-mobile',
		date     : new Date('May 2016'),
		component: () => import('./views/yekan/Yekan.vue'),
	},
	{
		slug     : 'markeep',
		name     : 'Markeep',
		summary  : 'Open Communication in Your Team at Every Step of the Way',
		thumbnail: '/assets/views/projects/markeep/markeep.jpg',
		icon     : 'pi pi-desktop',
		date     : new Date('September 2015'),
	},
	{
		slug     : 'icontrol',
		name     : 'iControl',
		summary  : 'Control Your Mac Through Your iPhone With Your Voice',
		thumbnail: '/assets/views/projects/icontrol/icontrol.jpg',
		icon     : 'pi pi-mobile',
		date     : new Date('April 2015'),
	},
	{
		slug     : 'tricopter',
		name     : 'Arrow',
		summary  : 'A Giant Tricopter with Dedicated Rear Propulsion',
		thumbnail: '/assets/views/projects/drone/drone.jpg',
		icon     : 'pi pi-cog',
		date     : new Date('October 2022'),
	},
	{
		slug     : 'chatter',
		name     : 'Chatter',
		summary  : 'Encrypted chatting over LAN',
		thumbnail: '/assets/views/projects/chatter/chatter.jpg',
		icon     : 'pi pi-comments',
		date     : new Date('March 2015'),
	},
	{
		slug     : 'thorns',
		name     : 'Thorns',
		summary  : 'Multipurpose Landing component Template',
		thumbnail: '/assets/views/projects/thorns/thorns.jpg',
		icon     : 'pi pi-sitemap',
		date     : new Date('May 2018'),
	},
	{
		slug     : 'barbers-club',
		name     : "Barber's Club",
		summary  : 'Barbershop Management Platform Concept',
		thumbnail: '/assets/views/projects/barbers-club/barbers-club.png',
		icon     : 'pi pi-calendar-plus',
		date     : new Date('January 2020'),
		url      : '/assets/views/projects/barbers-club/barbers-club.pdf',
	},
	{
		slug     : 'fortune-teller',
		name     : 'Fortune Teller',
		summary  : 'One-Stop Shop for Backtesting and Warehousing Historical Data',
		thumbnail: '/assets/views/projects/fortune-teller/fortune-teller.jpeg',
		icon     : 'pi pi-chart-line',
		date     : new Date('November 2022'),
		component: () => import('./views/fortune-teller/FortuneTeller.vue'),
	},
	{
		slug     : 'vue-3-class-api',
		name     : 'Vue 3 Class API',
		summary  : 'Alternative to Vue 3 Composition API',
		thumbnail: '/assets/views/projects/vue-3-class-api/vue-3-class-api.jpeg',
		icon     : 'pi pi-qrcode',
		date     : new Date('March 2022'),
		url      : 'https://github.com/darrenrahnemoon/vue-class-api',
	},
	{
		slug     : 'commander-js-decorated',
		name     : 'CommanderJS Decorated',
		summary  : 'Decorator Syntax for the CommanderJS Library',
		thumbnail: '/assets/views/projects/commander-js-decorated/commander-js-decorated.png',
		icon     : 'pi pi-code',
		date     : new Date('February 2022'),
		url      : 'https://github.com/darrenrahnemoon/commander.js-decorated',
	},
], 'date', 'desc');

export interface Project {
	slug?     : string;
	name      : string;
	summary   : string;
	date      : Date;
	thumbnail?: string;
	icon?     : string;
	component?: () => any;
	url?      : string;
}

