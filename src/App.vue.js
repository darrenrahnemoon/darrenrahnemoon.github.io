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
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import LoadingOverlay from './views/components/LoadingOverlay.vue';
import Menu from './views/components/Menu.vue';
import Footer from './views/components/Footer.vue';
var isLoading = ref(true);
onMounted(function () {
    setTimeout(function () {
        isLoading.value = false;
    }, 200);
    gsap.from('.view', { marginLeft: 0 }); // HACK: see Menu timeline
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
/** @type {[typeof LoadingOverlay, ]} */ ;
// @ts-ignore
var __VLS_0 = __VLS_asFunctionalComponent(LoadingOverlay, new LoadingOverlay({
    visible: (__VLS_ctx.isLoading),
}));
var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{
        visible: (__VLS_ctx.isLoading),
    }], __VLS_functionalComponentArgsRest(__VLS_0), false));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "app" }));
/** @type {[typeof Menu, ]} */ ;
// @ts-ignore
var __VLS_3 = __VLS_asFunctionalComponent(Menu, new Menu({}));
var __VLS_4 = __VLS_3.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_3), false));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "sm:ml-20" }));
var __VLS_6 = {}.RouterView;
/** @type {[typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ]} */ ;
// @ts-ignore
var __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_7), false));
/** @type {[typeof Footer, ]} */ ;
// @ts-ignore
var __VLS_10 = __VLS_asFunctionalComponent(Footer, new Footer({}));
var __VLS_11 = __VLS_10.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_10), false));
/** @type {__VLS_StyleScopedClasses['app']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:ml-20']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            LoadingOverlay: LoadingOverlay,
            Menu: Menu,
            Footer: Footer,
            isLoading: isLoading,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
