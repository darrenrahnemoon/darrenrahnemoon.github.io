<script setup lang="ts">
import { gsap }      from 'gsap';
import { onMounted } from 'vue';

onMounted(() => {
	gsap.timeline()
		.from('.rants-intro > h1', { x : -20, opacity : 0 })
		.from('.rants-intro > div', { x : -20, opacity : 0 });
});

</script>

<template>
	<div class="rants-intro">
		<h1>Rants</h1>
		<div>Gonna post my rants here soon...</div>
	</div>
</template>

<style lang="scss" scoped>
.rants-intro {
	padding : 2em;
	background-color: var(--surface-700);
	h1 {
		margin: 0 0 0.2em 0;
	}
}
</style>
