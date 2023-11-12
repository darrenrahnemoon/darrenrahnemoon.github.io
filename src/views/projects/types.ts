export interface Project {
	slug: string;
	name: string;
	summary: string;
	date: Date;
	thumbnail: string;
	icon: string;
	page: () => any;
}
