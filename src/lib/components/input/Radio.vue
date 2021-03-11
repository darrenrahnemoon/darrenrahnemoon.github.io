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
    transition : all ease 0.5s;

    margin : $x-small 0;
    padding : 0 $small 0 $medium * 1.5;

    color : $color-primary;

    cursor : pointer;

    user-select : none;

    .check {
        position : absolute;
        top : 0;
        left : 0;
        transition : all ease 0.25s;

        width : $medium;
        height : $medium;

        border : 2px solid $color-primary;
        border-radius : 50%;

        &::after {
            display : none;
            position : absolute;
            top : $x-small;
            left : $x-small;

            width : $small;
            height : $small;

            background-color : $color-compliment-primary;

            border-radius : 50%;

            content : "";
        }
    }

    input {
        position : absolute;

        width : 0;
        height : 0;

        cursor : pointer;

        opacity : 0;

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
        transform : scale(0.9, 0.9);
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
