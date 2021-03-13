<template>
    <div class="input text" :class="cssClasses">
        <input
            v-if="variant !== 'textarea'"
            :value="value"
            placeholder=""
            v-bind="$attrs"
            :type="variant"
            @focus="localActive = true"
            @blur="localActive = false"
            @input="onInput"
        >
        <textarea
            v-else
            :value="value"
            v-bind="$attrs"
            placeholder=""
            :rows="$attrs.rows || 6"
            @focus="localActive = true"
            @blur="localActive = false"
            @input="onInput"
        />
        <label v-if="$slots.default || $attrs.placeholder">
            {{ $attrs.placeholder }}
            <slot />
        </label>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

export enum InputTextVariant {
    Text = 'text',
    TextArea = 'textarea',
    //
    Search = 'search',
    Password = 'password',
    Email = 'email',
    Phone = 'tel',
    Tel = 'tel', // backwards compatibility
    Number = 'number',
    //
    Time = 'time',
    Date = 'date',
    Week = 'week',
    Month = 'month',
}

@Component
export default class InputText extends Vue {
    @Prop({ default : InputTextVariant.Text })
    variant: InputTextVariant;

    @Prop()
    value: any;

    @Prop({ type : Boolean })
    active: boolean;
    localActive: boolean = false;

    @Watch('active')
    onActiveChange(value: boolean) {
        this.localActive = value;
    }

    onInput(event: InputEvent) {
        this.$emit('input', (event.target as any).value);
    }

    focus() {
        this.localActive = true;
        this.$emit('input', true);
    }

    unfocus() {
        this.localActive = false;
        this.$emit('input', false);
    }

    get cssClasses() {
        return {
            // force the label to active when using the new datetime fields as they already have placeholders that disrupt the label
            active : this.localActive || this.value || [ 'time', 'date', 'week', 'month' ].includes(this.variant),
        };
    }
}
</script>
<style lang="scss">
.input.text {
    display : block;
    position : relative;
    transition : all ease 0.25s;

    margin : $medium / 4 0;

    border-bottom : $thickness-primary solid $color-primary;

    label {
        display : inline-block;
        position : absolute;

        top : 50%;
        left : $medium / 2;

        transform : translateY(-50%);

        transition : all ease 0.25s;

        color : $color-primary;

        font-size : $font-medium;


        opacity : 0.5;

        @extend .no-click;
    }

    input, textarea {
        display : block;
        transition : all ease 0.25s;

        width : 100%;

        padding : $medium / 2;

        background-color : transparent;

        color : $color-primary;

        border : none;

        font-family : $font-primary;
        font-size : $font-medium;

        box-sizing : border-box;

        &:-webkit-autofill {
            box-shadow : 0 0 0 1000px $color-compliment-primary inset;
            -webkit-text-fill-color : $color-primary;
        }

        &:-webkit-autofill + label {
            opacity : 0;
        }
    }

    textarea {
        resize : none;

        & + label {
            top : $medium;
        }
    }

    &.active {
        margin-top : $medium;

        label {
            top : 0;
            left : 0;

            font-size : $font-medium / 1.75;

            opacity : 1 !important;
        }
    }
}
</style>
