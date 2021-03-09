<template>
    <r-transition-slide-fade>
        <div
            v-if="localVisible"
            class="alert"
            v-bind="$attrs"
            :class="cssClasses"
            v-on="$listeners"
        >
            <div v-if="dismissable" class="dismiss" @click="hide">
                <r-icon name="times" />
            </div>
            <slot />
        </div>
    </r-transition-slide-fade>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class AlertBox extends Vue {
    @Prop({ default : true })
    visible: boolean;
    localVisible: boolean = true;

    @Prop({ type : Boolean })
    dismissable: boolean;

    @Watch('visible')
    onvisibleChange(value: boolean) {
        this.localVisible = value;
    }

    show() {
        this.localVisible = true;
        this.$emit('update:visible', true);
    }

    hide() {
        this.localVisible = false;
        this.$emit('update:visible', false);
    }

    toggle() {
        this.localVisible = !this.localVisible;
        this.$emit('update:visible', this.localVisible);
    }

    get cssClasses() {
        return {
            dismissable : this.dismissable,
        };
    }
}
</script>
<style lang="scss">
.alert {
    //
    padding : $small $small + $x-small;
    margin : $x-small 0;
    max-height : 1000px;
    //
    color : $color-primary;
    background-color : transparent;
    border-left : $x-small solid $color-primary;
    border-right : $x-small solid $color-primary;
    //
    overflow : hidden;
    text-overflow : ellipsis;
    transition : all ease 0.25s;
    font-size : $font-small;

    @extend .no-select;

    .title {
        font-size : $font-large;
        text-transform : uppercase;
        font-weight : bold;
        display : block;
        margin : 0;
    }

    .dismiss {
        font-size : $font-small;
        float : right;
        cursor : pointer;
        transition : all ease 0.25s;

        &:hover {
            opacity : 0.9;
        }

        &:active {
            opacity : 0.8;
        }
    }

    &.hidden {
        max-height : 0;
        padding : 0 $small + $x-small !important;
        margin : 0 !important;
    }

    &.dismissable:active {
        transform : scale(1, 0.9);
    }

    @each $key, $value in $color {
        &.#{$key} {
            color : $value;
            border-left-color : $value;
            border-right-color : $value;

            &:hover {
                background-color : rgba($value, 0.1);
            }
        }
    }
}
</style>
