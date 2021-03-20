<template>
    <div>
        <h1>Layouts</h1>
        <h2>Columns</h2>
        <row>
            <column
                v-for="(color, index) in colors"
                :key="`columns-${index}`"
                :class="`bc-${color} tcc-${color} p-md`"
            >
                <div class="h1">
                    Column {{ index + 1 }}
                </div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore voluptatem perferendis minima laboriosam accusantium, nostrum, fugiat, quam quia pariatur beatae est atque! Vel unde doloribus voluptate hic laudantium assumenda eveniet!
            </column>
        </row>

        <hr class="hidden">

        <h2>Row Reverse</h2>
        <row reverse>
            <column ratio="2" class="bc-primary tcc-primary p-md">
                <div class="h1">
                    Column 1
                </div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore voluptatem perferendis minima laboriosam accusantium, nostrum, fugiat, quam quia pariatur beatae est atque! Vel unde doloribus voluptate hic laudantium assumenda eveniet!
            </column>
            <column ratio="1" class="bc-secondary tcc-secondary p-md">
                <div class="h1">
                    Column 2
                </div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore voluptatem perferendis minima laboriosam accusantium, nostrum, fugiat, quam quia pariatur beatae est atque! Vel unde doloribus voluptate hic laudantium assumenda eveniet!
            </column>
        </row>

        <hr class="hidden">

        <h2>Row With Vertical Orientation</h2>
        <row orientation="vertical">
            <column v-for="(color, index) in colors" :key="`vertical-orientation-${index}`" :class="`bc-${color} tcc-${color} p-md`">
                <div class="h1">
                    Column {{ index + 1 }}
                </div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore voluptatem perferendis minima laboriosam accusantium, nostrum, fugiat, quam quia pariatur beatae est atque! Vel unde doloribus voluptate hic laudantium assumenda eveniet!
            </column>
        </row>
    </div>
</template>
<script lang="ts">
import { mixins }         from 'vue-class-component';
import { Component }      from 'vue-property-decorator';
import { BasePlayground } from './BasePlayground';

@Component
export default class Layouts extends mixins(BasePlayground) {}
</script>
