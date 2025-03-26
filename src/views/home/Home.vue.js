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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { ref, onMounted } from 'vue';
import { gsap, Power0 } from 'gsap';
import Button from 'primevue/button';
import Projects from '../components/Projects.vue';
import { projects } from '../projects/projects';
var contactMethods = ref([
    { icon: 'facebook', path: 'https://www.facebook.com/darrenrahnemoon/' },
    { icon: 'twitter', path: 'https://www.twitter.com/darrenrahnemoon/' },
    { icon: 'linkedin', path: 'https://www.linkedin.com/in/darrenrahnemoon/' },
    { icon: 'instagram', path: 'https://www.instagram.com/darrenrahnemoon/' },
    { icon: 'envelope', path: 'mailto:darrenrahnemoon@gmail.com' },
]);
onMounted(function () {
    var scrollTrigger = {
        start: 'top +=40%',
        end: '+=20% +=20%',
        scrub: 3,
    };
    gsap.timeline({ ease: Power0.easeInOut })
        .delay(1)
        .from('.splash-screen .avatar', { y: -100, opacity: 0 }, 0)
        .from('.splash-screen .name', { x: -100, opacity: 0 }, 1)
        .from('.splash-screen .slogan', { x: 100, opacity: 0 }, 1)
        .from('.splash-screen .go-to-intro', { y: 100, opacity: 0 });
    gsap.timeline({ scrollTrigger: __assign({ trigger: '.intro' }, scrollTrigger) })
        .from('.intro .intro-text', { opacity: 0, x: 100 })
        .fromTo('.intro .contact-method', { opacity: 0, x: 10 }, { opacity: 1, x: 0, stagger: 0.4 });
    gsap.timeline({ scrollTrigger: __assign({ trigger: '.projects' }, scrollTrigger) })
        .from('.projects > h1', { opacity: 0, x: 100 }, 1)
        .from('.project', { y: 100, opacity: 0, stagger: 1, duration: 3 }, 2)
        .from('.project .p-card-title, .project .p-card-subtitle', { x: -100, opacity: 0, stagger: 1, duration: 2 }, 3)
        .from('.project .icon', { x: 10, opacity: 0, stagger: 1, duration: 2 }, 3);
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "splash-screen full-screen parallax flex align-center justify-center" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)(__assign({ class: "avatar w-2/3 md:w-1/4" }, { src: "/assets/views/home/avatar.jpeg" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)(__assign({ class: "name" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "slogan" }));
var __VLS_0 = {}.Button;
/** @type {[typeof __VLS_components.Button, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ text: true, icon: "pi pi-chevron-down", rounded: true, size: "small" }, { class: "go-to-intro" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ text: true, icon: "pi pi-chevron-down", rounded: true, size: "small" }, { class: "go-to-intro" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
__VLS_asFunctionalDirective(__VLS_directives.vScrollTo)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: ('.intro') }), null, null);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "intro full-screen parallax p-2 md:p-6 flex-row-reverse" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "intro-text w-full sm:w-1/3" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "pb-1" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.contactMethods)); _i < _a.length; _i++) {
    var method = _a[_i][0];
    __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign(__assign({ key: (method.icon) }, { class: "contact-method p-button p-button-outlined" }), { target: "_blank", href: (method.path) }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span)(__assign({ class: "p-button-icon pi" }, { class: ('pi-' + method.icon) }));
}
/** @type {[typeof Projects, typeof Projects, ]} */ ;
// @ts-ignore
var __VLS_4 = __VLS_asFunctionalComponent(Projects, new Projects({
    title: "Recent Projects",
    projects: (__VLS_ctx.projects.slice(0, 3)),
}));
var __VLS_5 = __VLS_4.apply(void 0, __spreadArray([{
        title: "Recent Projects",
        projects: (__VLS_ctx.projects.slice(0, 3)),
    }], __VLS_functionalComponentArgsRest(__VLS_4), false));
__VLS_6.slots.default;
{
    var __VLS_thisSlot = __VLS_6.slots.after;
    var __VLS_7 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
    // @ts-ignore
    var __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
        to: "/projects",
    }));
    var __VLS_9 = __VLS_8.apply(void 0, __spreadArray([{
            to: "/projects",
        }], __VLS_functionalComponentArgsRest(__VLS_8), false));
    __VLS_10.slots.default;
    var __VLS_11 = {}.Button;
    /** @type {[typeof __VLS_components.Button, ]} */ ;
    // @ts-ignore
    var __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11(__assign({ label: "View All Projects", variant: "outlined" }, { class: "mb-12" })));
    var __VLS_13 = __VLS_12.apply(void 0, __spreadArray([__assign({ label: "View All Projects", variant: "outlined" }, { class: "mb-12" })], __VLS_functionalComponentArgsRest(__VLS_12), false));
    var __VLS_10;
}
var __VLS_6;
/** @type {__VLS_StyleScopedClasses['splash-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['full-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['parallax']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['avatar']} */ ;
/** @type {__VLS_StyleScopedClasses['w-2/3']} */ ;
/** @type {__VLS_StyleScopedClasses['md:w-1/4']} */ ;
/** @type {__VLS_StyleScopedClasses['name']} */ ;
/** @type {__VLS_StyleScopedClasses['slogan']} */ ;
/** @type {__VLS_StyleScopedClasses['go-to-intro']} */ ;
/** @type {__VLS_StyleScopedClasses['intro']} */ ;
/** @type {__VLS_StyleScopedClasses['full-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['parallax']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['md:p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-row-reverse']} */ ;
/** @type {__VLS_StyleScopedClasses['intro-text']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:w-1/3']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-1']} */ ;
/** @type {__VLS_StyleScopedClasses['contact-method']} */ ;
/** @type {__VLS_StyleScopedClasses['p-button']} */ ;
/** @type {__VLS_StyleScopedClasses['p-button-outlined']} */ ;
/** @type {__VLS_StyleScopedClasses['p-button-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['pi']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-12']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            Button: Button,
            Projects: Projects,
            projects: projects,
            contactMethods: contactMethods,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
