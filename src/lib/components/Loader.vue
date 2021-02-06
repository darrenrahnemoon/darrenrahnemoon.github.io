<template>
    <transition
        name="fade"
        enter-active-class="fadeIn"
        leave-active-class="fadeOut"
    >
        <div v-if="show" class="overlay">
            <div v-if="type == 'spinner'" class="loader-spinner" />
            <div v-if="type == 'ripple'" class="loader-ripple">
                <div /><div />
            </div>
            <div v-if="type == 'ellipsis'" class="loader-ellipsis">
                <div /><div /><div /><div />
            </div>
            <div v-if="type == 'grid'" class="loader-grid">
                <div /><div /><div /><div /><div /><div /><div /><div /><div />
            </div>
        </div>
    </transition>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Loader extends Vue {
    @Prop({ default : 'spinner' })
    type: string;

    @Prop({ default : true })
    show: boolean;
}
</script>
