<template>
	<div class="p-8 bg-primary text-primary-contrast text-center">
		<h1>Construction Regulation AI Advisor</h1>
	</div>
	<div class="bg-surface-500 grid grid-cols-12 gap-4 p-6">
		<div class="col-span-12 mb-2">
			<p>
				Construction Regulations AI Advisor is an effective tool for safety inspectors in assisting them with daily inspections of a site. It's a web-based application for safety inspectors to quickly and easily access construction statutory regulations without crawling through thousands of pages of legal documents. It uses a Retrieval-Augmented Generation strategy to advise on problems while providing citations to specific pages in the regulations.
			</p>
		</div>
		<div v-for="feature in features" :key="feature.title" class="col-span-12 md:col-span-4">
			<Card class="h-full bg-surface-600">
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

	<div class="p-8 bg-surface-600">
		<Galleria
			:num-visible="3"
			:value="images"
			:show-item-navigators="true"
		>
			<template #item="slotProps">
				<img :src="slotProps.item" style="width: 100%; display: block">
			</template>
			<template #thumbnail="slotProps">
				<img :src="slotProps.item" style="width: 100%">
			</template>
		</Galleria>
	</div>
</template>

<script setup lang='ts'>
import Card from 'primevue/card';

const images = [
	'/assets/views/projects/safety-inspection-tool/ask-question.png',
	'/assets/views/projects/safety-inspection-tool/search.png',
	'/assets/views/projects/safety-inspection-tool/manage-documents.png',
	'/assets/views/projects/safety-inspection-tool/manage-sections.png',
];
const features = [
	{
		title  : 'Managing Legal References',
		content: 'Easily manage and upload legal documents, such as construction regulations, to the system. The application extracts the sections by context and allows users to search through them.',
		icon   : 'pi pi-file',
	},
	{
		title  : 'Searching Based on Relevance',
		content: 'The application uses a vector database to store the sections of the legal documents, allowing users to search for relevant sections based on their queries. It returns the most relevant sections based on the context of the question asked.',
		icon   : 'pi pi-search',
	},
	{
		title  : 'Asking Questions',
		content: 'Users can ask questions related to construction regulations, and the application provides answers based on the relevant sections of the legal documents with proper citations to the specific pages.',
		icon   : 'pi pi-question-circle',
	},
];

</script>
