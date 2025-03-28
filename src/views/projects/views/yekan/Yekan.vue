<script setup>
import Galleria from 'primevue/galleria';

const screenshots = [
	'/assets/views/projects/yekan/pages/main.jpg',
	'/assets/views/projects/yekan/pages/grades.jpg',
	'/assets/views/projects/yekan/pages/login.jpg',
	'/assets/views/projects/yekan/pages/academic-standing.jpg',
	'/assets/views/projects/yekan/pages/profile.jpg',
	'/assets/views/projects/yekan/pages/councilor-notes.jpg',
	'/assets/views/projects/yekan/pages/beheavior-notes.jpg',
	'/assets/views/projects/yekan/pages/instructors-portal.jpg',
	'/assets/views/projects/yekan/pages/news.jpg',
	'/assets/views/projects/yekan/pages/news-item.jpg',
	'/assets/views/projects/yekan/pages/resources.jpg',
	'/assets/views/projects/yekan/pages/resources-item.jpg',
	'/assets/views/projects/yekan/pages/gallery.jpg',
	'/assets/views/projects/yekan/pages/contact.jpg',
	'/assets/views/projects/yekan/pages/instructors-portal-edit.jpg',
];
</script>

<template>
	<div class="grid grid-cols-12 gap-4 yekan">
		<div class="col-span-12 md:col-span-4 p-0">
			<img src="/public/assets/views/projects/yekan/yekan.jpeg" alt="" class="w-full h-full">
		</div>
		<div class="col-span-12 md:col-span-8 intro flex justify-center items-center flex-col">
			<h1>Yekan</h1>
			<div class="subtitle">
				An All-In-One Solution to Managing Educational Institutions
			</div>
		</div>
		<div class="col-span-12 md:col-span-9 description">
			<p>
				Taking attendance is always a painful 10-minute experience! Creating tests for students and capturing their marks and entering it in your 20th-century marking system is even worse!
			</p>
			<p>
				Yekan is a multipurpose school administration platform for students, parents, teachers, school staff, and bus drivers to make their everyday interactions easier and safer. Yekan aims to eliminate the unnecessary effort put into everyday tasks of everyone at school by forming a powerful link between them.
			</p>
			<p>
				From an easy interface to create tests, surveys, and assignments and taking attendance, to tracking buses as they drop off students back home, Yekan is a one-stop-shop for everything a modern school needs.
			</p>
			<p>
				We developed Yekan in the beginning of middle school as we felt the need for a more efficient communication platform between all the parties in our school. We expanded into several other high schools in our area. Within two years, with the pressure of our studies building up and as we ran out of cash we had to shutdown our platform.
			</p>
			<p>
				In retrospect, the UI/UX of our platform seems outdated now with all the major players like Google Classroom and D2L but bear in mind this was in 2015, in Iran where every technology is behind a solid 5 years!
			</p>
		</div>
		<div class="col-span-12 md:col-span-3 screenshots">
			<Galleria
				:num-visible="3"
				:value="screenshots"
			>
				<template #item="slotProps">
					<img :src="slotProps.item" style="width: 100%; display: block">
				</template>
				<template #thumbnail="slotProps">
					<img :src="slotProps.item" style="width: 100%">
				</template>
			</Galleria>
		</div>
		<div class="col-span-12 metrics">
			<div class="title">
				2500+ Peak Active Monthly User Base
			</div>
		</div>
		<div class="col-span-12 md:col-span-4 p-0">
			<img src="/public/assets/views/projects/yekan/receiving-award.jpg" class="w-full h-full">
		</div>
		<div class="award col-span-12 md:col-span-8 flex justify-center items-center">
			<div class="col-span-12 md:col-span-6 p-4">
				Yekan won the Gold Medal and the Special Inventor Award at iCan 2018 International Invention Innovation Competition and became a permanent subsidiary of Marlik Institute of Innovation and Technology.
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.yekan {
	.intro {
		background-color: var(--p-primary-color);
		color: var(--p-primary-contrast-color);
		padding: 3em 1em;
		text-align: center;
		h1 {
			margin: 0;
			font-size: 7vw;
			font-weight: 300;
		}
	}
	.description {
		background-color: var(--p-surface-800);
		padding : 2em;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	.screenshots {
		padding : 0;
		background-color: var(--p-surface-700);
	}
	.award {
		background-repeat: no-repeat;
		background-size: cover;
		background-image: url('/assets/views/projects/yekan/award.jpg');
		font-size: 1.4em;
		line-height: 1.5em;
	}
	.metrics {
		text-align: center;
		padding: 3rem 1rem;
		background-color : var(--p-primary-color);
		color: var(--p-primary-contrast-color);
		font-size: 3vw;
	}
}
</style>
