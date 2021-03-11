<template>
    <label class="input switch" :class="cssClasses" @click="toggle">
        <div class="switch">
            <input type="checkbox" :checked="value">
            <span class="slider" />
        </div>
        <div class="content">
            <slot />
        </div>
    </label>
</template>

<script lang="ts">
import { Debounce } from '$/lib/utilities/debounce';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class InputSwitch extends Vue {
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
            on : this.localValue,
        };
    }
}
</script>

<style lang="scss">
.input.switch {
    display : inline-block;
    transition : all ease 0.25s;

    color : $color-primary;

    cursor : pointer;

    input {
        display : none;
    }

    .switch {
        display : inline-block;
        position : relative;
        transition : all ease 0.25s;

        width : $medium * 2;
        height : $medium;

        border : $thickness-primary solid $color-primary;
        border-radius : $medium;

        vertical-align : middle;

        .slider {
            display : inline-block;
            position : absolute;
            top : $thickness-primary;
            left : $thickness-primary;
            transition : all ease 0.25s;

            width : $medium - $thickness-primary * 2;
            height : $medium - $thickness-primary * 2;

            background-color : $color-primary;

            border-radius : 50%;
        }
    }

    &.on {
        .switch {
            background-color : $color-primary;

            .slider {
                top : 0;
                left : $medium;

                width : $medium;
                height : $medium;

                background-color : $color-compliment-primary;
            }
        }
    }

    &:hover, &:focus {
        .switch {
            background-color : rgba($color-primary, 0.3);
        }
    }

    &:active {
        transform : scale(0.9, 0.9);

        .switch {
            background-color : $color-primary;

            .slider {
                background-color : $color-compliment-primary;
            }
        }
    }

    .content {
        display : inline-block;
        margin : 0 $medium / 2;
        vertical-align : middle;
    }

    @each $key, $value in $color {
        &.#{$key} {
            color : $value;

            .switch {
                border-color : $value;

                .slider {
                    background-color : $value;
                }
            }

            &:hover, &:focus {
                .switch {
                    background-color : rgba($value, 0.3);
                }
            }

            &:active {
                transform : scale(0.9, 0.9);

                .switch {
                    background-color : $value;

                    .slider {
                        background-color : map-get($color-compliment, $key);
                    }
                }
            }

            &.on {
                .switch {
                    background-color : $value;

                    .slider {
                        top : 0;
                        left : $medium;

                        width : $medium;
                        height : $medium;

                        background-color : map-get($color-compliment, $key);
                    }
                }
            }
        }
    }

    @each $key, $value in $spacing {
        &.#{$key} {
            .switch {
                width : $value * 2;
                height : $value;
                border-radius : $value;

                .slider {
                    width : $value - $thickness-primary * 2;
                    height : $value - $thickness-primary * 2;
                }
            }

            &.on {
                .switch {
                    .slider {
                        left : $value;
                        width : $value;
                        height : $value;
                    }
                }
            }

            .content {
                margin : 0 $value / 2;
            }
        }
    }
}
</style>
