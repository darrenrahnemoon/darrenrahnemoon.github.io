<template>
	<div class="grid grid-cols-12 gap-4">
		<div class="col-span-12 md:col-span-4 p-0">
			<img src="/public/assets/views/projects/argus/argus.png" alt="" class="w-full h-full">
		</div>
		<div class="intro col-span-12 md:col-span-8 intro flex justify-center items-center flex-col text-gray-900 bg-primary-500">
			<h1>
				Argus
			</h1>
			<div class="subtitle">
				An Instrumentation Sensor Suite for Rockets and UAVs
			</div>
		</div>
		<div class="col-span-12 p-8 bg-surface-600">
			<p>
				Argus is a series of sensor interface boards that can be used to collect environmental data on a rocket or a UAV and transmit that data to a main flight computer to be sent to the ground station.
			</p>
		</div>
		<div class="col-span-12 grid grid-cols-12">
			<div v-for="feature in features" :key="feature.title" class="col-span-12 md:col-span-4 p-6">
				<Card class="h-full">
					<template #header>
						<div class="text-center pt-12">
							<span :class="feature.icon" class="text-7xl" />
						</div>
					</template>
					<template #title>
						<div class="mb-2 text-2xl text-center">
							{{ feature.title }}
						</div>
					</template>
					<template #content>
						<div class="text-sm leading-loose">
							{{ feature.content }}
						</div>
					</template>
				</Card>
			</div>
		</div>
		<div class="col-span-12 p-8 bg-surface-700">
			<p class="text-xl text-center my-3">
				Argus comes in three different variants, each specialized to interface with a specific type of sensor:
			</p>
			<div class="grid grid-cols-12">
				<div v-for="variant in variants" :key="variant.title" class="col-span-12 md:col-span-4 p-6">
					<Card class="h-full bg-surface-600">
						<template #header>
							<div class="text-center pt-12">
								<span :class="variant.icon" class="text-7xl" />
							</div>
						</template>
						<template #title>
							<div class="mb-2 text-2xl text-center">
								{{ variant.title }}
							</div>
						</template>
						<template #content>
							<div class="text-sm leading-loose mb-5">
								{{ variant.content }}
							</div>
							<Galleria
								:num-visible="3"
								:value="variant.images"
							>
								<template #item="slotProps">
									<img :src="slotProps.item" style="width: 100%; display: block">
								</template>
								<template #thumbnail="slotProps">
									<img :src="slotProps.item" style="width: 100%">
								</template>
							</Galleria>
						</template>
					</Card>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang='ts'>
import Card from 'primevue/card';

const features = [
	{
		title  : 'Powerful Analog Digital Conversion',
		content: 'Boasting a 32-bit 38kSamples/s ADC with several noise suppression measures Argus can collect data from a wide range of sensors with high accuracy.',
		icon   : 'pi pi-wave-pulse',
	},
	{
		title  : 'Data Streaming Options',
		content: 'Argus provides a variety of data streaming options including CAN, UART, and SPI to easily interface with a main flight computer or other devices.',
		icon   : 'pi pi-arrow-circle-down',
	},
	{
		title  : 'Local Data Storage',
		content: 'While transmitting the live data through one of the available interfaces, Argus will always store data locally on an SD card for later retrieval and analysis in the event of a communication failure.',
		icon   : 'pi pi-database',
	},
];

const variants = [
	{
		title  : 'Argus Strain',
		icon   : 'pi pi-refresh',
		content: 'Argus Strain is designed to interface with strain gauges and collect data on the structural integrity of a rocket or UAV during flight. Each board provides 10 channels with the ability to customize the configuration of the wheatstone bridge to suit the specific strain gauge being used.',
		images : [
			'/public/assets/views/projects/argus/strain/3d.png',
			'/public/assets/views/projects/argus/strain/top-3d.png',
			'/public/assets/views/projects/argus/strain/top-2d.png',
			'/public/assets/views/projects/argus/strain/bottom-3d.png',
			'/public/assets/views/projects/argus/strain/bottom-2d.png',
		],
	},
	{
		title  : 'Argus Pressure',
		icon   : 'pi pi-gauge',
		content: 'Argus Pressure is designed to interface with 8 isolated Amphenol pressure sensors and collect data on the regional static pressure of the rocket. Each board comes with an aluminum manifold to isolate each channel from each other. The aluminum manifold also maintains a steady temperature using a cartridge heater and an NTC thermistor driven by the board to ensure accurate readings.',
		images : [
			'/public/assets/views/projects/argus/pressure/3d.png',
			'/public/assets/views/projects/argus/pressure/3d-with-manifold.png',
			'/public/assets/views/projects/argus/pressure/top-3d.png',
			'/public/assets/views/projects/argus/pressure/top-2d.png',
			'/public/assets/views/projects/argus/pressure/bottom-3d.png',
			'/public/assets/views/projects/argus/pressure/bottom-2d.png',
		],
	},
	{
		title  : 'Argus Temperature',
		icon   : 'pi pi-sun',
		content: 'Argus Temperature is designed to interface with 8 thermocouples and collect data on the temperature of the rocket or UAV during flight. The cold junction temperature is measured using a thermistor and compensated for in the readings. ',
		images : [
			'/public/assets/views/projects/argus/temperature/3d.png',
			'/public/assets/views/projects/argus/temperature/top-3d.png',
			'/public/assets/views/projects/argus/temperature/top-2d.png',
			'/public/assets/views/projects/argus/temperature/bottom-3d.png',
			'/public/assets/views/projects/argus/temperature/bottom-2d.png',
		],
	},
];

</script>

<style scoped lang="scss">
.intro {
	background-color: var(--p-primary-color);
	color: var(--p-primary-contrast-color);
	padding: 3em 1em;
	text-align: center;

	h1 {
		margin: 0;
		font-size: 7vw;
		font-weight: 300;
	}
}
</style>
