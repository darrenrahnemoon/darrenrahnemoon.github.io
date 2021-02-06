<template>
    <span class="la" :class="cssClasses" :style="cssStyles" />
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

export enum IconVariant {
    Brand = 'brand',
    Solid = 'solid'
}

@Component
export default class Icon extends Vue {
    @Prop()
    name: string;

    @Prop({ default : 1 })
    size: number;

    @Prop({ default : IconVariant.Solid })
    variant: IconVariant;

    get cssClasses() {
        return {
            las                 : this.variant === IconVariant.Solid,
            lab                 : this.variant === IconVariant.Brand,
            [`la-${this.name}`] : true,
        };
    }

    get cssStyles() {
        return {
            'font-size' : `${this.size}em`,
        };
    }
}
</script>
