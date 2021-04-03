<template>
    <div>
        <h1>Progress Bars</h1>
        <!-- Horizontal -->
        <h2>Horizontal</h2>

        <div v-for="(size, sizeIndex) in sizes" :key="`horizontal-size-${sizeIndex}`">
            <h3>{{ size | startCase }}</h3>
            <progress-bar
                v-for="(color, index) in colors"
                :key="`horizontal-color-${index}`"
                :progress="(index + 1) * 15"
                :class="[ color, size ]"
            />
            <hr class="hidden medium">
        </div>

        <h2>Vertical</h2>

        <!-- Vertical -->
        <div v-for="(size, sizeIndex) in sizes" :key="`vertical-size-${sizeIndex}`">
            <h3>{{ size | startCase }}</h3>
            <progress-bar
                v-for="(color, index) in colors"
                :key="`vertical-color-${index}`"
                orientation="vertical"
                :progress="(index + 1) * 15"
                :class="[ color, size ]"
            />
            <hr class="hidden medium">
        </div>
    </div>
</template>
<script lang="ts">
import { mixins }         from 'vue-class-component';
import { Component }      from 'vue-property-decorator';
import { BasePlayground } from './BasePlayground';

@Component
export default class ProgressBars extends mixins(BasePlayground) {}
</script>
