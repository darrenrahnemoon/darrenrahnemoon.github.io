<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap }      from 'gsap';
import Menu          from './views/components/Menu.vue';
import Footer        from './views/components/Footer.vue';

onMounted(() => {
	gsap.from('.view', { marginLeft : 0 }); // HACK: see Menu timeline
});

</script>

<template>
	<div class="app">
		<Menu />
		<div class="view">
			<router-view />
			<Footer />
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
