<template>
	<div class="gallery-intro">
		<h1>Gallery</h1>
		<div>
			I love climbing and hiking and exploring the nature. Here's some of the shots that I've taken over the past few years.
		</div>
	</div>
	<div class="gallery">
		<Image
			v-for="i in _.shuffle(_.range(count, 1, -1))"
			:key="i"
			:src="`/assets/views/gallery/${i}.jpeg`"
			preview
			:pt="{
				image : 'w-full h-10em! sm:w-auto sm:h-5em',
			}"
			loading="lazy"
		/>
	</div>
</template>

<script setup lang="ts">
import _             from 'lodash';
import Image         from 'primevue/image';
import { gsap }      from 'gsap';
import { onMounted } from 'vue';

const count = 94;
onMounted(() => {
	gsap.timeline()
		.from('.gallery-intro h1', { x: -10, opacity: 0 })
		.from('.gallery-intro div', { x: 10, opacity: 0 })
		.from('.p-image', { x: 100, opacity: 0, stagger: 0.1 });
});

</script>

<style lang="scss">
.gallery-intro {
	padding : 2em;
	background-color: var(--p-surface-600);
	h1 {
		margin: 0 0 0.2em 0;
	}
}

.gallery {
	display: flex;
	flex-wrap: wrap;

	.p-image {
		display: flex;
		flex-grow: 1;
		margin: 0.3em;
		img {
			flex-grow: 1;
			object-fit: cover;
			width : auto;
			height: 10em;
		}
	}
}
</style>
