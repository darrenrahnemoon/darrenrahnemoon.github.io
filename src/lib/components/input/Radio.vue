<template>
    <label
        class="input radio"
        tabindex="1"
        @click="select"
        @keypress.enter="select"
        @keypress.space="select"
    >
        <input type="radio" :checked="value === option">
        <div class="check" />
        <div class="content">
            <slot />
        </div>
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
    display : block;
    transition : all ease 0.25s;

    margin : $medium / 4 0;

    color : $color-primary;

    font-size : $font-medium;

    cursor : pointer;


    .content {
        display : inline-block;
        margin : 0 $medium / 2;
        vertical-align : middle;
    }

    .check {
        display : inline-block;
        position : relative;
        transition : all ease 0.25s;

        width : $medium;
        height : $medium;

        border : $thickness-primary solid $color-primary;
        border-radius : 50%;

        vertical-align : middle;

        &::after {
            display : none;
            position : absolute;
            top : $medium / 4;
            left : $medium / 4;

            width : $medium / 2;
            height : $medium / 2;

            background-color : $color-compliment-primary;

            border-radius : 50%;

            content : "";
        }
    }

    &:hover, &:focus {
        .check {
            background-color : rgba($color-primary, 0.3);
        }
    }

    &:active .check {
        background-color : $color-primary;
    }

    input {
        display : none;

        &:checked ~ .check {
            background-color : $color-primary !important;
        }

        &:checked ~ .check::after {
            display : block;
        }
    }

    &:active {
        transform : scale(0.9, 0.9);
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

            &:hover, &:focus {
                .check {
                    background-color : rgba($value, 0.3);
                }
            }

            &:active .check {
                background-color : $value;
            }
        }
    }

    @each $key, $value in $spacing {
        &.#{$key} {
            margin : $value / 4 0;
            font-size : map-get($font, $key);

            .check {
                width : $value;
                height : $value;

                &::after {
                    top : $value / 4;
                    left : $value / 4;

                    width : $value / 2;
                    height : $value / 2;
                }
            }

            .content {
                margin : 0 $value / 2;
            }
        }
    }
}
</style>
