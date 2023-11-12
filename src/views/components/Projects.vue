<script setup lang="ts">
import { defineProps } from 'vue';
import ProjectCard     from './ProjectCard.vue';
import { Project }     from '../projects/types';

defineProps<{
	title: string;
	projects: Project[];
}>();
</script>

<template>
	<div class="projects parallax full-screen">
		<h1>{{ title }}</h1>
		<div class="grid">
			<div v-for="project in projects" :key="project.name" class="col-4">
				<router-link :to="`/project/${project.slug}`">
					<ProjectCard :project="project" />
				</router-link>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.projects {
	background-image: url('/assets/views/home/sky.jpg');

	& > h1 {
		padding-top: 1.5em;
		padding-bottom: 1.5em;
		text-align: center;
	}

	& > .grid {
		width: 100%;
		padding: 0 1em 2em 1em;

		& > div {
			padding: 0 1em 0 1em;
		}
	}
}

</style>
