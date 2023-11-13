<script setup lang="ts">
import { defineAsyncComponent, onMounted, shallowRef } from 'vue';
import { useRoute }                                    from 'vue-router';
import { projects }                                    from './projects';
import NotFound                                        from '../404.vue';

const route = useRoute();
const project = shallowRef(null);

onMounted(() => {
	const page = projects.find(project => project.slug === route.params.slug)?.page;
	if (page) {
		project.value = defineAsyncComponent(page);
	}
	else {
		project.value = NotFound;
	}
});
</script>

<template>
	<div class="project">
		<component :is="project" v-if="project" />
	</div>
</template>
