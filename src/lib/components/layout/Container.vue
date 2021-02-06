<template>
    <div class="container">
        <slot />
    </div>
</template>
<style lang="scss">
.container {
    margin : $small $xxx-large;

    @include on(small) {
        margin : $x-small;
    }

    @include on(medium) {
        margin : $small $large;
    }

    @include on(large) {
        margin : $small $x-large;
    }

    @include on(x-large) {
        margin : $small $xx-large;
    }
}

</style>
