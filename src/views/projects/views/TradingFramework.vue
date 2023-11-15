<script setup lang='ts'>
import Card from 'primevue/card';

const features = [
	{
		title   : 'Data Warehousing',
		content : "MC provides integration with any broker by allowing them to implement a \"Repository\" class. Once devs have implemented the repository, MC can take care of gradually collecting all of the brokers's instrument data in one central database:",
		icon    : 'pi pi-database',
	},
	{
		title   : 'Reusable Strategy Design',
		content : 'MC provides a "Strategy" class that comes with all the features developers need to implement their trading strategy. Hindsight is baked into what the strategy implementation sees. The same strategy then can be tested using the "SimulationBroker" and deployed live on any "Broker" class implementation',
		icon    : 'pi pi-refresh',
	},
	{
		title   : 'ML Utilities',
		content : 'Extending Tensorflow\'s OOP design, the multi-gpu/multiprocess and hyper-optimized implementation of MC model trainer allows training large feature sets on some of the weakest devices.',
		icon    : 'pi pi-wrench',
	},
];

</script>

<template>
	<div class="p-5 text-900 bg-primary text-center">
		<h1>MC Trading Framework</h1>
	</div>
	<div class="surface-700 grid">
		<div class="col-12 p-5">
			<p>Magic Crystal (MC for short...Finance Bro Reference) is a trading framework written in python with a focus on modularity and customizability. MC consists of {{ features.length }} main features:</p>
		</div>
		<div v-for="feature in features" :key="feature.title" class="col-12 md:col-4 p-4">
			<Card class="h-full">
				<template #header>
					<div class="text-center pt-6">
						<span :class="feature.icon" class="text-7xl" />
					</div>
				</template>
				<template #title>
					<div class="mb-5 text-2xl text-center">
						{{ feature.title }}
					</div>
				</template>
				<template #content>
					<div class="text-sm line-height-4">
						{{ feature.content }}
					</div>
				</template>
			</Card>
		</div>
	</div>

	<div class="text-center p-5 surface-800">
		<a class="p-component p-button p-button-outlined" href="https://github.com/darrenrahnemoon/trading" target="_blank">
			View on Github
		</a>
	</div>
</template>
