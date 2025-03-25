<script lang="ts" setup>
import Card            from 'primevue/card';
import { defineProps } from 'vue';
import { Project }     from '$/views/projects/projects';

defineProps<{
	project: Project;
}>();
</script>

<template>
	<Card class="project">
		<template #header>
			<div
				class="thumbnail"
				:style="{ 'background-image' : `url(${project.thumbnail})` }"
			>
				<div class="overlay">
					<div class="date">
						{{ project.date.toLocaleString('default', { month : 'long', year : 'numeric' }) }}
					</div>
				</div>
			</div>
		</template>
		<template #content>
			<div class="grid grid-cols-12 gap-4 flex-col-reverse md:flex-row">
				<div class="col-span-12 md:col-span-9">
					<div class="p-card-title">
						{{ project.name }}
					</div>
					<div class="p-card-subtitle">
						{{ project.summary }}
					</div>
				</div>
				<div class="col-span-12 md:col-span-3 icon text-left md:text-right">
					<div :class="project.icon" />
				</div>
			</div>
		</template>
	</Card>
</template>

<style lang="scss">
.project {
	border-top: 5px solid var(--p-primary-color);
	border-bottom: 5px solid var(--p-primary-color);
	height: 100%;
	display: flex;
	flex-direction: column;
	.p-card-body {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;

		.p-card-content {
			.grid {
				align-items: center;

				.icon {
					text-align: right;
					padding-right: 1em;
					margin-top: 0.2em;
					& > * {
						font-size: 3em;
					}
				}
			}
		}
	}
	.thumbnail {
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		aspect-ratio: 1 / 1.1;
		background-color: var(--p-surface-700);

		.overlay {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: rgba(0,0,0, 0.5);
			transition: all ease 0.5s;
			opacity: 0;

			.date {
				text-align: center;
				font-size: 5vw;
				pointer-events: none;
				color: var(--p-primary-color);
				opacity: 0.7;
			}
		}

	}
	&:hover {
		.thumbnail .overlay {
			opacity: 1;
		}
	}
}
</style>
