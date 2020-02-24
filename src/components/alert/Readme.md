### Usage
To apply this component, use the ***uis-alert*** component.

```vue
<template>
    <uis-alert>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
    </uis-alert>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Close modifier
To remove the close button, set the ***:close*** to false.

```vue
<template>
    <uis-alert
        :close="false">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
    </uis-alert>
</template>
```

### Color modifier
You can change the color by using this ***:color*** prop and pass a color as
string.

```vue
<template>
    <div>
        <uis-alert
            :color="'primary'">
            <h3>Primary</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</p>
        </uis-alert>

        <uis-alert
            :color="'success'">
            <h3>Success</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</p>
        </uis-alert>

        <uis-alert
            :color="'warning'">
            <h3>Warning</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</p>
        </uis-alert>

        <uis-alert
            :color="'danger'">
            <h3>Danger</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</p>
        </uis-alert>
    </div>
</template>
```