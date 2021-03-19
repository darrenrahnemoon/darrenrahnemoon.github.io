<template>
    <div class="loader ripple">
        <div>
            <div class="item" />
            <div class="item" />
        </div>
    </div>
</template>
<style lang="scss">
.loader.ripple {
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

        border : $x-small solid $color-light;
        border-radius : 50%;

        animation : loader-ripple 0.5s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        opacity : 1;

        &:nth-child(2) {
            animation-delay : -0.5s;
        }
    }

    @each $key, $value in $color {
        &.#{$key} {
            .item {
                border-color : $value;
            }
        }
    }
}

@keyframes loader-ripple {
    from {
        top : 28px;
        left : 28px;

        width : 0;
        height : 0;

        opacity : 1;
    }

    to {
        top : -1px;
        left : -1px;

        width : 58px;
        height : 58px;

        opacity : 0;
    }
}

</style>
