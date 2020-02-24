### Usage
Add the ***uis-navbar-dropdown*** as child of Anchor list of navbar

```vue
<template>
    <nav class="uis-navbar
            uis-navbar-default
            uis-navbar-container
            uis-padding
            uis-padding-small
            uis-padding-remove-vertical">
        <div class="uis-navbar-left">
            <ul class="uis-navbar-nav">
                <li>
                    <a href="#">
                        Home
                    </a>
                </li>

                <li>
                    <a href="#">
                        About
                    </a>
                </li>
            </ul>
        </div>

        <div class="uis-navbar-right">
            <ul class="uis-navbar-nav">
                <li @click="isNavbarDropdownOpen = true">
                    <a>
                        <uis-navbar-dropdown
                            :isOpen.sync="isNavbarDropdownOpen">
                            <uis-avatar
                                :color="'secondary'"
                                :label="'JD'"/>

                            <uis-nav
                                :isNavDropdown="true"
                                slot="menu">
                                <uis-nav-item>
                                    List Item
                                </uis-nav-item>
                                <uis-nav-item>
                                    List Item
                                </uis-nav-item>
                                <uis-nav-item
                                    :isDivider="true"/>
                                <uis-nav-item>
                                    List Item
                                </uis-nav-item>
                            </uis-nav>
                        </uis-navbar-dropdown>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        data()
        {
            return{
                isNavbarDropdownOpen: false,
            };
        },
    };
</script>
```