<template>
    <transition
        name="slide"
        :enter-class="`slide-scale-enter-${direction}`"
        :enter-active-class="`slide-scale-enter-active-${direction}`"
        :enter-to-class="`slide-scale-enter-to-${direction}`"
        :leave-class="`slide-scale-leave-${direction}`"
        :leave-active-class="`slide-scale-leave-active-${direction}`"
        :leave-to-class="`slide-scale-leave-to-${direction}`"
    >
        <slot />
    </transition>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

export enum SlideDirection {
    TopLeft     = 'top-left',
    TopRight    = 'top-right',
    BottomLeft  = 'bottom-left',
    BottomRight = 'bottom-right',
}

@Component
export default class SlideScaleTransition extends Vue {
    @Prop({ default : SlideDirection.TopLeft })
    direction: SlideDirection;
}
</script>

<style lang="scss">


$slide-direction: (
    'top-left'     : scaleY(0),
    'top-right'    : scaleY(0),
    'bottom-left'  : scaleY(0),
    'bottom-right' : scaleY(0),
);

@each $direction, $property in $slide-direction {
    // .slide-scale-enter-active-#{$direction}, .slide-scale-leave-active-#{$direction} {
    //     transition : all 0.25s cubic-bezier(0, 0.4, 0.8, 0.5);
    // }

    .slide-scale-enter-active-#{$direction} {
        animation : slide-scale-#{$direction} 2s reverse;
    }

    .slide-scale-leave-active-#{$direction} {
        animation : slide-scale-#{$direction} 1s;
    }

    // .slide-scale-enter-#{$direction}, .slide-scale-leave-to-#{$direction} {
    //     transform : $property;
    // }
    // .slide-scale-enter-to-#{$direction}, .slide-scale-leave-to-#{$direction} {
    //     transform : $property scaleX(0);
    // }

    @keyframes slide-scale-#{$direction} {
        0% {
            transform : scale(1, 1);
        }

        75% {
            transform : scale(1, 0.1);
        }

        100% {
            transform : scale(0, 0.1);
        }
    }
}

</style>
