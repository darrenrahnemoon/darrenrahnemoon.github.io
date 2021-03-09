<template>
    <div class="item">
        <div class="title" @click="toggle">
            <div class="caret" :class="cssClasses">
                <r-icon name="angle-down" />
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
    border : 2px solid $color-primary;
    border-bottom : none;
    margin-bottom : -2px;
    color : $color-primary;

    .title {
        padding : $small $medium;
        cursor : pointer;
        transition : all ease 0.25s;
        background-color : rgba($color-primary, 0.1);
        border-bottom : 2px solid $color-primary;

        &:hover {
            color : $color-primary;
            background-color : rgba($color-primary, 0.3);
        }

        &:active {
            color : $color-dark;
            background-color : $color-primary;
        }
    }

    .content {
        transition : all ease 0.25s;
        background-color : transparent;
        padding : 0 $medium;
        overflow : hidden;
        max-height : 0;

        &.active {
            border-bottom : 2px solid $color-primary;
            padding : $medium;
            max-height : 10000px;
        }
    }

    .caret {
        transition : all ease 0.25s;
        float : right;
        transform : rotate(0deg);

        &.active {
            transform : rotate(180deg);
        }
    }

    @each $key, $value in $color {
        &.#{$key} {
            border-color : $value;
            color : $value;

            .title {
                background-color : rgba($value, 0.1);
                border-bottom-color : $value;

                &:hover {
                    color : $value;
                    background-color : rgba($value, 0.3);
                }

                &:active {
                    color : map-get($color-compliment, $key);
                    background-color : $value;
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
