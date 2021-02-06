<template>
    <div class="input-text-container">
        <label
            v-if="this.$slots.default"
            class="input-text-label"
            :style="labelStyle"
        >
            <slot />
        </label>
        <input
            v-if="type !== 'textarea'"
            v-bind="$attrs"
            :type="type"
            :value="value"
            class="input-text"
            @input="$emit('input', $event.target.value)"
            @blur="checkValue()"
            @focus="labelMoveUp()"
        >
        <textarea
            v-else
            v-bind="$attrs"
            :rows="rows"
            :cols="cols"
            :value="value"
            :placeholder="placeholder"
            class="input-text"
            @input="$emit('input', $event.target.value)"
            @blur="checkValue()"
            @focus="labelMoveUp()"
        />
    </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class InputText extends Vue {
    @Prop()
    value: string;

    @Prop()
    type: string;

    labelStyle = {};

    active = false;

    labelMoveUp() {
        this.labelStyle = {
            bottom : '0',
        };
        this.active = true;
    }

    labelMoveDown() {
        this.labelStyle = {
            bottom : '-27px',
        };
        this.active = false;
    }

    checkValue() {
        if (this.value.length > 0) {
            this.labelMoveUp();
        }
        else {
            this.labelMoveDown();
        }
    }

    mounted() {
        this.checkValue();
    }
}
</script>
