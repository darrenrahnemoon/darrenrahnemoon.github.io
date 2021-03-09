<template>
    <transition name="fade">
        <slot />
    </transition>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class FadeTransition extends Vue {}
</script>
<style lang="scss">
.fade-enter-active, .fade-leave-active {
    transition : opacity ease 0.25s;
}

.fade-enter, .fade-leave-to {
    opacity : 0;
}
</style>
