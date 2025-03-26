var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import _ from 'lodash';
import { projects } from './projects';
import Projects from '$/views/components/Projects.vue';
import { gsap } from 'gsap';
import { onMounted } from 'vue';
onMounted(function () {
    gsap.timeline()
        .from('.projects > h1', { x: -100, opacity: 0 })
        .from('.project', { y: 100, opacity: 0, stagger: 0.3 }, 0)
        .from('.project .p-card-title', { x: -100, opacity: 0, stagger: 0.3 }, 0)
        .from('.project .p-card-subtitle', { x: -100, opacity: 0, stagger: 0.3 }, 0)
        .from('.project .icon', { x: 10, opacity: 0, stagger: 0.3 }, 0);
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
/** @type {[typeof Projects, ]} */ ;
// @ts-ignore
var __VLS_0 = __VLS_asFunctionalComponent(Projects, new Projects({
    projects: (__VLS_ctx._.orderBy(__VLS_ctx.projects, 'date', 'desc')),
    title: "All Projects",
}));
var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{
        projects: (__VLS_ctx._.orderBy(__VLS_ctx.projects, 'date', 'desc')),
        title: "All Projects",
    }], __VLS_functionalComponentArgsRest(__VLS_0), false));
var __VLS_3 = {};
var __VLS_2;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            _: _,
            projects: projects,
            Projects: Projects,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
