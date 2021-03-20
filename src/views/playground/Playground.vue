<template>
    <row>
        <column class="p-md tc-primary ha-center">
            <h1>Components</h1>
            <input-button
                v-for="(page, name) in pages"
                :key="`page-${name}`"
                variant="router-link"
                class="block mb-md"
                active-class="navigation-link-active"
                :to="`/playground/${_.kebabCase(name)}`"
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

.navigation-link-active {
    background-color : $color-primary !important;
    color : $color-compliment-primary !important;

    .content {
        color : $color-compliment-primary !important;
    }
}
</style>

<script lang="ts">
import _                         from 'lodash';
import { Component, Vue, Watch } from 'vue-property-decorator';

import Layouts      from './Layouts.vue';
import Typography   from './Typography.vue';
import Icons        from './Icons.vue';
import ProgressBars from './ProgressBars.vue';
import AlertBoxes   from './AlertBoxes.vue';

@Component
export default class Playground extends Vue {
    active = null;

    @Watch('$route', { immediate : true })
    onRouteChange() {
        const page = _.pascalCase((this as any).$route?.params?.page);
        this.active = this.pages[page] || Layouts;
    }

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
