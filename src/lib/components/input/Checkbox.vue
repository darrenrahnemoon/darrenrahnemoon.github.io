<template>
    <label
        class="input checkbox"
        :class="cssClasses"
        tabindex="1"
        @click="toggle"
        @keypress.enter="toggle"
        @keypress.space="toggle"
    >
        <input type="checkbox" :checked="value">
        <div class="check" />
        <div class="content">
            <slot />
        </div>
    </label>
</template>

<script lang="ts">
import { Debounce } from '$/lib/utilities/debounce';
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

    /**
     * HACK: click event on labels get triggered twice if they're targetting an input
     * Reference: https://github.com/vuejs/vue/issues/3699
     */
    @Debounce(1)
    toggle() {
        this.localValue = !this.localValue;
        this.$emit('input', this.localValue);
    }

    get cssClasses() {
        return {
            checked : this.localValue,
        };
    }
}
</script>

<style lang="scss">
.input.checkbox {
    display : inline-block;
    transition : all ease 0.25s;

    margin : $medium / 4 0;

    color : $color-primary;

    font-size : $font-medium;

    .check {
        display : inline-block;
        position : relative;
        transition : all ease 0.25s;

        width : $medium;
        height : $medium;

        border : $thickness-primary solid $color-primary;

        vertical-align : middle;

        &::after {
            display : none;
            position : absolute;
            top : $medium / 10;
            left : $medium / 3; // SHOULD DO: figure out the formula to determine the distance in X at which the checkmark is centered
            transform : rotate(45deg);

            width : $medium / 4;
            height : $medium / 2;

            border : solid $color-compliment-primary;

            border-width : 0 $thickness-primary $thickness-primary 0;
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
    }

    &.checked {
        .check {
            background-color : $color-primary !important;

            &::after {
                display : block;
            }
        }
    }

    &:active {
        transform : scale(0.9, 0.9);
    }

    .content {
        display : inline-block;
        margin : 0 $medium / 2;
        vertical-align : middle;
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

            &.checked .check {
                background-color : $value !important;
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
                    top : $value / 10;
                    left : $value / 3;

                    width : $value / 4;
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
