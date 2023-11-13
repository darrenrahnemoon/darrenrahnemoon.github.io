<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { gsap }           from 'gsap';
import Button             from 'primevue/button';
import Projects           from './components/Projects.vue';
import { projects }       from './projects/projects';

const contactMethods = ref([
	{ icon : 'facebook',	path : 'https://www.facebook.com/darrenrahnemoon/' },
	{ icon : 'twitter', 	path : 'https://www.twitter.com/darrenrahnemoon/' },
	{ icon : 'linkedin',	path : 'https://www.linkedin.com/in/darrenrahnemoon/' },
	{ icon : 'instagram',	path : 'https://www.instagram.com/darrenrahnemoon/' },
	{ icon : 'envelope',	path : 'mailto:darrenrahnemoon@gmail.com' },
]);

onMounted(function() {
	const scrollTrigger = {
		start : 'top +=40%',
		end   : '+=20% +=20%',
		scrub : 1,
	};

	gsap.timeline()
		.from('.splash-screen .avatar', { y : -100, opacity : 0 }, 0)
		.from('.splash-screen .name', { x : -100, opacity : 0 }, 1)
		.from('.splash-screen .slogan', { x : 100, opacity : 0 }, 1)
		.from('.splash-screen .go-to-intro', { y : 100, opacity : 0 });

	gsap.timeline({ scrollTrigger : { trigger : '.intro', ...scrollTrigger } })
		.from('.intro .intro-text', { opacity : 0, x : 100 })
		.fromTo('.intro .contact-method', { opacity : 0, x : 10 }, { opacity : 1, x : 0, stagger : 0.4 });

	gsap.timeline({ scrollTrigger : { trigger : '.projects', ...scrollTrigger } })
		.from('.projects > h1', { opacity : 0, x : 100 }, 1)
		.from('.project', { y : 100, opacity : 0, stagger : 1, duration : 3 }, 2)
		.from('.project .p-card-title, .project .p-card-subtitle', { x : -100, opacity : 0, stagger : 1, duration : 2 }, 3)
		.from('.project .icon', { x : 10, opacity : 0, stagger : 1, duration : 2 }, 3);
});
</script>

<template>
	<div class="splash-screen full-screen parallax">
		<div class="col-12 md:col-5">
			<img class="avatar w-10 md:w-9 lg:w-6" src="/assets/views/home/avatar.jpeg">
			<h1 class="name">
				Darren Rahnemoon
			</h1>
			<div class="slogan">
				Developer by day, Batman by Night
			</div>
			<Button
				v-scroll-to="'.intro'"
				text
				icon="pi pi-chevron-down"
				rounded
				size="small"
				class="go-to-intro"
			/>
		</div>
	</div>
	<div class="intro full-screen parallax p-2 md:p-4">
		<div class="intro-text col-12 md:col-4">
			<p>
				Howdy!
			</p>
			<p>
				My name is Darren. I'm a software developer and I'm studying electrical engineering.
			</p>
			<p>
				When I'm not coding, designing a PCB or doing some CAD work, I spend my time with photography, painting, and reading random physics or ML papers.
			</p>
			<p>
				I figured I should throw up some of my work and my life experiences on this website and share it with the world so here it goes! XD
			</p>
			<br>
			<p>
				You can reach out to me via:
			</p>
			<p>
				<a
					v-for="method in contactMethods"
					:key="method.icon"
					class="contact-method p-button p-button-outlined"
					target="_blank"
					:href="method.path"
				>
					<span class="p-button-icon pi" :class="'pi-' + method.icon" />
				</a>
			</p>
		</div>
	</div>
	<Projects
		title="My Latest Projects"
		:projects="projects.slice(0, 3)"
	>
		<template #after>
			<router-link to="/projects">
				<Button
					label="View All Projects"
					outlined
					size="small"
					class="mb-6"
				/>
			</router-link>
		</template>
	</Projects>
</template>

<style lang="scss" scoped>
.splash-screen {
	background-image: url('/assets/views/home/toronto.jpg');
	border-top: 5px solid var(--primary-color);
	text-align: center;

	.avatar {
		border-radius: 50%;
	}

	.name {
		margin-bottom: 0;
		margin-top: 0.5em;
		font-size: 3em;
	}

	.go-to-intro {
		margin-top: 1em;
	}
}

.intro {
	background-image: url('/assets/views/home/eagles-nest.jpeg');
	align-items: flex-end;

	.intro-text {
		background-color: rgba(0,0,0, 0.6);
		padding : 2em;

		.contact-method {
			margin-right: 0.5em;
			margin-bottom: 0.5em;
		}
	}
}
</style>
./projects/projects
