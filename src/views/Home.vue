<script setup lang="ts">
import Button from 'primevue/button';
</script>

<template>
	<div class="intro full-screen">
		<div class="col-12 md:col-5 text-primary">
			<img class="border-circle w-10 md:w-8 lg:w-6" src="../assets/views/home/avatar.jpeg">
			<h1 class="mb-0 mt-3 text-7xl font-light">Darren Rahnemoon</h1>
			<div class="m-0 font-light">Developer by day, Batman by Night</div>
		</div>
	</div>
	<div class="about full-screen grid text-primary surface-section">
		<div class="col-6">
			<p>
				Hi there!
			</p>
			<p>
				My name is Darren. I'm a software developer and I'm studying electrical engineering at University of Ottawa.
			</p>
			<p>
				When I'm not coding or designing some PCB or something, I spend my time with photography, painting, and reading random physics or ML papers.
			</p>
		</div>
		<div class="col-6">
			<router-link to="/journey">
				<Button label="View My Journey" icon="pi pi-fast-forward" outlined />
			</router-link>
			<Button label="View My Linked In" icon="pi pi-linkedin" outlined />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.intro {
	background-image: url('../assets/views/home/toronto.jpg');
	background-attachment: fixed;
	background-size: cover;
	background-repeat: no-repeat;
	flex-direction: column;
	text-align: center;
	border-top: 5px solid var(--primary-color);
	border-bottom: 5px solid var(--primary-color);

	.avatar {
		width: 50%;
		border-radius: 50%;
	}
}

.about {
	border-top: 5px solid var(--primary-color);
}
</style>