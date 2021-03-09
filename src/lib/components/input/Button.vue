<template>
    <button
        v-if="variant === 'button'"
        variant="button"
        class="input button"
        :class="cssClasses"
    >
        <span v-if="$slots.before" class="content-before">
            <slot name="before" />
        </span>
        <span v-if="$slots.default" class="content">
            <slot />
        </span>
        <span v-if="$slots.after" class="content-after">
            <slot name="after" />
        </span>
    </button>
    <a
        v-else-if="variant === 'link'"
        :href="to"
        class="input button"
    >
        <span v-if="$slots.before" class="content-before">
            <slot name="before" />
        </span>
        <span v-if="$slots.default" class="content">
            <slot />
        </span>
        <span v-if="$slots.after" class="content-after">
            <slot name="after" />
        </span>
    </a>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

enum InputButtonVariant {
    Button = 'button',
    Link   = 'link'
}

@Component
export default class InputButton extends Vue {
    @Prop({ required : false })
    to: string;

    @Prop({ default : InputButtonVariant.Button })
    variant: InputButtonVariant;

    @Prop({ type : Boolean, default : false })
    block: boolean;

    get cssClasses() {
        return {
            block : this.block,
        };
    }
}
</script>
<style lang="scss">
.input.button {
    display : inline-block;
    margin : $x-small 0;
    padding : $none;
    font-family : $font-secondary;
    font-size : $medium;
    background-color : transparent;
    border : none;
    transition : all ease 0.25s;
    cursor : pointer;

    .content {
        border : 2px solid $color-primary;
        padding : $small $small * 1.5;
        display : inline-block;
        transition : all ease 0.25s;
        background-color : transparent;
        color : $color-primary;
    }

    .content-before {
        border-top : 2px solid $color-primary;
        border-left : 2px solid $color-primary;
        border-bottom : 2px solid $color-primary;
        padding : $small $small * 1.5;
        transition : all ease 0.25s;
        background-color : transparent;
        color : $color-primary;
    }

    .content-after {
        border-top : 2px solid $color-primary;
        border-right : 2px solid $color-primary;
        border-bottom : 2px solid $color-primary;
        padding : $small $small * 1.5;
        transition : all ease 0.25s;
        background-color : transparent;
        color : $color-primary;
    }

    &.block {
        display : block;
        width : 100%;
        text-align : center;
        margin : $x-small 0;

        .content-before {
            border-right : 2px solid $color-primary;
            border-bottom : none;
        }

        .content-after {
            border-left : 2px solid $color-primary;
            border-top : none;
        }

        .content-before, .content-after, .content {
            display : block;
        }
    }

    &[disabled], &:disabled, &.disabled {
        cursor : not-allowed;
        opacity : 0.7;
    }

    &:hover, &:focus {
        .content, .content-before, .content-after {
            background-color : rgba(darken($color-primary, 2%), 0.3);
            color : $color-primary;
        }
    }

    &:active {
        transform : scale(0.95, 0.95);

        .content, .content-before, .content-after {
            background-color : darken($color-primary, 5%);
            border-color : darken($color-primary, 5%);
            color : $color-dark;
        }
    }

    @each $key, $value in $color {
        &.#{$key} {
            .content, .content-before, .content-after {
                color : $value;
                border-color : $value;
            }

            &:hover, &:focus {
                .content-before, .content-after, .content {
                    background-color : rgba(darken($value, 2%), 0.3);
                    color : $value;
                }
            }

            &:active {
                .content, .content-before, .content-after {
                    background-color : darken($value, 5%);
                    border-color : darken($value, 5%);
                    color : map-get($color-compliment, $key);
                }
            }
        }
    }
}
</style>
