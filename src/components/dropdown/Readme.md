### Usage
Any content, like a button, can be toggle a dropdown. Wrap the content of ***uis-dropdown***
component. We use ***.sync*** to allow us modify the prop value when the user clicks outside
the dropdown will fire an event to close the dropdown. ***slot="menu:*** is the place for
the content which will appear when the dropdown is open.


&nbsp;
&nbsp;
&nbsp;

```vue
<template>
    <uis-dropdown
        :isOpen.sync="dropdownToggle">
        <uis-button
            @click="dropdownToggle = true">
            Dropdown
        </uis-button>

        <ul class="uis-nav
                uis-nav-default"
            slot="menu">
            <li>
                <a href="https://www.gigamare.com">
                    Item Button 1
                </a>
            </li>
            <li>
                <a href="https://www.gigamare.com">
                    Item Button 2
                </a>
            </li>
        </ul>
    </uis-dropdown>
</template>

<script>
    export default {
        data()
        {
            return {
                dropdownToggle: false,
            };
        },
    };
</script>
```

&nbsp;
&nbsp;
&nbsp;

### Position modifiers
Add ***:position*** prop and define the direction where the dropdown should
appear.

```vue
<template>
    <div>
        <uis-dropdown
            :position="'left'"
            :isOpen.sync="dropdownLeftToggle">
            <uis-button
                @click="dropdownLeftToggle = true">
                Left Position
            </uis-button>

            <ul class="uis-nav
                    uis-nav-default"
                slot="menu">
                <li>
                    <a href="https://www.gigamare.com">
                        Item Button 1
                    </a>
                </li>
                <li>
                    <a href="https://www.gigamare.com">
                        Item Button 2
                    </a>
                </li>
            </ul>
        </uis-dropdown>

        <uis-dropdown
            :position="'right'"
            :isOpen.sync="dropdownRightToggle">
            <uis-button
                @click="dropdownRightToggle = true">
                Right Position
            </uis-button>

            <ul class="uis-nav
                    uis-nav-default"
                slot="menu">
                <li>
                    <a href="https://www.gigamare.com">
                        Item Button 1
                    </a>
                </li>
                <li>
                    <a href="https://www.gigamare.com">
                        Item Button 2
                    </a>
                </li>
            </ul>
        </uis-dropdown>
    </div>
</template>

<script>
    export default {
        data()
        {
            return {
                dropdownLeftToggle: false,
                dropdownRightToggle: false,
            };
        },
    };
</script>
```
