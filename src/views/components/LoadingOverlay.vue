<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
	visible?: boolean;
}>();
</script>

<template>
	<div
		class="loading-overlay"
		:class="{
			visible,
		}"
	>
		<svg
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			x="0px"
			y="0px"
			xml:space="preserve"
			class="custom-loader"
		>
			<rect transform="translate(0) rotate(180 3 50)">
				<animate
					attributeName="height"
					attributeType="XML"
					dur="1s"
					values="30; 100; 30"
					repeatCount="indefinite"
				/>
			</rect>
			<rect x="17" transform="translate(0) rotate(180 20 50)">
				<animate
					attributeName="height"
					attributeType="XML"
					dur="1s"
					values="30; 100; 30"
					repeatCount="indefinite"
					begin="0.1s"
				/>
			</rect>
			<rect x="40" transform="translate(0) rotate(180 40 50)">
				<animate
					attributeName="height"
					attributeType="XML"
					dur="1s"
					values="30; 100; 30"
					repeatCount="indefinite"
					begin="0.3s"
				/>
			</rect>
			<rect x="60" transform="translate(0) rotate(180 58 50)">
				<animate
					attributeName="height"
					attributeType="XML"
					dur="1s"
					values="30; 100; 30"
					repeatCount="indefinite"
					begin="0.5s"
				/>
			</rect>
			<rect x="80" transform="translate(0) rotate(180 76 50)">
				<animate
					attributeName="height"
					attributeType="XML"
					dur="1s"
					values="30; 100; 30"
					repeatCount="indefinite"
					begin="0.1s"
				/>
			</rect>
			<rect x="90" transform="translate(0) rotate(180 89 50)">
				<animate
					attributeName="height"
					attributeType="XML"
					dur="1s"
					values="30; 100; 30"
					repeatCount="indefinite"
					begin="0.3s"
				/>
			</rect>
		</svg>
		<div class="loading-text">
			LOADING
		</div>
	</div>
</template>

<style lang="scss" scoped>
.loading-overlay {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	opacity: 0;
	pointer-events: none;
	background-color: var(--p-surface-900);
	transition: all ease 1s;
	z-index: 1000;

	&.visible {
		pointer-events: all;
		opacity: 1;
	}
	svg {
		width : 100px;
		height : 100px;

		rect {
			width : 3px;
			height : 100%;
			fill : var(--p-primary-color);
		}
	}

	.loading-text {
		font-size: 1.3em;
		text-align: center;
	}
}
</style>
