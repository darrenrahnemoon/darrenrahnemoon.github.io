<script setup lang="ts">
import { defineAsyncComponent, onMounted, shallowRef } from 'vue';
import { useRoute }                                    from 'vue-router';
import { projects }                                    from './projects';

const route = useRoute();
const project = shallowRef(null);

onMounted(() => {
	const page = defineAsyncComponent(projects.find(project => project.slug === route.params.slug)?.page);
	project.value = page;
});
</script>

<template>
	<div class="project">
		<component :is="project" v-if="project" />
	</div>
</template>
