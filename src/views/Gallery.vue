<script setup lang="ts">
import _             from 'lodash';
import Image         from 'primevue/image';
import { gsap }      from 'gsap';
import { onMounted } from 'vue';

const count = 94;

onMounted(() => {
	gsap.timeline()
		.from('.gallery-intro h1', { x : -10, opacity : 0 }, 1)
		.from('.gallery-intro div', { x : 10, opacity : 0 }, 1);

	gsap.timeline({
		scrollTrigger : {
			trigger : '.gallery',
			scrub   : true,
			start   : 'top +=90%',
			end     : 'bottom',
		},
	})
		.from('.p-image', { x : -100, opacity : 0, stagger : 0.1 });
});

</script>

<template>
	<div class="gallery-intro">
		<h1>Gallery</h1>
		<div>
			Here's some of the shots that I've taken over the years :)
		</div>
	</div>
	<div class="gallery">
		<Image
			v-for="i in _.range(count, 1, -1)"
			:key="i"
			:src="`/assets/views/gallery/${i}.jpeg`"
			preview
			loading="lazy"
		/>
	</div>
</template>

<style lang="scss">
.gallery-intro {
	padding : 2em;
	background-color: var(--surface-800);
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
			height: 20rem;
			flex-grow: 1;
			object-fit: cover;
		}
	}
}
</style>
