<template>
    <label class="input-radio-container">
        <slot />
        <input
            type="radio"
            :checked="value === option"
            @click="$emit('input', option)"
        >
        <span class="input-radio-check" />
    </label>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class InputRadio extends Vue {
    @Prop()
    value: string;

    @Prop()
    option: string;
}
</script>
