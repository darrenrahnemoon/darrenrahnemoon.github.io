<template>
    <div>
        <!-- Headers  -->
        <h1>H1: Welcome to the playground</h1>
        <h2>H2: Welcome to the playground</h2>
        <h3>H3: Welcome to the playground</h3>
        <h4>H4: Welcome to the playground</h4>
        <h5>H5: Welcome to the playground</h5>
        <h6>H6: Welcome to the playground</h6>

        <hr>

        <!-- Font sizes -->
        <div
            v-for="(size, index) in sizes"
            :key="index"
            :class="`font-${size}`"
            class="py-sm"
        >
            {{ size | startCase }}: Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis natus earum veniam vitae saepe ullam omnis, blanditiis dignissimos tempora facilis quaerat minima, sit enim, expedita voluptas sapiente totam aperiam in.
        </div>

        <hr>
        <div
            v-for="(color, index) in colors"
            :key="index"
            :class="`tc-${color}`"
            class="py-sm"
        >
            {{ color | startCase }}: Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis natus earum veniam vitae saepe ullam omnis, blanditiis dignissimos tempora facilis quaerat minima, sit enim, expedita voluptas sapiente totam aperiam in.
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Typography extends Vue {
    get sizes() {
        return [ 'x-small', 'small', 'medium', 'large', 'x-large', 'xx-large' ];
    }

    get colors() {
        return [ 'primary', 'secondary', 'light' ];
    }
}
</script>
