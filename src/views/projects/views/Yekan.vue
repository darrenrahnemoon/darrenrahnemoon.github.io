<script setup>
import Galleria from 'primevue/galleria';

const screenshots = [
	'/assets/projects/yekan/pages/main.jpg',
	'/assets/projects/yekan/pages/grades.jpg',
	'/assets/projects/yekan/pages/login.jpg',
	'/assets/projects/yekan/pages/academic-standing.jpg',
	'/assets/projects/yekan/pages/profile.jpg',
	'/assets/projects/yekan/pages/councilor-notes.jpg',
	'/assets/projects/yekan/pages/beheavior-notes.jpg',
	'/assets/projects/yekan/pages/instructors-portal.jpg',
	'/assets/projects/yekan/pages/news.jpg',
	'/assets/projects/yekan/pages/news-item.jpg',
	'/assets/projects/yekan/pages/resources.jpg',
	'/assets/projects/yekan/pages/resources-item.jpg',
	'/assets/projects/yekan/pages/gallery.jpg',
	'/assets/projects/yekan/pages/contact.jpg',
	'/assets/projects/yekan/pages/instructors-portal-edit.jpg',
];
</script>

<template>
	<div class="grid yekan">
		<div class="col-12 md:col-4 p-0">
			<img src="/public/assets/projects/yekan/yekan.jpeg" alt="" class="w-full h-full">
		</div>
		<div class="col-12 md:col-8 intro flex justify-content-center align-items-center flex-column">
			<h1>Yekan</h1>
			<div class="subtitle">
				An All-In-One Solution to Managing Educational Institutions
			</div>
		</div>
		<div class="col-12 md:col-9 description">
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
		<div class="col-12 md:col-3 screenshots">
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
		<div class="col-12 metrics">
			<div class="title">
				2500+ Peak Active Monthly User Base
			</div>
		</div>
		<div class="col-12 md:col-4 p-0">
			<img src="/public/assets/projects/yekan/receiving-award.jpg" class="w-full h-full">
		</div>
		<div class="award col-12 md:col-8 flex justify-content-center align-items-center">
			<div class="col-12 md:col-6 p-3">
				Yekan won the Gold Medal and the Special Inventor Award at iCan 2018 International Invention Innovation Competition and became a permanent subsidiary of Marlik Institute of Innovation and Technology.
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.yekan {
	.intro {
		background-color: var(--primary-color);
		color: var(--primary-color-text);
		padding: 3em 1em;
		text-align: center;
		h1 {
			margin: 0;
			font-size: 7vw;
			font-weight: 300;
		}
	}
	.description {
		background-color: var(--surface-800);
		padding : 2em;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	.screenshots {
		padding : 0;
		background-color: var(--surface-700);
	}
	.award {
		background-repeat: no-repeat;
		background-size: cover;
		background-image: url('/assets/projects/yekan/award.jpg');
		font-size: 1.4em;
		line-height: 1.5em;
	}
	.metrics {
		text-align: center;
		padding: 3rem 1rem;
		background-color : var(--primary-color);
		color: var(--primary-color-text);
		font-size: 3vw;
	}
}
</style>
