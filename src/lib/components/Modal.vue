<template>
    <div>
        <overlay :visible="localVisible" />
        <div v-if="localVisible" class="modal-wrapper" @click="close()">
            <div class="modal" @click.stop>
                <slot />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class Modal extends Vue {
    @Prop({ type : Boolean })
    dismissable: boolean;

    @Prop({ type : Boolean, default : true })
    visible: boolean;
    localVisible: boolean = true;

    @Watch('visible')
    onvisibleChange(value: boolean) {
        this.localVisible = value;
    }

    show() {
        this.localVisible = true;
        this.$emit('update:visible', true);
    }

    hide() {
        this.localVisible = false;
        this.$emit('update:visible', false);
    }

    toggle() {
        this.localVisible = !this.localVisible;
        this.$emit('update:visible', this.localVisible);
    }
}
</script>
<style lang="scss">
.modal {
    display : inline-block;
    margin : $large 0;
}

.modal-wrapper {
    position : fixed;
    top : 0;
    left : 0;

    width : 100%;
    height : 100%;

    text-align : center;

    overflow-y : scroll;
    z-index : 9999;
}
</style>
