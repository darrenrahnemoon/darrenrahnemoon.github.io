<script setup lang="ts">
import Timeline      from 'primevue/timeline';
import { journey }   from './journey';
import { onMounted } from 'vue';
import { gsap }      from 'gsap';

onMounted(() => {
	gsap.timeline()
		.from('.journey-intro h1', { x : -10, opacity : 0 }, 1)
		.from('.journey-intro div', { x : 10, opacity : 0 }, 1);

	const events = document.getElementsByClassName('p-timeline-event');
	for (let i = 0; i < events.length; i++) {
		const event = events.item(i);
		gsap.timeline({
			scrollTrigger : {
				trigger       : event,
				start         : '+=150% bottom',
				end           : '+=10%',
				toggleActions : 'play none none reverse',
			},
		})
			.from(
				event.querySelector('.p-timeline-event-marker'),
				{ scale : 0.1, opacity : 0 }
			)
			.from(
				event.querySelector('.date'),
				{ x : 100 * (i % 2 == 0 ? -1 : 1), opacity : 0 },
				0
			)
			.from(
				event.querySelector('.description'),
				{ x : 100 * (i % 2 == 0 ? 1 : -1), opacity : 0 },
				0
			);
	}
});

</script>

<template>
	<div class="journey-intro">
		<h1>My Journey</h1>
		<div>
			Just to get you up to speed with what I'm up to these days XD
		</div>
	</div>
	<div class="journey full-screen parallax">
		<Timeline :value="journey" align="alternate">
			<template #content="{ item }">
				<div class="description">
					{{ item.description }}
				</div>
			</template>
			<template #opposite="{ item }">
				<div class="date">
					{{ item.date.toLocaleString('default', { month : 'long', year : 'numeric' }) }}
				</div>
			</template>
		</Timeline>
	</div>
</template>

<style lang="scss">
@use 'primeflex/core/variables' as *;
.journey-intro {
	padding : 2em;
	background-color: var(--surface-800);
	h1 {
		margin: 0 0 0.2em 0;
	}
}
.journey {
	background-image: url('/assets/views/journey/journey.jpeg');
	position: relative;

	.p-timeline {
		.p-timeline-event {
			align-items: center;
			margin: 2em 0 2em 0;

			.p-timeline-event-marker {
				width: 1.5rem;
				height: 1.5rem;
			}
			.description {
				font-size: 2em;
				font-weight: 800;
			}
			.date {
				font-size: 2em;
				font-weight: 800;
				opacity:  0.5;
			}

			@media screen and (max-width : $md) {
				flex-direction: column;
				.p-timeline-event-marker {
					margin : 0.5em 0 0.5em 0;
					width: 1rem;
					height: 1rem;
				}
				.description, .date {
					font-size: 1.2rem;
					text-align: center;
				}
			}
		}
	}
}
</style>
./journey/journey
