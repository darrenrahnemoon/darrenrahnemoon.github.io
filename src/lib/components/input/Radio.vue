<template>
    <label class="input radio" @click="select">
        <slot />
        <input type="radio" :checked="value === option">
        <span class="check" />
    </label>
</template>

<script lang="ts">

import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class InputRadio extends Vue {
    @Prop()
    value: string;
    localValue: string;

    @Prop()
    option: string;

    @Watch('value')
    onValueChange(value: string) {
        this.localValue = value;
    }

    select() {
        this.localValue = this.option;
        this.$emit('input', this.option);
    }

    deselect() {
        this.localValue = null;
        this.$emit('input', null);
    }
}
</script>
<style lang="scss">
.input.radio {
    display : inline-block;
    position : relative;
    padding : 0 $small 0 $medium * 1.5;
    margin : $x-small 0;
    user-select : none;
    transition : all ease 0.5s;
    color : $color-primary;
    cursor : pointer;

    .check {
        position : absolute;
        top : 0;
        left : 0;
        height : $medium;
        width : $medium;
        border : 2px solid $color-primary;
        border-radius : 50%;
        transition : all ease 0.25s;

        &::after {
            content : "";
            position : absolute;
            display : none;
            left : $x-small;
            top : $x-small;
            width : $small;
            height : $small;
            border-radius : 50%;
            background-color : $color-compliment-primary;
        }
    }

    input {
        position : absolute;
        opacity : 0;
        height : 0;
        width : 0;
        cursor : pointer;

        &:checked ~ .check {
            background-color : $color-primary !important;
        }

        &:checked ~ .check::after {
            display : block;
        }
    }

    &:hover input ~ .check, &:focus input ~ .check {
        background-color : rgba($color-primary, 0.3);
    }

    &:active {
        transform : scale(0.95, 0.95);
    }

    &:active input ~ .check {
        background-color : $color-primary;
    }

    @each $key, $value in $color {
        &.#{$key} {
            color : $value;

            .check {
                border-color : $value;

                &::after {
                    background-color : map-get($color-compliment, $key);
                }
            }

            input {
                &:checked ~ .check {
                    background-color : $value !important;
                }
            }

            &:hover input ~ .check, &:focus input ~ .check {
                background-color : rgba($value, 0.3);
            }

            &:active input ~ .check {
                background-color : $value;
            }
        }
    }
}
</style>
