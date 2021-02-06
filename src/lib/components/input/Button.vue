<template>
    <button
        v-if="type === 'button'"
        type="button"
        class="input-button"
    >
        <span v-if="this.$slots.before" class="input-button-content-before">
            <slot name="before" />
        </span>
        <span v-if="this.$slots.default" class="input-button-content">
            <slot />
        </span>
        <span v-if="this.$slots.after" class="input-button-content-after">
            <slot name="after" />
        </span>
    </button>
    <a
        v-else-if="type === 'link'"
        :href="to"
        class="input-button"
    >
        <span v-if="this.$slots.before" class="input-button-content-before">
            <slot name="before" />
        </span>
        <span v-if="this.$slots.default" class="input-button-content">
            <slot />
        </span>
        <span v-if="this.$slots.after" class="input-button-content-after">
            <slot name="after" />
        </span>
    </a>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

enum InputButtonType {
    Button = 'button',
    Link = 'link'
}

@Component
export default class InputButton extends Vue {
    @Prop()
    to: string;

    @Prop()
    type: InputButtonType;
}
</script>
