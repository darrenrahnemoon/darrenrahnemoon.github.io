<template>
    <div class="loader ellipsis">
        <div class="item" />
        <div class="item" />
        <div class="item" />
        <div class="item" />
    </div>
</template>
<style lang="scss">
.loader.ellipsis {
    display : inline-block;
    position : absolute;
    width : $large;
    height : $large;
    top : 50%;
    left : 50%;
    margin-top : -$large / 2;
    margin-left : -$large / 2;

    .item {
        position : absolute;
        top : 27px;
        width : 11px;
        height : 11px;
        border-radius : 50%;
        background-color : $color-light;
        animation-timing-function : cubic-bezier(0, 1, 1, 0);

        &:nth-child(1) {
            left : 6px;
            animation : loader-ellipsis1 0.5s infinite;
        }

        &:nth-child(2) {
            left : 6px;
            animation : loader-ellipsis2 0.5s infinite;
        }

        &:nth-child(3) {
            left : 26px;
            animation : loader-ellipsis2 0.5s infinite;
        }

        &:nth-child(4) {
            left : 45px;
            animation : loader-ellipsis3 0.5s infinite;
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

@keyframes loader-ellipsis1 {
    0% {
        transform : scale(0);
    }

    100% {
        transform : scale(1);
    }
}

@keyframes loader-ellipsis3 {
    0% {
        transform : scale(1);
    }

    100% {
        transform : scale(0);
    }
}

@keyframes loader-ellipsis2 {
    0% {
        transform : translate(0, 0);
    }

    100% {
        transform : translate(19px, 0);
    }
}

</style>
