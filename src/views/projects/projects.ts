import _ from 'lodash';

export const projects: Project[] = _.orderBy([
	{
		slug      : 'yekan',
		name      : 'Yekan',
		summary   : 'School Administration Platform',
		thumbnail : '/assets/projects/yekan/yekan.jpeg',
		icon      : 'pi pi-mobile',
		date      : new Date('2016-05-02'),
		component : () => import('./views/Yekan.vue'),
	},
	{
		slug      : 'markeep',
		name      : 'Markeep',
		summary   : 'Open Communication in Your Team at Every Step of the Way',
		thumbnail : '/assets/projects/markeep/markeep.jpg',
		icon      : 'pi pi-desktop',
		date      : new Date('2015-09-02'),
	},
	{
		slug      : 'icontrol',
		name      : 'iControl',
		summary   : 'Control Your Mac Through Your iPhone With Your Voice',
		thumbnail : '/assets/projects/icontrol/icontrol.jpg',
		icon      : 'pi pi-mobile',
		date      : new Date('2015-04-02'),
	},
	{
		slug      : 'tricopter',
		name      : 'Tricopter',
		summary   : 'A Giant Tricopter with Dedicated Rear Propulsion',
		thumbnail : '/assets/projects/drone/drone.jpg',
		icon      : 'pi pi-cog',
		date      : new Date('2020-10-02'),
	},
	{
		slug      : 'chatter',
		name      : 'Chatter',
		summary   : 'Encrypted chatting over LAN',
		thumbnail : '/assets/projects/chatter/chatter.jpg',
		icon      : 'pi pi-comments',
		date      : new Date('2015-03-02'),
	},
	{
		slug      : 'thorns',
		name      : 'Thorns',
		summary   : 'Multipurpose Landing component Template',
		thumbnail : '/assets/projects/thorns/thorns.jpg',
		icon      : 'pi pi-sitemap',
		date      : new Date('2018-05-02'),
	},
	{
		slug      : 'barbers-club',
		name      : "Barber's Club",
		summary   : 'Barbershop Management Platform',
		thumbnail : '/assets/projects/barbers/barbers.png',
		icon      : 'pi pi-calendar-plus',
		date      : new Date('2020-01-02'),
	},
	{
		slug      : 'magic-crystal',
		name      : 'MC Trading Framework',
		summary   : 'One-Stop Shop for Backtesting and Warehousing Historical Data',
		icon      : 'pi pi-money-bill',
		date      : new Date('2022-11'),
		component : () => import('./views/TradingFramework.vue'),
	},
], 'date', 'desc');

export interface Project {
	slug: string;
	name: string;
	summary: string;
	date: Date;
	thumbnail?: string;
	icon?: string;
	component?: () => any;
}

