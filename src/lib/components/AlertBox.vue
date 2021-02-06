<template>
    <div class="alert" :class="cssClasses">
        <div v-if="dismissable" class="dismiss" @click="dismiss">
            <icon name="times" />
        </div>
        <slot />
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class AlertBox extends Vue {
    @Prop({ default : true })
    visible: boolean;
    localVisible: boolean = true;

    @Watch('visible')
    onvisibleChange(value: boolean) {
        this.localVisible = value;
    }

    @Prop({ type : Boolean })
    dismissable: boolean;

    get cssClasses() {
        return {
            hidden : !this.localVisible,
        };
    }

    dismiss() {
        this.localVisible = false;
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
    transition : all ease 0.2s;
    font-size : $font-small;

    @extend .no-select;

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
        transition : all ease 0.5s;

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
}
</style>
