<template>
    <div class="accordion">
        <slot />
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Accordion extends Vue {}
</script>
