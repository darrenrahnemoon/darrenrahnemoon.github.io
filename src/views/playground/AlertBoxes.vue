<template>
    <div>
        <h1>Alert Boxes</h1>

        <h2>Non-dismissable</h2>
        <alert-box v-for="(color, index) in colors" :key="`non-dismissable-${index}`" :class="color">
            <template #title>
                Alert Detected
            </template>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nulla, dolores eum fuga molestias at repellat alias, in qui mollitia natus officiis rerum magni pariatur minus temporibus illo veniam tempora.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nulla, dolores eum fuga molestias at repellat alias, in qui mollitia natus officiis rerum magni pariatur minus temporibus illo veniam tempora.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nulla, dolores eum fuga molestias at repellat alias, in qui mollitia natus officiis rerum magni pariatur minus temporibus illo veniam tempora.
        </alert-box>

        <hr class="hidden medium">

        <h2>Dismissable</h2>
        <alert-box
            v-for="(color, index) in colors"
            :key="`dismissable-${index}`"
            title="Alert Detected"
            :class="color"
            dismissable
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nulla, dolores eum fuga molestias at repellat alias, in qui mollitia natus officiis rerum magni pariatur minus temporibus illo veniam tempora.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nulla, dolores eum fuga molestias at repellat alias, in qui mollitia natus officiis rerum magni pariatur minus temporibus illo veniam tempora.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nulla, dolores eum fuga molestias at repellat alias, in qui mollitia natus officiis rerum magni pariatur minus temporibus illo veniam tempora.
        </alert-box>
    </div>
</template>
<script lang="ts">
import { mixins }         from 'vue-class-component';
import { Component }      from 'vue-property-decorator';
import { BasePlayground } from './BasePlayground';

@Component
export default class AlertBoxes extends mixins(BasePlayground) {}
</script>
