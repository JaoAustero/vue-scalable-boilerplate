### Usage
Use the ***uis-nav*** component with combined with one of it sub components

```vue
<template>
    <uis-nav>
        <uis-nav-item
            :isActive="true">
            Active Item
        </uis-nav-item>
        <uis-nav-item>
            Item 1
        </uis-nav-item>
        <uis-nav-item>
            Item 2
        </uis-nav-item>
    </uis-nav>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Nested Navs
Set the ***:isParent*** prop to true to enable the nesting parent for sub items.

```vue
<template>
    <uis-nav>
        <uis-nav-item
            :isActive="true">
            Active
        </uis-nav-item>
        <uis-nav-item
            :isParent="true">
            Parent

            <uis-nav
                :isNavSub="true">
                <uis-nav-item>
                    Sub-Item 1
                </uis-nav-item>
                <uis-nav-item>
                    Sub-Item 2
                </uis-nav-item>
            </uis-nav>
        </uis-nav-item>
    </uis-nav>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Header and Divider modifier
Add the ***:isHeader*** or ***:isDivider*** props to add heading or list divider.

```vue
<template>
    <uis-nav>
        <uis-nav-item
            :isHeader="true">
            Header
        </uis-nav-item>
        <uis-nav-item>
            Item
        </uis-nav-item>
        <uis-nav-item>
            Item
        </uis-nav-item>
        <uis-nav-item
            :isDivider="true"/>
        <uis-nav-item>
            Item
        </uis-nav-item>
    </uis-nav>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Center modifier
Set true ***:isCenter*** to make the list align vertical center.

```vue
<template>
    <uis-nav
        :isCenter="true">
        <uis-nav-item
            :isActive="true">
            Active
        </uis-nav-item>
        <uis-nav-item>
            Item
        </uis-nav-item>
        <uis-nav-item>
            Item
        </uis-nav-item>
        <uis-nav-item>
            Item
        </uis-nav-item>
    </uis-nav>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Nav in Dropdown
Set true ***:isNavDropdown*** to make the list align vertical center.

```vue
<template>
    <uis-dropdown
        :isOpen.sync="navdropdownOpen">
        <uis-button
            @click="navdropdownOpen = true">
            Open Dropdown
        </uis-button>
        
        <uis-nav
            slot="menu"
            :isNavDropdown="true">
            <uis-nav-item
                :isHeader="true">
                Menu
            </uis-nav-item>
            <uis-nav-item>
                Item
            </uis-nav-item>
            <uis-nav-item>
                Item
            </uis-nav-item>
            <uis-nav-item
                :isDivider="true"/>
            <uis-nav-item>
                Item
            </uis-nav-item>
        </uis-nav>
    </uis-dropdown>
</template>

<script>
    export default {
        data() {
            return {
                navdropdownOpen: false,
            };
        },
    };
</script>
```
