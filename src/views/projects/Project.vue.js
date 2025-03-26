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
import { defineAsyncComponent, onMounted, shallowRef } from 'vue';
import { useRoute } from 'vue-router';
import { projects } from './projects';
import NotFound from '../components/404.vue';
var route = useRoute();
var project = shallowRef(null);
onMounted(function () {
    var _a;
    var component = (_a = projects.find(function (project) { return project.slug === route.params.slug; })) === null || _a === void 0 ? void 0 : _a.component;
    if (component) {
        project.value = defineAsyncComponent(component);
    }
    else {
        project.value = null;
    }
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
if (__VLS_ctx.project) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "project" }));
    if (__VLS_ctx.project) {
        var __VLS_0 = ((__VLS_ctx.project));
        // @ts-ignore
        var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
        var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_1), false));
    }
}
else {
    /** @type {[typeof NotFound, ]} */ ;
    // @ts-ignore
    var __VLS_4 = __VLS_asFunctionalComponent(NotFound, new NotFound({}));
    var __VLS_5 = __VLS_4.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_4), false));
    var __VLS_7 = {};
    var __VLS_6;
}
/** @type {__VLS_StyleScopedClasses['project']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            NotFound: NotFound,
            project: project,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
