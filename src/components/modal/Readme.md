### Usage
Use the ***uis-modal*** component to render a modal and an overlay that blanks
out the page. The modal display is controlled with the ***isOpen.sync*** prop

```vue
<template>
    <div>
        <uis-button
            @click="modalOpen = true">
            Open Modal
        </uis-button>

        <uis-modal
            :isOpen.sync="modalOpen">
            <uis-modal-body>
                <uis-modal-title>Headline</uis-modal-title>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.</p>

                <div class="uis-text-right">
                    <uis-button
                        @click="modalOpen = false">
                        Cancel
                    </uis-button>
                    <uis-button
                        :color="'primary'"
                        @click="modalOpen = false">
                        Save
                    </uis-button>
                </div>
            </uis-modal-body>
        </uis-modal>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                modalOpen: false,
            };
        },
    };
</script>
```

&nbsp;
&nbsp;
&nbsp;

### Center modifier
Add the ***:isCenter*** props and set the value to **true** to enable
the center modifier it will align vertical center.

```vue
<template>
    <div>
        <uis-button
            @click="modalOpen = true">
            Open Modal
        </uis-button>

        <uis-modal
            :isOpen.sync="modalOpen"
            :isCenter="true">
            <uis-modal-body>
                <uis-modal-title>Headline</uis-modal-title>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.</p>

                <div class="uis-text-right">
                    <uis-button
                        @click="modalOpen = false">
                        Cancel
                    </uis-button>
                    <uis-button
                        :color="'primary'"
                        @click="modalOpen = false">
                        Save
                    </uis-button>
                </div>
            </uis-modal-body>
        </uis-modal>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                modalOpen: false,
            };
        },
    };
</script>
```