<template>
    <div
        ref="overlay"
        class="overlay"
        :class="cssClasses"
        :style="cssStyles"
    >
        <slot />
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class Overlay extends Vue {
    @Prop({ type : Boolean, default : true })
    visible: boolean;
    localVisible: boolean = true;

    @Prop({ type : Boolean, default : false })
    restrictToParentElement: boolean;

    @Prop({ type : Boolean, default : true })
    adjustParentElementPosition: boolean;

    @Prop({ default : 0.6 })
    opacity: number;

    mounted() {
        if (this.restrictToParentElement && this.adjustParentElementPosition) {
            this.$el?.parentElement?.classList?.add('position-relative');
        }
    }

    @Watch('visible', { immediate : true })
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
        this.localVisible = !this.localVisible;
        this.$emit('update:visible', this.localVisible);
    }

    get cssClasses() {
        return {
            fixed  : !this.restrictToParentElement,
            active : this.localVisible,
        };
    }

    get cssStyles() {
        return {
            opacity         : this.localVisible ? 1 : 0,
            backgroundColor : this.localVisible ? `rgba(0, 0, 0, ${this.opacity})` : undefined,
        };
    }
}
</script>
<style lang="scss">
.overlay {
    position : absolute;
    top : 0;
    left : 0;
    transition : all ease 0.25s;

    width : 100%;
    height : 100%;

    text-align : center;

    pointer-events : none;

    & > * {
        position : absolute;
        top : 50%;
        left : 50%;
        transform : translate(-50%, -50%);
    }

    &.active {
        pointer-events : auto;
    }

    &.fixed {
        position : fixed;

        z-index : 9998;

        & > * {
            position : fixed;
        }
    }
}
</style>
