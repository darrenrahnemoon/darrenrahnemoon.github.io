import { gsap }          from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Directive }     from 'vue';

gsap.registerPlugin(ScrollTrigger);

export const ScrollTriggerDirective: Directive = {
	mounted(element, binding) {
		element.style.position = 'relative';
		element.addEventListener('click', event => {
			event.preventDefault();

			gsap.fromTo(element, {
				...binding.value?.from,
			}, {
				scrollTrigger: {
					trigger : element,
					start   : 'top top',
					end     : 'center center',
					duration: 1,
					ease    : 'power2',
					...binding.value?.to,
				},
			});
		});
	},
};
