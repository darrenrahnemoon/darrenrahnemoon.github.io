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
import _ from 'lodash';
import Image from 'primevue/image';
import { gsap } from 'gsap';
import { onMounted } from 'vue';
var count = 94;
onMounted(function () {
    gsap.timeline()
        .from('.gallery-intro h1', { x: -10, opacity: 0 })
        .from('.gallery-intro div', { x: 10, opacity: 0 })
        .from('.p-image', { x: 100, opacity: 0, stagger: 0.1 });
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "gallery-intro" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "gallery" }));
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx._.shuffle(__VLS_ctx._.range(__VLS_ctx.count, 1, -1)))); _i < _a.length; _i++) {
    var i = _a[_i][0];
    var __VLS_0 = {}.Image;
    /** @type {[typeof __VLS_components.Image, ]} */ ;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        key: (i),
        src: ("/assets/views/gallery/".concat(i, ".jpeg")),
        preview: true,
        pt: ({
            image: 'w-full h-10em! sm:w-auto sm:h-5em',
        }),
        loading: "lazy",
    }));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
            key: (i),
            src: ("/assets/views/gallery/".concat(i, ".jpeg")),
            preview: true,
            pt: ({
                image: 'w-full h-10em! sm:w-auto sm:h-5em',
            }),
            loading: "lazy",
        }], __VLS_functionalComponentArgsRest(__VLS_1), false));
}
/** @type {__VLS_StyleScopedClasses['gallery-intro']} */ ;
/** @type {__VLS_StyleScopedClasses['gallery']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            _: _,
            Image: Image,
            count: count,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
