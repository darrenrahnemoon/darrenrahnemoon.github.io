<template>
    <label class="input checkbox" @click="toggle">
        <slot />
        <input type="checkbox" :checked="value">
        <span class="check" />
    </label>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class InputCheckbox extends Vue {
    @Prop({ default : true })
    value: boolean;
    localValue: boolean = true;

    @Watch('value')
    onValueChange(value: boolean) {
        this.localValue = value;
    }

    check() {
        this.localValue = true;
        this.$emit('input', true);
    }

    uncheck() {
        this.localValue = false;
        this.$emit('input', false);
    }

    toggle() {
        this.localValue = !this.localValue;
        this.$emit('input', this.localValue);
    }
}
</script>

<style lang="scss">
.input.checkbox {
    display : inline-block;
    position : relative;
    padding : 0 $medium 0 $medium * 1.75;
    margin : $x-small $none;
    user-select : none;
    transition : all ease 0.25s;
    color : $color-primary;
    cursor : pointer;

    .check {
        position : absolute;
        top : 0;
        left : 0;
        height : $medium;
        width : $medium;
        border : 2px solid $color-primary;
        transition : all ease 0.5s;

        &::after {
            content : "";
            position : absolute;
            display : none;
            left : 7px;
            top : 2px;
            width : $x-small;
            height : $small;
            border : solid $color-compliment-primary;
            border-width : 0 2px 2px 0;
            transform : rotate(45deg);
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

    &:active {
        transform : scale(0.95, 0.95);
    }

    &:hover input ~ .check, &:focus input ~ .check {
        background-color : rgba($color-primary, 0.3);
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
                    border-color : map-get($color-compliment, $key);
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
