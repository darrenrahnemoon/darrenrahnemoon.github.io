<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { gsap }           from 'gsap';
import LoadingOverlay     from './views/components/LoadingOverlay.vue';
import Menu               from './views/components/Menu.vue';
import Footer             from './views/components/Footer.vue';

const isLoading = ref(true);
onMounted(() => {
	setTimeout(() => {
		isLoading.value = false;
	}, 200);
	gsap.from('.view', { marginLeft : 0 }); // HACK: see Menu timeline
});


</script>

<template>
	<LoadingOverlay :visible="isLoading" />
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
