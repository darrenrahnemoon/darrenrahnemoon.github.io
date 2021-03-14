<template>
    <div class="item">
        <div
            class="title"
            tabindex="1"
            @click="toggle"
            @keypress.enter="toggle"
        >
            <div class="caret" :class="cssClasses">
                <icon name="angle-down" />
            </div>
            <slot name="title" />
        </div>
        <div class="content" :class="cssClasses">
            <slot />
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class AccordionItem extends Vue {
    @Prop({ type : Boolean })
    visible: boolean;
    localVisible: boolean = false;

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
        if (!this.localVisible) {
            this.$parent?.$children?.forEach((item: any) => item.hide?.());
        }

        this.localVisible = !this.localVisible;
        this.$emit('update:visible', this.localVisible);
    }

    get cssClasses() {
        return {
            active : this.localVisible,
        };
    }
}
</script>

<style lang="scss">
.accordion .item {
    margin-bottom : -2px;

    color : $color-primary;

    border : 2px solid $color-primary;
    border-bottom : none;

    .title {
        transition : all ease 0.25s;

        padding : $small $medium;

        background-color : rgba($color-primary, 0.1);

        border-bottom : 2px solid $color-primary;

        cursor : pointer;

        outline : none !important;

        &:hover, &:focus {
            background-color : rgba($color-primary, 0.3);
            color : $color-primary;
        }

        &:active {
            background-color : $color-primary;
            color : $color-dark;
        }
    }

    .content {
        transition : all ease 0.25s;

        padding : 0 $medium;

        background-color : transparent;

        max-height : 0;
        overflow : hidden;

        &.active {
            padding : $medium;
            border-bottom : 2px solid $color-primary;

            max-height : 10000px;
        }
    }

    .caret {
        transform : rotate(0deg);
        transition : all ease 0.25s;

        float : right;

        &.active {
            transform : rotate(180deg);
        }
    }

    @each $key, $value in $color {
        &.#{$key} {
            color : $value;
            border-color : $value;

            .title {
                background-color : rgba($value, 0.1);
                border-bottom-color : $value;

                &:hover, &:focus {
                    background-color : rgba($value, 0.3);
                    color : $value;
                }

                &:active {
                    background-color : $value;
                    color : map-get($color-compliment, $key);
                }
            }

            .content {
                border-bottom-color : $value;

                &.active {
                    border-bottom-color : $value;
                }
            }
        }
    }
}
</style>
