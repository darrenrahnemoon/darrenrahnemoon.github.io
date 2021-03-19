<template>
    <div class="row" :class="cssClasses">
        <slot />
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

export enum Orientation {
    Horizontal = 'horizontal',
    Vertical = 'vertical',
}

export enum HorizontalAlignment {
    Start = 'start',
    End = 'end',
    Center = 'center',
    SpaceBetween = 'space-between',
    SpaceAround = 'space-around',
    SpaceEvenly = 'space-evenly',
}

export enum VerticalAlignment {
    Start = 'start',
    End = 'end',
    Center = 'center',
    Stretch = 'stretch',
    BaseLine = 'baseline',
}

@Component
export default class Row extends Vue {
    @Prop({ default : Orientation.Horizontal })
    orientation: Orientation;

    @Prop({ type : Boolean }) // explicitly set type to Boolean so presense of prop would mean true
    reverse: boolean;

    @Prop()
    hAlign: HorizontalAlignment;

    @Prop()
    vAlign: VerticalAlignment;

    get cssClasses() {
        return {
            // Orientation
            'horizontal' : this.orientation === Orientation.Horizontal,
            'vertical'   : this.orientation === Orientation.Vertical,
            'reverse'    : this.reverse,

            // Common Alignment (Horizontal / Vertical)
            'start'  : this.hAlign === HorizontalAlignment.Start || this.vAlign === VerticalAlignment.Start,
            'end'    : this.hAlign === HorizontalAlignment.End || this.vAlign === VerticalAlignment.End,
            'center' : this.hAlign === HorizontalAlignment.Center || this.vAlign === VerticalAlignment.Center,

            // Horizontal Alignment
            'space-between' : this.hAlign === HorizontalAlignment.SpaceBetween,
            'space-around'  : this.hAlign === HorizontalAlignment.SpaceAround,
            'space-evenly'  : this.hAlign === HorizontalAlignment.SpaceEvenly,

            // Vertical Alignment
            'stretch'  : this.vAlign === VerticalAlignment.Stretch,
            'baseline' : this.vAlign === VerticalAlignment.BaseLine,
        };
    }
}
</script>
<style lang="scss">
.row {
    display : flex;
    padding : 0;

    flex-wrap : wrap;

    &.horizontal {
        flex-direction : row;

        &.reverse {
            flex-direction : row-reverse;
        }

        &.start {
            justify-content : start;
        }

        &.end {
            justify-content : end;
        }

        &.center {
            justify-content : center;
        }

        &.space-between {
            justify-content : space-between;
        }

        &.space-around {
            justify-content : space-around;
        }

        &.space-evenly {
            justify-content : space-evenly;
        }
    }

    &.vertical {
        flex-direction : column;

        &.start {
            align-items : start;
        }

        &.end {
            align-items : end;
        }

        &.center {
            align-items : center;
        }

        &.stretch {
            align-items : stretch;
        }

        &.baseline {
            align-items : baseline;
        }

        &.reverse {
            flex-direction : column-reverse;
        }
    }
}
</style>
