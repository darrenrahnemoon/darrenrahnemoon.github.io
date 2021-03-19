<template>
    <transition
        name="slide"
        :enter-class="`slide-fade-enter-${direction}`"
        :leave-to-class="`slide-fade-enter-${direction}`"
    >
        <slot />
    </transition>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

export enum SlideDirection {
    Up    = 'up',
    Down  = 'down',
    Right = 'right',
    Left  = 'left',
}

@Component
export default class SlideFadeTransition extends Vue {
    @Prop({ default : SlideDirection.Down })
    direction: SlideDirection;
}
</script>

<style lang="scss">


$slide-direction: (
    'up'    : translateY(-100px),
    'down'  : translateY(100px),
    'right' : translateX(100px),
    'left'  : translateX(-100px)
);

.slide-fade-enter-active {
    transition : all 0.3s ease;
}

.slide-fade-leave-active {
    transition : all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

@each $direction, $property in $slide-direction {
    .slide-fade-enter-#{$direction}, .slide-fade-leave-to-#{$direction} {
        transform : $property;

        opacity : 0;
    }
}

</style>
