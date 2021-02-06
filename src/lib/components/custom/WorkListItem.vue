<template>
    <column :size="size" class="work-list-item">
        <div class="thumbnail" :style="{ backgroundImage : 'url(' + thumbnail + ')' }">
            <a class="wrapper" :href="link">
                <div class="content">
                    <span v-for="icon in icons" class="icon la" :class="icon" />
                    <h2 class="head">{{ title }}</h2>
                    <div class="head-sub">{{ description }}</div>
                </div>
            </a>
        </div>
    </column>
</template>

<script>
export default {
    name  : 'WorkListItem',
    props : {
        size        : [ Number, String ],
        thumbnail   : String,
        icons       : Array,
        title       : String,
        description : String,
        link        : String,
    },
};
</script>
