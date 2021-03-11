import { ScrollAnimationOptions } from './index';
declare module 'vue/types/vue' {
    interface Vue {
        $scenes: Record<string, ScrollMagic.Scene>;
        $scrollAnimations: Record<string, ScrollAnimationOptions>;
    }
}
