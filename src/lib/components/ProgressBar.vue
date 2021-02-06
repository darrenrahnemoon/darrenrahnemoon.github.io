<template>
    <div class="progress-bar" :class="cssClasses">
        <div class="bar" :class="barClass" :style="cssStyles" />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

export enum Orientation {
    Horizontal = 'horizontal',
    Vertical = 'vertical',
}

@Component
export default class ProgressBar extends Vue {
    @Prop()
    progress: number;

    @Prop({ default : Orientation.Horizontal })
    orientation: Orientation;

    @Prop()
    barClass: string | string[];

    @Prop()
    barStyles: Record<string, string>;

    get cssClasses() {
        return {
            horizontal : this.orientation === Orientation.Horizontal,
            vertical   : this.orientation === Orientation.Vertical,
        };
    }

    get cssStyles() {
        return {
            width  : this.orientation === Orientation.Horizontal ? `${this.progress}%` : undefined,
            height : this.orientation === Orientation.Vertical ? `${this.progress}%` : undefined,
            ...this.barStyles,
        };
    }
}
</script>
<style lang="scss">
.progress-bar {
    position : relative;

    .bar {
        transition : all ease 0.25s;
        height : 100%;
        background-color : $color-primary;
        content : "";
    }

    @each $key, $value in $color {
        &.#{$key} {
            .bar {
                background-color : $value;
            }
        }
    }

    &.horizontal {
        height : $small;
    }

    &.vertical {
        display : inline-block;
        position : relative;
        width : $small;
        height : $x-large;

        .bar {
            position : absolute;
            width : 100%;
            bottom : 0;
        }
    }
}
</style>
