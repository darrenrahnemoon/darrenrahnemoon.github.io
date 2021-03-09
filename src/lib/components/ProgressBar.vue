<template>
    <div class="progress-bar" :class="cssClasses">
        <div class="bar" :style="cssStyles" />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

export enum Orientation {
    Horizontal = 'horizontal',
    Vertical   = 'vertical',
}

@Component
export default class ProgressBar extends Vue {
    @Prop()
    progress: number;

    @Prop({ default : Orientation.Horizontal })
    orientation: Orientation;

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
        };
    }
}
</script>
<style lang="scss">
.progress-bar {
    .bar {
        transition : all ease 0.5s;
        height : 100%;
        background-color : $color-primary;
        content : "";
    }

    &.horizontal {
        height : $small;

        .bar {
            width : 0;
        }
    }

    &.vertical {
        display : inline-block;
        position : relative;
        width : $small;
        height : $x-large;

        .bar {
            position : absolute;
            width : 100%;
            height : 0;
            bottom : 0;
        }
    }

    @each $key, $value in $color {
        &.#{$key} {
            .bar {
                background-color : $value;
            }
        }
    }
}
</style>
