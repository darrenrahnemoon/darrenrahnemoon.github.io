<script setup lang="ts">
import _             from 'lodash';
import { projects }  from './projects';
import Projects      from '../components/Projects.vue';
import { gsap }      from 'gsap';
import { onMounted } from 'vue';

onMounted(() => {
	gsap.timeline()
		.from('.projects > h1', { x : -100, opacity : 0 })
		.from('.project', { y : 100, opacity : 0, stagger : 0.3 }, 0)
		.from('.project .p-card-title', { x : -100, opacity : 0, stagger : 0.3 }, 0)
		.from('.project .p-card-subtitle', { x : -100, opacity : 0, stagger : 0.3 }, 0)
		.from('.project .icon', { x : 10, opacity : 0, stagger : 0.3 }, 0);
});

</script>

<template>
	<Projects :projects="_.orderBy(projects, 'date', 'desc')" title="All Projects" />
</template>
