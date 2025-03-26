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
import Timeline from 'primevue/timeline';
import { journey } from './journey';
import { onMounted } from 'vue';
import { gsap } from 'gsap';
onMounted(function () {
    gsap.timeline()
        .from('.journey-intro h1', { x: -10, opacity: 0 }, 1)
        .from('.journey-intro div', { x: 10, opacity: 0 }, 1);
    var events = document.getElementsByClassName('p-timeline-event');
    for (var i = 0; i < events.length; i++) {
        var event_1 = events.item(i);
        gsap.timeline({
            scrollTrigger: {
                trigger: event_1,
                start: '+=150% bottom',
                end: '+=10%',
                toggleActions: 'play none none reverse',
            },
        })
            .from(event_1.querySelector('.p-timeline-event-marker'), { scale: 0.1, opacity: 0 })
            .from(event_1.querySelector('.date'), { x: 100 * (i % 2 == 0 ? -1 : 1), opacity: 0 }, 0)
            .from(event_1.querySelector('.description'), { x: 100 * (i % 2 == 0 ? 1 : -1), opacity: 0 }, 0);
    }
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "journey-intro" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "journey full-screen parallax" }));
var __VLS_0 = {}.Timeline;
/** @type {[typeof __VLS_components.Timeline, typeof __VLS_components.Timeline, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    value: (__VLS_ctx.journey),
    align: "alternate",
}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
        value: (__VLS_ctx.journey),
        align: "alternate",
    }], __VLS_functionalComponentArgsRest(__VLS_1), false));
__VLS_3.slots.default;
{
    var __VLS_thisSlot = __VLS_3.slots.content;
    var item = __VLS_getSlotParams(__VLS_thisSlot)[0].item;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "description" }));
    (item.description);
}
{
    var __VLS_thisSlot = __VLS_3.slots.opposite;
    var item = __VLS_getSlotParams(__VLS_thisSlot)[0].item;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "date" }));
    (item.date.toLocaleString('default', { month: 'long', year: 'numeric' }));
}
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['journey-intro']} */ ;
/** @type {__VLS_StyleScopedClasses['journey']} */ ;
/** @type {__VLS_StyleScopedClasses['full-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['parallax']} */ ;
/** @type {__VLS_StyleScopedClasses['description']} */ ;
/** @type {__VLS_StyleScopedClasses['date']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            Timeline: Timeline,
            journey: journey,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
