<template>
    <row>
        <column class="p-md tc-primary ha-center">
            <h1>Components</h1>
            <input-button
                v-for="(page, pageName) in pages"
                :key="pageName"
                class="block"
                @click.native="active = page"
            >
                {{ pageName }}
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

import Typography from './Typography.vue';

@Component
export default class Playground extends Vue {
    active = Typography;

    get pages() {
        return {
            Typography,
        };
    }
}
</script>
