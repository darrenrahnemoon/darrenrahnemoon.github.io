<template>
    <label class="input-checkbox-container">
        <slot />
        <input
            type="checkbox"
            :checked="value"
            @click="$emit('input', value)"
        >
        <span class="input-checkbox-check" />
    </label>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class InputCheckbox extends Vue {
    @Prop()
    value: boolean;
}
</script>
