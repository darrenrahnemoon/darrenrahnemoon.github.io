<template>
	<div class="splash-screen full-screen parallax flex align-center justify-center">
		<img class="avatar w-2/3 md:w-1/4" src="/assets/views/home/avatar.jpeg">
		<h1 class="name">
			Darren Rahnemoon
		</h1>
		<div class="slogan">
			Software Developer by Day, Electrical Engineer by Night
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
	<div
		class="intro full-screen parallax p-2 md:p-6 flex-row-reverse"
	>
		<div class="intro-text w-full sm:w-1/3">
			<p>
				Howdy!
			</p>
			<br>
			<p>
				My name is Darren. I'm a software developer and electrical engineer based in Canada.
			</p>
			<br>
			<p>
				I started my journey in full stack software development in 2015 and have been a part of various startups while wearing many different hats. Alongside my software journey, I've got a bachelor's of electrical engineering with specialization in microwave and photonics and have worked on several competitive rocketry and satellite projects.
			</p>
			<br>
			<p>
				I created this website to showcase my projects and share my life experiences with the world.
			</p>
			<br>
			<p class="pb-1">
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
		title="Recent Projects"
		:projects="projects.slice(0, 3)"
	>
		<template #after>
			<router-link to="/projects">
				<Button
					label="View All Projects"
					variant="outlined"
					class="mb-12"
				/>
			</router-link>
		</template>
	</Projects>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { gsap, Power0 }   from 'gsap';
import Button             from 'primevue/button';
import Projects           from '../components/Projects.vue';
import { projects }       from '../projects/projects';

const contactMethods = ref([
	{ icon: 'facebook',	path: 'https://www.facebook.com/darrenrahnemoon/' },
	{ icon: 'twitter', 	path: 'https://www.twitter.com/darrenrahnemoon/' },
	{ icon: 'linkedin',	path: 'https://www.linkedin.com/in/darrenrahnemoon/' },
	{ icon: 'instagram',	path: 'https://www.instagram.com/darrenrahnemoon/' },
	{ icon: 'envelope',	path: 'mailto:darrenrahnemoon@gmail.com' },
]);

onMounted(function() {
	const scrollTrigger = {
		start: 'top +=40%',
		end  : '+=20% +=20%',
		scrub: 3,
	};

	gsap.timeline({ ease: Power0.easeInOut })
		.delay(1)
		.from('.splash-screen .avatar', { y: -100, opacity: 0 }, 0)
		.from('.splash-screen .name', { x: -100, opacity: 0 }, 1)
		.from('.splash-screen .slogan', { x: 100, opacity: 0 }, 1)
		.from('.splash-screen .go-to-intro', { y: 100, opacity: 0 });

	gsap.timeline({ scrollTrigger: { trigger: '.intro', ...scrollTrigger } })
		.from('.intro .intro-text', { opacity: 0, x: 100 })
		.fromTo('.intro .contact-method', { opacity: 0, x: 10 }, { opacity: 1, x: 0, stagger: 0.4 });

	gsap.timeline({ scrollTrigger: { trigger: '.projects', ...scrollTrigger } })
		.from('.projects > h1', { opacity: 0, x: 100 }, 1)
		.from('.project', { y: 100, opacity: 0, stagger: 1, duration: 3 }, 2)
		.from('.project .p-card-title, .project .p-card-subtitle', { x: -100, opacity: 0, stagger: 1, duration: 2 }, 3)
		.from('.project .icon', { x: 10, opacity: 0, stagger: 1, duration: 2 }, 3);
});
</script>

<style lang="scss" scoped>
.splash-screen {
	background-image: url('/assets/views/home/toronto.jpg');
	border-top: 5px solid var(--p-primary-color);
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
