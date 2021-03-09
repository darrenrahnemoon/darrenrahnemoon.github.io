<template>
    <div class="loader spinner" />
</template>
<style lang="scss">
.loader.spinner {
    position : absolute;
    top : 50%;
    left : 50%;

    &::before {
        display : inline-block;
        position : absolute;
        top : 50%;
        left : 50%;
        margin-top : -$large / 2;
        margin-left : -$large / 2;
        width : $large;
        height : $large;
        //
        border : $x-small solid rgba($color-light, 0.5);
        border-radius : 50%;
        //
        content : "";
    }

    &::after {
        position : absolute;
        display : inline-block;
        width : $large;
        height : $large;
        top : 50%;
        left : 50%;
        margin-top : -$large / 2;
        margin-left : -$large / 2;
        //
        border-width : 4px;
        border-style : solid;
        border-color : $color-light transparent transparent;
        border-radius : 50%;
        //
        animation : loader-spinner 1s linear;
        animation-iteration-count : infinite;
        //
        content : "";
    }

    @each $key, $value in $color {
        &.#{$key} {
            &::before {
                border-color : rgba($value, 0.5);
            }

            &::after {
                border-color : $value transparent transparent;
            }
        }
    }
}


@keyframes loader-spinner {
    from { transform : rotate(0deg); }
    to { transform : rotate(360deg); }
}
</style>
