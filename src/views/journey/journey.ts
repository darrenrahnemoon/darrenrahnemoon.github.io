import _ from 'lodash';

export const journey = _.orderBy([
	{
		description: 'Wrote My First Line of Code',
		date       : new Date('2011-03-01'),
	},
	{
		description: 'Gold Medal at iCan 2018 International Invention Innovation Competition',
		date       : new Date('2018-08-01'),
	},
	{
		description: 'Special Inventor Award at iCan 2018 International Invention Innovation...',
		date       : new Date('2018-08-01'),
	},
	{
		description: 'Top 25% in Canadian Computing Competition',
		date       : new Date('2018-02-01'),
	},
	{
		description: '3rd place in 19th Khawarizmi National Competition',
		date       : new Date('2017-09-01'),
	},
	{
		description: '1st place at the Fifth Exhibition of NODET',
		date       : new Date('2015-03-01'),
	},
	{
		description: '2nd place at the First Programming Competition of NODET',
		date       : new Date('2015-03-01'),
	},
	{
		description: 'Attended A.Y. Jackson Secondary School',
		date       : new Date('2017-08-01'),
	},
	{
		description: 'Joined Marlik Institute of Innovation and Technology as a Developer',
		date       : new Date('2016-05-01'),
	},
	{
		description: 'Enrolled in uOttawa for BAsc. Electrical Engineering',
		date       : new Date('2020-09-01'),
	},
	{
		description: 'Joined Landlord Credit Bureau as a Software Developer',
		date       : new Date('2020-04-01'),
	},
	{
		description: 'Became a Professional Scrum Master',
		date       : new Date('2021-09-01'),
	},
	{
		description: 'Joined Compass Digital Labs as a Software Engineer',
		date       : new Date('2022-04-02'),
	},
], 'date', 'desc');
