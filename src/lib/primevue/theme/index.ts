import { merge }          from 'lodash';
import Aura               from '@primevue/themes/aura';
import { definePreset }   from '@primevue/themes';
import { generatedTheme } from './generated';
import './theme.scss';

export const theme = definePreset(Aura, merge(generatedTheme, {
	semantic: {
		formField: {
			sm: {
				paddingX: '0.3125rem',
				paddingY: '0.3rem',
			},
		},
		colorScheme: {
			dark: {
				surface: {
					0  : '#555555',
					50 : '#4d4d4d',
					100: '#444444',
					200: '#3b3b3b',
					300: '#333333',
					400: '#2b2b2b',
					500: '#222222',
					600: '#191919',
					700: '#111111',
					800: '#080808',
					900: '#000000',
				},
				text: {
					color          : '{primary.500}',
					hoverColor     : '{primary.600}',
					mutedColor     : '{primary.400}',
					hoverMutedColor: '{primary.400}',
				},
				content: {
					hoverBackground: '{surface.600}',
					borderColor    : '{surface.600}',
					background     : '{surface.700}',
				},
				formField: {
					background        : '{surface.800}',
					iconColor         : '{surface.200}',
					disabledColor     : '{surface.300}',
					disabledBackground: '{surface.600}',
				},
			},
		},
	},
	components: {
		menubar: {
			background : '{surface.900}',
			borderColor: '{surface.900}',
			padding    : '0.25rem',
			baseItem   : {
				padding: '0.25rem 0.5rem',
			},
			item: {
				padding: '0.25rem 0.5rem',
			},
			submenu: {
				padding: 0,
			},
		},
		inputgroup: {
			addon: {
				padding : '0 0.75rem',
				minWidth: 'none',
			},
		},
		fieldset: {
			padding: '0 0.5rem 0.5rem 0.5rem',
			legend : {
				padding: '0.25rem 0.5rem',
			},
		},
		colorpicker: {
			preview: {
				width : '2rem',
				height: '100%',
			},
		},
		treetable: {
			headerCell: {
				background: '{surface.800}',
			},
		},
		datatable: {
			headerCell: {
				background: '{surface.800}',
			},
		},
	},
}));
