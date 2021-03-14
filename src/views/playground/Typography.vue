<template>
    <div>
        <!-- Headers  -->
        <h1>H1: Welcome to the playground</h1>
        <h2>H2: Welcome to the playground</h2>
        <h3>H3: Welcome to the playground</h3>
        <h4>H4: Welcome to the playground</h4>
        <h5>H5: Welcome to the playground</h5>
        <h6>H6: Welcome to the playground</h6>

        <hr>

        <!-- Font Sizes -->
        <div
            v-for="size in sizes"
            :key="size"
            :class="`font-${size}`"
            class="py-sm"
        >
            {{ size | startCase }}: Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis natus earum veniam vitae saepe ullam omnis, blanditiis dignissimos tempora facilis quaerat minima, sit enim, expedita voluptas sapiente totam aperiam in.
        </div>

        <hr>

        <!-- Font Colors -->
        <div
            v-for="color in colors"
            :key="color"
            :class="`tc-${color}`"
            class="py-sm"
        >
            {{ color | startCase }}: Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis natus earum veniam vitae saepe ullam omnis, blanditiis dignissimos tempora facilis quaerat minima, sit enim, expedita voluptas sapiente totam aperiam in.
        </div>

        <hr>

        <!-- Highlight -->
        <p v-for="color in colors" :key="color">
            You can use a mark tag with class '{{ color }}' to <mark :class="color">highlight</mark> text.
        </p>
        <hr class="hidden small">
        <p v-for="color in colors" :key="color">
            You can use a span tag with class 'highlight' + '{{ color }}' to <span class="highlight" :class="color">highlight</span> text.
        </p>

        <hr>

        <!-- Overline, Strikethrough, Underline, etc. -->
        <p>
            <span class="overline">This line of text will render overlined.</span>
        </p>
        <p>
            <del>This line of text is meant to be treated as deleted text.</del>
            <br>
            <s>This line of text is meant to be treated as no longer accurate.</s>
            <br>
            <span class="strikethrough">This line of text has no significance but is striken.</span>
        </p>
        <p>
            <ins>This line of text is meant to be treated as an addition to the document.</ins>
            <br>
            <u>This line of text will render as underlined.</u>
            <br>
            <span class="underline">This line of text will render as underlined.</span>
        </p>

        <hr>

        <!-- Bold, Italics -->
        <p>
            <strong>This line rendered as bold text.</strong>
            <br>
            <b>This line rendered as bold text.</b>
            <br>
            <span class="bold">This line rendered as bold text.</span>
        </p>
        <p>
            <em>This line rendered as italicized text.</em>
            <br>
            <i>This line rendered as italicized text.</i>
            <br>
            <span class="italics">This line rendered as italicized text.</span>
        </p>

        <hr>

        <!-- Blockquotes, Quotes -->

        <q cite="https://rahntech.com">This is an inline quote</q>
        <hr class="hidden small">
        <figure>
            <blockquote cite="https://rahntech.com">
                Fair is foul and foul is fair.
            </blockquote>
            <figcaption>
                William Shakespeare in <cite>Machbeth</cite>
            </figcaption>
        </figure>

        <hr>

        <!-- Lists -->
        <row>
            <column>
                <ul class="square">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>
                        Item 4
                        <ul class="circle">
                            <li>Sub Item 1</li>
                            <li>Sub Item 2</li>
                            <li>
                                Sub Item 3
                                <ul class="disc">
                                    <li>SubSub Item 1</li>
                                    <li>SubSub Item 2</li>
                                    <li>SubSub Item 3</li>
                                    <li>SubSub Item 4</li>
                                </ul>
                            </li>
                            <li>Sub Item 4</li>
                        </ul>
                    </li>
                    <li>Item 5</li>
                </ul>
            </column>
            <column>
                <ol class="alpha">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>
                        Item 4
                        <ol class="roman">
                            <li>Sub Item 1</li>
                            <li>Sub Item 2</li>
                            <li>
                                Sub Item 3
                                <ol class="decimal">
                                    <li>SubSub Item 1</li>
                                    <li>SubSub Item 2</li>
                                    <li>SubSub Item 3</li>
                                    <li>SubSub Item 4</li>
                                </ol>
                            </li>
                            <li>Sub Item 4</li>
                        </ol>
                    </li>
                    <li>Item 5</li>
                </ol>
            </column>
        </row>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Typography extends Vue {
    get sizes() {
        return [ 'x-small', 'small', 'medium', 'large', 'x-large', 'xx-large' ];
    }

    get colors() {
        return [ 'primary', 'secondary', 'light' ];
    }
}
</script>
