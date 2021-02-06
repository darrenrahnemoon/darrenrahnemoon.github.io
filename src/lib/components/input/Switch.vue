<template>
    <label class="input-toggle-switch-container">
        <div class="input-toggle-switch" :for="id">
            <input
                :id="id"
                type="checkbox"
                :checked="value"
                @click="$emit('input', $event.target.checked)"
            >
            <span class="input-toggle-switch-slider" />
        </div>
        <slot />
    </label>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class InputSwitch extends Vue {
    @Prop()
    value: boolean;
}
</script>
