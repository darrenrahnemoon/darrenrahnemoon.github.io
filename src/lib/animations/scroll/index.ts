import _ from 'lodash';
import ScrollMagic from 'scrollmagic';
import type { TriggerHook } from 'scrollmagic';
import { ScrollMagicPluginIndicator } from 'scrollmagic-plugins';

// Scroll magic plugins
ScrollMagicPluginIndicator(ScrollMagic);

// Only use one controller
const scrollMagicController = new ScrollMagic.Controller({ globalSceneOptions : { duration : 100 } });

export function ScrollAnimation(options: ScrollAnimationOptions = {}) {
    return function(target: any, propertyKey: string) {
        if (!target.hasOwnProperty('$scrollAnimations')) {
            Object.defineProperty(target, '$scrollAnimations', {
                value : {},
            });
        }
        target.$scrollAnimations[propertyKey] = options;
    };
}

export const VueScrollAnimationMixin = {
    mounted() {
        this.$scenes = {};
        _.forEach(this._data.$scrollAnimations, (options, key) => {
            const { duration, offset, reverse, trigger, toggleClass } = options;
            const scene = this.$scenes[key] = new ScrollMagic.Scene(_.compactObject({
                triggerElement : this.$refs[key],
                triggerHook    : trigger,
                offset,
                duration,
                reverse,
            }));

            // Toggle class
            if (typeof toggleClass === 'string') {
                scene.setClassToggle(this.$refs[key] as any, toggleClass);
            }
            else if (typeof toggleClass === 'object') {
                scene.setClassToggle(this.$refs[toggleClass.target] || toggleClass.target, toggleClass.class);
            }

            if (process.env.NODE_ENV !== 'production') {
                scene.addIndicators({ name : key });
            }

            scene.addTo(scrollMagicController);
        });
    },
};

export interface ScrollAnimationOptions {
    duration?: (() => number | string) | number | string;
    offset?: number;
    reverse?: boolean;
    trigger?: TriggerHook;
    toggleClass?: string | { // if toggleClass is string then target is the decorated $ref itself
        target: string;
        class: string;
    };
}
