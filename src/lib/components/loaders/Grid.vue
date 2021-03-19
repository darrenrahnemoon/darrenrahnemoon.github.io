<template>
    <div class="loader grid">
        <div class="item" />
        <div class="item" />
        <div class="item" />
        <div class="item" />
        <div class="item" />
        <div class="item" />
        <div class="item" />
        <div class="item" />
        <div class="item" />
    </div>
</template>

<style lang="scss">
.loader.grid {
    display : inline-block;
    position : absolute;
    top : 50%;
    left : 50%;

    width : $large;
    height : $large;

    margin-top : -$large / 2;
    margin-left : -$large / 2;

    .item {
        position : absolute;

        width : 13px;
        height : 13px;

        background : $color-light;

        border-radius : 50%;

        animation : loader-grid 0.5s linear infinite;

        &:nth-child(1) {
            top : 6px;
            left : 6px;

            animation-delay : 0s;
        }

        &:nth-child(2) {
            top : 6px;
            left : 26px;

            animation-delay : -0.4s;
        }

        &:nth-child(3) {
            top : 6px;
            left : 45px;

            animation-delay : -0.8s;
        }

        &:nth-child(4) {
            top : 26px;
            left : 6px;

            animation-delay : -0.4s;
        }

        &:nth-child(5) {
            top : 26px;
            left : 26px;

            animation-delay : -0.8s;
        }

        &:nth-child(6) {
            top : 26px;
            left : 45px;

            animation-delay : -1.2s;
        }

        &:nth-child(7) {
            top : 45px;
            left : 6px;

            animation-delay : -0.8s;
        }

        &:nth-child(8) {
            top : 45px;
            left : 26px;

            animation-delay : -1.2s;
        }

        &:nth-child(9) {
            top : 45px;
            left : 45px;

            animation-delay : -1.6s;
        }
    }

    @each $key, $value in $color {
        &.#{$key} {
            .item {
                background-color : $value;
            }
        }
    }
}

@keyframes loader-grid {
    0%, 100% {
        opacity : 1;
    }

    50% {
        opacity : 0.5;
    }
}
</style>
