<template>
    <container class="playground p-md mt-none">
        <!-- Headers  -->
        <h1>Welcome to the playground</h1>
        <h2>Welcome to the playground</h2>
        <h3>Welcome to the playground</h3>
        <h4>Welcome to the playground</h4>
        <h5>Welcome to the playground</h5>
        <h6>Welcome to the playground</h6>

        <hr>

        <!-- Layouts -->
        <h1 class="mb-md">
            Layouts
        </h1>
        <h2>Columns With Different Ratios</h2>
        <div class="mb-md">
            e.g. 2:1
        </div>
        <row>
            <column ratio="1" class="bc-darker tc-light p-md">
                <span class="h1">1</span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore voluptatem perferendis minima laboriosam accusantium, nostrum, fugiat, quam quia pariatur beatae est atque! Vel unde doloribus voluptate hic laudantium assumenda eveniet!
            </column>
            <column ratio="2" class="bc-primary tc-dark p-md">
                <span class="h1">2</span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore voluptatem perferendis minima laboriosam accusantium, nostrum, fugiat, quam quia pariatur beatae est atque! Vel unde doloribus voluptate hic laudantium assumenda eveniet!
            </column>
            <column ratio="1" class="bc-secondary tc-lighter p-md">
                <span class="h1">3</span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore voluptatem perferendis minima laboriosam accusantium, nostrum, fugiat, quam quia pariatur beatae est atque! Vel unde doloribus voluptate hic laudantium assumenda eveniet!
            </column>
        </row>

        <br>

        <h2>Row Reverse</h2>
        <row reverse>
            <column ratio="2" class="bc-dark tc-light p-md">
                <span class="h1">1</span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore voluptatem perferendis minima laboriosam accusantium, nostrum, fugiat, quam quia pariatur beatae est atque! Vel unde doloribus voluptate hic laudantium assumenda eveniet!
            </column>
            <column ratio="1" class="bc-secondary tc-lighter p-md">
                <span class="h1">2</span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore voluptatem perferendis minima laboriosam accusantium, nostrum, fugiat, quam quia pariatur beatae est atque! Vel unde doloribus voluptate hic laudantium assumenda eveniet!
            </column>
        </row>

        <br>

        <h2>Row With Vertical Orientation</h2>
        <row orientation="vertical">
            <column ratio="3" class="bc-primary tc-dark p-md">
                <span class="h1">1</span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore voluptatem perferendis minima laboriosam accusantium, nostrum, fugiat, quam quia pariatur beatae est atque! Vel unde doloribus voluptate hic laudantium assumenda eveniet!
            </column>
            <column class="bc-dark tc-light p-md">
                <span class="h1">2</span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore voluptatem perferendis minima laboriosam accusantium, nostrum, fugiat, quam quia pariatur beatae est atque! Vel unde doloribus voluptate hic laudantium assumenda eveniet!
            </column>
            <column class="bc-light tc-dark p-md">
                <span class="h1">3</span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore voluptatem perferendis minima laboriosam accusantium, nostrum, fugiat, quam quia pariatur beatae est atque! Vel unde doloribus voluptate hic laudantium assumenda eveniet!
            </column>
            <column ratio="2" class="bc-secondary tc-light p-md">
                <span class="h1">4</span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore voluptatem perferendis minima laboriosam accusantium, nostrum, fugiat, quam quia pariatur beatae est atque! Vel unde doloribus voluptate hic laudantium assumenda eveniet!
            </column>
        </row>

        <hr>

        <h1>Progress Bars</h1>
        <!-- Horizontal -->
        <progress-bar progress="60" class="py-sm primary" />
        <progress-bar progress="50" class="py-sm h-md secondary" />
        <progress-bar progress="80" class="py-sm light" />
        <progress-bar progress="40" class="py-sm dark" />
        <progress-bar progress="20" class="py-sm h-lg primary" />
        <progress-bar progress="90" class="py-sm secondary" />
        <progress-bar progress="60" class="py-sm light" />

        <!-- Vertical -->
        <progress-bar progress="60" orientation="vertical" class="primary" />
        <progress-bar progress="50" orientation="vertical" class="secondary" />
        <progress-bar progress="80" orientation="vertical" class="light" />
        <progress-bar progress="40" orientation="vertical" class="dark" />
        <progress-bar progress="20" orientation="vertical" class="primary" />
        <progress-bar progress="90" orientation="vertical" class="secondary" />
        <progress-bar progress="60" orientation="vertical" class="light" />
        <progress-bar progress="60" orientation="vertical" class="primary" />
        <progress-bar progress="50" orientation="vertical" class="secondary" />
        <progress-bar progress="80" orientation="vertical" class="light" />
        <progress-bar progress="40" orientation="vertical" class="dark" />
        <progress-bar progress="20" orientation="vertical" class="primary" />
        <progress-bar progress="90" orientation="vertical" class="secondary" />
        <progress-bar progress="60" orientation="vertical" class="light" />
        <progress-bar progress="60" orientation="vertical" class="primary" />
        <progress-bar progress="50" orientation="vertical" class="secondary" />
        <progress-bar progress="80" orientation="vertical" class="light" />
        <progress-bar progress="40" orientation="vertical" class="dark" />
        <progress-bar progress="20" orientation="vertical" class="primary" />
        <progress-bar progress="90" orientation="vertical" class="secondary" />
        <progress-bar progress="60" orientation="vertical" class="light" />

        <hr>

        <!-- Icons -->
        <h1>Icons</h1>
        <icon name="crow" size="2" />
        <icon variant="brand" name="500px" size="2" />
        <icon variant="brand" name="accusoft" size="2" />
        <icon variant="brand" name="adn" size="2" />
        <icon variant="brand" name="adobe" size="2" />
        <icon variant="brand" name="adversal" size="2" />
        <icon variant="brand" name="affiliatetheme" size="2" />
        <icon variant="brand" name="airbnb" size="2" />
        <icon variant="brand" name="algolia" size="2" />
        <icon variant="brand" name="amazon" size="2" />
        <icon variant="brand" name="amilia" size="2" />
        <icon variant="brand" name="android" size="2" />
        <icon variant="brand" name="angellist" size="2" />
        <icon variant="brand" name="angrycreative" size="2" />
        <icon variant="brand" name="angular" size="2" />
        <icon variant="brand" name="app-store" size="2" />
        <icon variant="brand" name="app-store-ios" size="2" />
        <icon variant="brand" name="apper" size="2" />
        <icon variant="brand" name="apple" size="2" />
        <icon variant="brand" name="artstation" size="2" />
        <icon variant="brand" name="asymmetrik" size="2" />
        <icon variant="brand" name="atlassian" size="2" />
        <icon variant="brand" name="audible" size="2" />
        <icon variant="brand" name="autoprefixer" size="2" />
        <icon variant="brand" name="avianex" size="2" />
        <icon variant="brand" name="aviato" size="2" />
        <icon variant="brand" name="aws" size="2" />
        <icon variant="brand" name="bandcamp" size="2" />
        <icon variant="brand" name="battle-net" size="2" />
        <icon variant="brand" name="behance" size="2" />
        <icon variant="brand" name="behance-square" size="2" />
        <icon variant="brand" name="bimobject" size="2" />
        <icon variant="brand" name="bitbucket" size="2" />
        <icon variant="brand" name="bity" size="2" />
        <icon variant="brand" name="black-tie" size="2" />
        <icon variant="brand" name="blackberry" size="2" />
        <icon variant="brand" name="blogger" size="2" />
        <icon variant="brand" name="blogger-b" size="2" />
        <icon variant="brand" name="bootstrap" size="2" />
        <icon variant="brand" name="buffer" size="2" />
        <icon variant="brand" name="buromobelexperte" size="2" />
        <icon variant="brand" name="buy-n-large" size="2" />
        <icon variant="brand" name="buysellads" size="2" />

        <hr>

        <!-- Alert box -->
        <h1>Alert Boxes</h1>
        <alert-box>
            <div class="title">
                Alert Detected
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officiis, eveniet ratione vero amet, minima velit molestiae molestias cumque quod quas, quos ab ut eum repellat quis? Dignissimos, quia dolorem!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officiis, eveniet ratione vero amet, minima velit molestiae molestias cumque quod quas, quos ab ut eum repellat quis? Dignissimos, quia dolorem!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officiis, eveniet ratione vero amet, minima velit molestiae molestias cumque quod quas, quos ab ut eum repellat quis? Dignissimos, quia dolorem!
        </alert-box>
        <alert-box class="secondary" dismissable>
            <div class="title">
                Alert Detected
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nulla, dolores eum fuga molestias at repellat alias, in qui mollitia natus officiis rerum magni pariatur minus temporibus illo veniam tempora.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nulla, dolores eum fuga molestias at repellat alias, in qui mollitia natus officiis rerum magni pariatur minus temporibus illo veniam tempora.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nulla, dolores eum fuga molestias at repellat alias, in qui mollitia natus officiis rerum magni pariatur minus temporibus illo veniam tempora.
        </alert-box>
        <alert-box class="light" dismissable>
            <div class="title">
                Alert Detected
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nulla, dolores eum fuga molestias at repellat alias, in qui mollitia natus officiis rerum magni pariatur minus temporibus illo veniam tempora.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nulla, dolores eum fuga molestias at repellat alias, in qui mollitia natus officiis rerum magni pariatur minus temporibus illo veniam tempora.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nulla, dolores eum fuga molestias at repellat alias, in qui mollitia natus officiis rerum magni pariatur minus temporibus illo veniam tempora.
        </alert-box>

        <hr>

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
    </container>
</template>
<style lang="scss">
.playground {
    background : linear-gradient(to bottom right, $color-dark, $color-darker);
}
</style>
