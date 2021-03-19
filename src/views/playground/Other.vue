<template>
    <container class="playground p-md mt-none">
        <!-- Accordions -->
        <h1>Accordions</h1>
        <accordion>
            <accordion-item v-for="i in 10" :key="i" :class="[ 'primary', 'primary', 'primary', 'secondary', 'secondary', 'secondary', 'light', 'light', 'light', 'light' ][(i - 1)]">
                <template #title>
                    Accordion {{ i }}
                </template>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, debitis perspiciatis quam, labore natus beatae excepturi possimus obcaecati nostrum ipsa ut fugiat illo sunt assumenda tenetur mollitia corporis, sed eum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, debitis perspiciatis quam, labore natus beatae excepturi possimus obcaecati nostrum ipsa ut fugiat illo sunt assumenda tenetur mollitia corporis, sed eum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, debitis perspiciatis quam, labore natus beatae excepturi possimus obcaecati nostrum ipsa ut fugiat illo sunt assumenda tenetur mollitia corporis, sed eum.
            </accordion-item>
        </accordion>

        <hr>

        <!-- Overlay -->
        <h1>Overlay</h1>
        <row>
            <column class="bc-primary tc-dark p-md">
                <overlay restrict-to-parent-element :visible="isOverlayVisible">
                    <div class="tc-light align-center p-md">
                        OVERLAY CONTTENT GOES HERE
                    </div>
                </overlay>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis saepe, laborum vero dolorem eius sapiente reiciendis quaerat minus ipsa rerum dicta repudiandae quia aut quae, voluptate eligendi! Alias, sint rem!
            </column>
        </row>
        <row class="ha-center">
            <input-button @click.native="isOverlayVisible = !isOverlayVisible">
                Toggle Overlay
            </input-button>
        </row>

        <hr>

        <!-- Loader -->
        <h1>Loaders</h1>

        <row>
            <column class="bc-primary tc-dark p-md">
                <overlay
                    opacity="0.95"
                    restrict-to-parent-element
                    :visible="isLoaderVisible.spinner"
                >
                    <loader-spinner class="primary" />
                </overlay>
                <h3>Spinner</h3>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique molestias tenetur dolore cupiditate, qui commodi molestiae excepturi eos ipsum debitis illo earum provident quisquam placeat saepe nesciunt natus non veritatis.
            </column>
            <column class="bc-secondary tc-light p-md">
                <overlay
                    restrict-to-parent-element
                    :visible="isLoaderVisible.ripple"
                >
                    <loader-ripple class="secondary" />
                </overlay>
                <h3>Ripple</h3>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique molestias tenetur dolore cupiditate, qui commodi molestiae excepturi eos ipsum debitis illo earum provident quisquam placeat saepe nesciunt natus non veritatis.
            </column>
            <column class="bc-light tc-dark p-md">
                <overlay
                    restrict-to-parent-element
                    :visible="isLoaderVisible.ellipsis"
                >
                    <loader-ellipsis class="light" />
                </overlay>
                <h3>Ellipsis</h3>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique molestias tenetur dolore cupiditate, qui commodi molestiae excepturi eos ipsum debitis illo earum provident quisquam placeat saepe nesciunt natus non veritatis.
            </column>
            <column class="bc-primary tc-dark p-md">
                <overlay
                    restrict-to-parent-element
                    :visible="isLoaderVisible.grid"
                >
                    <loader-grid class="primary" />
                </overlay>
                <h3>Grid</h3>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique molestias tenetur dolore cupiditate, qui commodi molestiae excepturi eos ipsum debitis illo earum provident quisquam placeat saepe nesciunt natus non veritatis.
            </column>
        </row>
        <row>
            <column class="p-sm">
                <input-button class="primary" block @click.native="isLoaderVisible.spinner = !isLoaderVisible.spinner">
                    Toggle Loader
                </input-button>
            </column>
            <column class="p-sm">
                <input-button class="secondary" block @click.native="isLoaderVisible.ripple = !isLoaderVisible.ripple">
                    Toggle Loader
                </input-button>
            </column>
            <column class="p-sm">
                <input-button class="light" block @click.native="isLoaderVisible.ellipsis = !isLoaderVisible.ellipsis">
                    Toggle Loader
                </input-button>
            </column>
            <column class="p-sm">
                <input-button class="primary" block @click.native="isLoaderVisible.grid = !isLoaderVisible.grid">
                    Toggle Loader
                </input-button>
            </column>
        </row>
        <row>
            <column class="p-md">
                <overlay
                    opacity="0.8"
                    restrict-to-parent-element
                    :visible="isLoaderVisible.custom"
                >
                    <div>
                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            xml:space="preserve"
                        >
                            <rect transform="translate(0) rotate(180 3 50)">
                                <animate
                                    attributeName="height"
                                    attributeType="XML"
                                    dur="1s"
                                    values="30; 100; 30"
                                    repeatCount="indefinite"
                                />
                            </rect>
                            <rect x="17" transform="translate(0) rotate(180 20 50)">
                                <animate
                                    attributeName="height"
                                    attributeType="XML"
                                    dur="1s"
                                    values="30; 100; 30"
                                    repeatCount="indefinite"
                                    begin="0.1s"
                                />
                            </rect>
                            <rect x="40" transform="translate(0) rotate(180 40 50)">
                                <animate
                                    attributeName="height"
                                    attributeType="XML"
                                    dur="1s"
                                    values="30; 100; 30"
                                    repeatCount="indefinite"
                                    begin="0.3s"
                                />
                            </rect>
                            <rect x="60" transform="translate(0) rotate(180 58 50)">
                                <animate
                                    attributeName="height"
                                    attributeType="XML"
                                    dur="1s"
                                    values="30; 100; 30"
                                    repeatCount="indefinite"
                                    begin="0.5s"
                                />
                            </rect>
                            <rect x="80" transform="translate(0) rotate(180 76 50)">
                                <animate
                                    attributeName="height"
                                    attributeType="XML"
                                    dur="1s"
                                    values="30; 100; 30"
                                    repeatCount="indefinite"
                                    begin="0.1s"
                                />
                            </rect>
                            <rect x="90" transform="translate(0) rotate(180 89 50)">
                                <animate
                                    attributeName="height"
                                    attributeType="XML"
                                    dur="1s"
                                    values="30; 100; 30"
                                    repeatCount="indefinite"
                                    begin="0.3s"
                                />
                            </rect>
                        </svg>
                        <div class="h2 tc-primary">
                            LOADING
                        </div>
                    </div>
                </overlay>
                <h3>Custom</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique molestias tenetur dolore cupiditate, qui commodi molestiae excepturi eos ipsum debitis illo earum provident quisquam placeat saepe nesciunt natus non veritatis.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique molestias tenetur dolore cupiditate, qui commodi molestiae excepturi eos ipsum debitis illo earum provident quisquam placeat saepe nesciunt natus non veritatis.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique molestias tenetur dolore cupiditate, qui commodi molestiae excepturi eos ipsum debitis illo earum provident quisquam placeat saepe nesciunt natus non veritatis.</p>
            </column>
        </row>
        <row>
            <column class="p-sm">
                <input-button block @click.native="isLoaderVisible.custom = !isLoaderVisible.custom">
                    Toggle Loader
                </input-button>
            </column>
        </row>

        <hr>

        <!-- Checkbox -->
        <h1>Checkboxes</h1>
        <row>
            <column v-for="(size, index) in sizes" :key="index">
                <input-checkbox v-for="(color, index2) in colors" :key="index2" :class="[ color, size ]">
                    {{ color | startCase }}
                </input-checkbox>
            </column>
        </row>

        <hr>

        <!-- Radio Button -->
        <h1>Radio Buttons</h1>
        <div class="mb-md">
            Value: {{ radioValue }}
        </div>
        <row>
            <column v-for="(size, index) in sizes" :key="index">
                <input-radio
                    v-for="(color, index2) in colors"
                    :key="index2"
                    v-model="radioValue"
                    :class="[ color, size ]"
                    :option="color"
                >
                    {{ color | startCase }}
                </input-radio>
            </column>
        </row>

        <hr>

        <h1>Switches</h1>
        <row>
            <column v-for="(size, index) in sizes" :key="index">
                <input-switch v-for="(color, index2) in colors" :key="index2" :class="[ color, size ]">
                    {{ color | startCase }}
                </input-switch>
            </column>
        </row>

        <hr>

        <h1>Text Input</h1>
        <row>
            <column v-for="(color, index) in colors" :key="index" class="p-sm">
                <input-text placeholder="Input Text" variant="text" :class="color" />
                <input-text placeholder="Input Textarea" variant="textarea" :class="color" />
                <input-text placeholder="Input Search" variant="search" :class="color" />
                <input-text placeholder="Input Password" variant="password" :class="color" />
                <input-text placeholder="Input Email" variant="email" :class="color" />
                <input-text placeholder="Input Tel" variant="tel" :class="color" />
                <input-text placeholder="Input Number" variant="number" :class="color" />
                <input-text placeholder="Input Time" variant="time" :class="color" />
                <input-text placeholder="Input Date" variant="date" :class="color" />
                <input-text placeholder="Input Week" variant="week" :class="color" />
                <input-text placeholder="Input Month" variant="month" :class="color" />
            </column>
        </row>
    </container>
</template>
<style lang="scss">
.playground {
    background : linear-gradient(to bottom right, $color-dark, $color-darker);
}
</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Accordion extends Vue {
    isOverlayVisible = false;

    isLoaderVisible = {
        spinner  : false,
        ripple   : false,
        ellipsis : false,
        grid     : false,
        custom   : false,
    }

    radioValue = null;
    textValue = null;

    get colors() {
        return  [ 'primary', 'secondary', 'light' ];
    }

    get sizes() {
        return [ 'small', 'medium', 'large', 'x-large' ];
    }
}
</script>

<style lang="scss">
svg {
    width : 100px;
    height : 100px;
    margin : 0 auto;

    rect {
        width : 3px;
        height : 100%;

        fill : $color-primary;
    }
}
</style>
