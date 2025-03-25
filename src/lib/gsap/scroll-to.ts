import { gsap }           from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Directive }      from 'vue';

gsap.registerPlugin(ScrollToPlugin);

export const ScrollToDirective: Directive = {
	mounted(element: Element, binding) {
		element.addEventListener('click', event => {
			event.preventDefault();

			gsap.to(window, {
				duration: 1,
				scrollTo: binding.value,
				ease    : 'power2',
			});
		});
	},
};
