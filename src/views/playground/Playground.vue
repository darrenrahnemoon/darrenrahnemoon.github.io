<template>
    <row>
        <column class="p-md tc-primary ha-center">
            <h1>Components</h1>
            <input-button
                v-for="(page, name) in pages"
                :key="name"
                class="block mb-md"
                @click.native="active = page"
            >
                {{ name }}
            </input-button>
        </column>
        <column ratio="4" class="p-md">
            <component :is="active" />
        </column>
    </row>
</template>

<style lang="scss">
.playground {
    background : linear-gradient(to bottom right, $color-dark, $color-darker);
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Layouts from './Layouts.vue';
import Typography from './Typography.vue';
import Icons from './Icons.vue';
import ProgressBars from './ProgressBars.vue';
import AlertBoxes from './AlertBoxes.vue';

@Component
export default class Playground extends Vue {
    active = AlertBoxes;

    get pages() {
        return {
            Layouts,
            Typography,
            Icons,
            ProgressBars,
            AlertBoxes,
        };
    }
}
</script>
