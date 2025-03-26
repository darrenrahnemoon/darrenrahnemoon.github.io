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
import { defineProps } from 'vue';
import ProjectCard from './ProjectCard.vue';
var __VLS_props = defineProps();
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "projects parallax full-screen" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
(__VLS_ctx.title || 'Projects');
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "grid grid-cols-12 gap-4" }));
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.projects)); _i < _a.length; _i++) {
    var project = _a[_i][0];
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ key: (project.name) }, { class: "col-span-12 md:col-span-6 lg:col-span-4" }));
    if (project.component) {
        var __VLS_0 = {}.RouterLink;
        /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
        // @ts-ignore
        var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
            to: ("/project/".concat(project.slug)),
        }));
        var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
                to: ("/project/".concat(project.slug)),
            }], __VLS_functionalComponentArgsRest(__VLS_1), false));
        __VLS_3.slots.default;
        /** @type {[typeof ProjectCard, ]} */ ;
        // @ts-ignore
        var __VLS_4 = __VLS_asFunctionalComponent(ProjectCard, new ProjectCard({
            project: (project),
        }));
        var __VLS_5 = __VLS_4.apply(void 0, __spreadArray([{
                project: (project),
            }], __VLS_functionalComponentArgsRest(__VLS_4), false));
        var __VLS_3;
    }
    else {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
            href: (project.url),
            target: "_blank",
        });
        /** @type {[typeof ProjectCard, ]} */ ;
        // @ts-ignore
        var __VLS_7 = __VLS_asFunctionalComponent(ProjectCard, new ProjectCard({
            project: (project),
        }));
        var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([{
                project: (project),
            }], __VLS_functionalComponentArgsRest(__VLS_7), false));
    }
}
var __VLS_10 = {};
/** @type {__VLS_StyleScopedClasses['projects']} */ ;
/** @type {__VLS_StyleScopedClasses['parallax']} */ ;
/** @type {__VLS_StyleScopedClasses['full-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-cols-12']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-span-12']} */ ;
/** @type {__VLS_StyleScopedClasses['md:col-span-6']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:col-span-4']} */ ;
// @ts-ignore
var __VLS_11 = __VLS_10;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            ProjectCard: ProjectCard,
        };
    },
    __typeProps: {},
});
var __VLS_component = (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
    __typeProps: {},
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
