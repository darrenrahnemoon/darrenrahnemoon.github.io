<template>
    <div>
        <transition
            name="fade"
            enter-active-class="fadeIn"
            leave-active-class="fadeOut"
        >
            <div v-if="value" class="overlay fixed" />
        </transition>
        <transition
            name="slide"
            enter-active-class="slideInDown"
            leave-active-class="slideOutUp"
        >
            <div v-if="value" class="modal-wrapper" @click="close()">
                <div class="modal" @click.stop>
                    <slot />
                </div>
            </div>
        </transition>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class Modal extends Vue {
    @Prop({ default : true })
    visible: boolean;
    localVisible: boolean = true;

    @Watch('visible')
    onvisibleChange(value: boolean) {
        this.localVisible = value;
    }

    @Prop({ type : Boolean })
    dismissable: boolean;

    close() {
        if (this.dismissable) {
            this.$emit('input', false);
        }
    }
}
</script>
