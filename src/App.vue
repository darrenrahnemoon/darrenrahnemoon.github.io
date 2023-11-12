<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap }      from 'gsap';
import Menu          from './views/components/Menu.vue';

onMounted(() => {
	gsap.from('.view', { marginLeft : 0 }); // HACK: see Menu timeline
});

</script>

<template>
	<div class="app">
		<Menu />
		<div class="view">
			<router-view />
		</div>
	</div>
</template>

<style lang="scss">
.app {
	.view {
		margin-left: 80px;
	}
}
</style>
