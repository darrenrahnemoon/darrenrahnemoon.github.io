<script setup lang="ts">
import Menu from './components/Menu.vue';
</script>

<template>
	<div class="grid">
		<Menu />
		<div class="view col">
			<router-view ></router-view>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.view {
	background-color: var(--shade-900);
	height: 100vh;
	overflow-y: scroll;
}
</style>