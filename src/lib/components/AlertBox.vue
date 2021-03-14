<template>
    <transition-slide-fade>
        <div
            v-if="localVisible"
            class="alert"
            v-bind="$attrs"
            :class="cssClasses"
            v-on="$listeners"
        >
            <div v-if="dismissable" class="dismiss" @click="hide">
                <icon name="times" />
            </div>
            <slot />
        </div>
    </transition-slide-fade>
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
    transition : all ease 0.25s;

    margin : $x-small 0;
    //
    padding : $small $small + $x-small;

    background-color : transparent;
    //
    color : $color-primary;

    border-right : $x-small solid $color-primary;
    border-left : $x-small solid $color-primary;

    font-size : $font-small;

    max-height : 1000px;
    //
    overflow : hidden;
    text-overflow : ellipsis;

    @extend .no-select;

    .title {
        display : block;

        margin : 0;

        font-size : $font-large;
        font-weight : bold;

        text-transform : uppercase;
    }

    .dismiss {
        transition : all ease 0.25s;

        font-size : $font-small;

        cursor : pointer;
        float : right;

        &:hover {
            opacity : 0.9;
        }

        &:active {
            opacity : 0.8;
        }
    }

    &.hidden {
        margin : 0 !important;
        padding : 0 $small + $x-small !important;

        max-height : 0;
    }

    &.dismissable:active {
        transform : scale(1, 0.9);
    }

    @each $key, $value in $color {
        &.#{$key} {
            color : $value;
            border-right-color : $value;
            border-left-color : $value;

            &:hover {
                background-color : rgba($value, 0.1);
            }
        }
    }
}
</style>
