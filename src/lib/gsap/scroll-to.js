import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);
export var ScrollToDirective = {
    mounted: function (element, binding) {
        element.addEventListener('click', function (event) {
            event.preventDefault();
            gsap.to(window, {
                duration: 1,
                scrollTo: binding.value,
                ease: 'power2',
            });
        });
    },
};
