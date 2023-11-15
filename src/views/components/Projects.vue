<script setup lang="ts">
import { defineProps } from 'vue';
import ProjectCard     from './ProjectCard.vue';
import { Project }     from '$/views/projects/projects';

defineProps<{
	title?: string;
	projects: Project[];
}>();
</script>

<template>
	<div class="projects parallax full-screen">
		<h1>{{ title || 'Projects' }}</h1>
		<div class="grid">
			<div v-for="project in projects" :key="project.name" class="col-12 md:col-6 lg:col-4">
				<router-link v-if="project.component" :to="`/project/${project.slug}`">
					<ProjectCard :project="project" />
				</router-link>
				<a v-else :href="project.url" target="_blank">
					<ProjectCard :project="project" />
				</a>
			</div>
		</div>
		<slot name="after" />
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
			padding: 1em;
		}
	}
}

</style>
