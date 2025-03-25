import { defineConfig }     from 'vite';
import vue                  from '@vitejs/plugin-vue';
import path                 from 'path';
import Components           from 'unplugin-vue-components/vite';
import { PrimeVueResolver } from '@primevue/auto-import-resolver';
import tailwindcss          from '@tailwindcss/vite';

export default defineConfig({
	resolve: {
		alias: {
			$: path.resolve(__dirname, './src'),
		},
	},
	plugins: [
		vue({
			template: {
				compilerOptions: {
					isCustomElement: tag => [ 'iconify-icon' ].includes(tag),
				},
			},
		}),
		tailwindcss(),
		Components({
			resolvers: [
				PrimeVueResolver(),
			],
		}),
	],
});
