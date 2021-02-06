<template>
    <div class="column" :style="cssStyles">
        <slot />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Column extends Vue {
    @Prop({ default : 1 })
    ratio: number;

    get cssStyles() {
        return {
            flex : this.ratio,
        };
    }
}
</script>
<style lang="scss">
.column {
    margin : 0;
    padding : 0;
}
</style>
