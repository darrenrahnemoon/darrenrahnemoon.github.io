<template>
    <div class="container">
        <slot />
    </div>
</template>
<style lang="scss">
.container {
    @include on-small-devices {
        margin : $x-small;
    }

    @include on-medium-devices {
        margin : $small $large;
    }

    @include on-large-devices {
        margin : $small $x-large;
    }
}

</style>
