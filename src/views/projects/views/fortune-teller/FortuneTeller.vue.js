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
import Card from 'primevue/card';
var features = [
    {
        title: 'Data Warehousing',
        content: "MC provides integration with any broker by allowing them to implement a \"Repository\" class. Once devs have implemented the repository, MC can take care of gradually collecting all of the brokers's instrument data in one central database:",
        icon: 'pi pi-database',
    },
    {
        title: 'Reusable Strategy Design',
        content: 'MC provides a "Strategy" class that comes with all the features developers need to implement their trading strategy. Hindsight is baked into what the strategy implementation sees. The same strategy then can be tested using the "SimulationBroker" and deployed live on any "Broker" class implementation',
        icon: 'pi pi-refresh',
    },
    {
        title: 'ML Utilities',
        content: 'Extending Tensorflow\'s OOP design, the multi-gpu/multiprocess and hyper-optimized implementation of MC model trainer allows training large feature sets on some of the weakest devices.',
        icon: 'pi pi-wrench',
    },
];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "p-8 bg-primary text-primary-contrast text-center" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "bg-surface-500 grid grid-cols-12 gap-4" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "col-span-12 p-8" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
(__VLS_ctx.features.length);
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.features)); _i < _a.length; _i++) {
    var feature = _a[_i][0];
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ key: (feature.title) }, { class: "col-span-12 md:col-span-4 p-6" }));
    var __VLS_0 = {}.Card;
    /** @type {[typeof __VLS_components.Card, typeof __VLS_components.Card, ]} */ ;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ class: "h-full" })));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ class: "h-full" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
    __VLS_3.slots.default;
    {
        var __VLS_thisSlot = __VLS_3.slots.header;
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "text-center pt-12" }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span)(__assign({ class: (feature.icon) }, { class: "text-7xl" }));
    }
    {
        var __VLS_thisSlot = __VLS_3.slots.title;
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "mb-8 text-2xl text-center" }));
        (feature.title);
    }
    {
        var __VLS_thisSlot = __VLS_3.slots.content;
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "text-sm leading-loose" }));
        (feature.content);
    }
    var __VLS_3;
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "text-center p-8 bg-surface-600" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign({ class: "p-component p-button p-button-outlined" }, { href: "https://github.com/darrenrahnemoon/trading", target: "_blank" }));
/** @type {__VLS_StyleScopedClasses['p-8']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['text-primary-contrast']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-surface-500']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-cols-12']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-span-12']} */ ;
/** @type {__VLS_StyleScopedClasses['p-8']} */ ;
/** @type {__VLS_StyleScopedClasses['col-span-12']} */ ;
/** @type {__VLS_StyleScopedClasses['md:col-span-4']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-12']} */ ;
/** @type {__VLS_StyleScopedClasses['text-7xl']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-8']} */ ;
/** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['leading-loose']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['p-8']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-surface-600']} */ ;
/** @type {__VLS_StyleScopedClasses['p-component']} */ ;
/** @type {__VLS_StyleScopedClasses['p-button']} */ ;
/** @type {__VLS_StyleScopedClasses['p-button-outlined']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            Card: Card,
            features: features,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
