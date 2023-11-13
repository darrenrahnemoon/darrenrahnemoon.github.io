<script setup lang="ts">
import { projects }  from './projects';
import Projects      from '../components/Projects.vue';
import { gsap }      from 'gsap';
import { onMounted } from 'vue';

onMounted(() => {
	const projectElements = document.getElementsByClassName('project');
	for (const projectElement of projectElements) {
		gsap.timeline({
			scrollTrigger : {
				trigger       : projectElement,
				start         : 'top center',
				toggleActions : 'play none none reverse',
			},
			delay : 0,
		})
			.from(projectElement, { y : 100, opacity : 0 }, 0)
			.from(projectElement.querySelector('.p-card-title'), { x : -100, opacity : 0 }, 1)
			.from(projectElement.querySelector('.p-card-subtitle'), { x : -100, opacity : 0 }, 1)
			.from(projectElement.querySelector('.icon'), { x : 10, opacity : 0 }, 2);
	}
});

</script>

<template>
	<Projects :projects="projects" title="All Projects" />
</template>
