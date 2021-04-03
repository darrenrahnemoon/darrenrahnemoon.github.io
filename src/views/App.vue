<template>
    <router-view :class="cssClasses" />
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
    get cssClasses() {
        return {};
    }
}
</script>
