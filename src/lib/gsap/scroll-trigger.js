var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export var ScrollTriggerDirective = {
    mounted: function (element, binding) {
        element.style.position = 'relative';
        element.addEventListener('click', function (event) {
            var _a, _b;
            event.preventDefault();
            gsap.fromTo(element, __assign({}, (_a = binding.value) === null || _a === void 0 ? void 0 : _a.from), {
                scrollTrigger: __assign({ trigger: element, start: 'top top', end: 'center center', duration: 1, ease: 'power2' }, (_b = binding.value) === null || _b === void 0 ? void 0 : _b.to),
            });
        });
    },
};
