### Usage
To create a label, just use the ***uis-label*** component, the default HTML
tag is span, you can modify by using ***:is*** default component of vue.

&nbsp;
&nbsp;
&nbsp;

```vue
<template>
    <uis-label>Default Label</uis-label>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Color modifiers
To modify the background color use ***:color*** prop and pass a color name.

```vue
<template>
    <div>
        <uis-label
            :color="'primary'">
            Primary
        </uis-label>

        <uis-label
            :color="'secondary'">
            Secondary
        </uis-label>

        <uis-label
            :color="'success'">
            Success
        </uis-label>

        <uis-label
            :color="'warning'">
            Warning
        </uis-label>

        <uis-label
            :color="'danger'">
            Danger
        </uis-label>
    </div>
</template>
```