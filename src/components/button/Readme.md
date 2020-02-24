### Usage
To create a button, use the ***uis-button*** component.

&nbsp;
&nbsp;
&nbsp;

```vue
<template>
    <uis-button>Default</uis-button>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Color modifiers
There are several style modifiers applied with the ***:color*** prop.
```vue
<template>
    <div>
        <uis-button
            :color="'primary'">
            Primary
        </uis-button>

        <uis-button
            :color="'secondary'">
            Secondary
        </uis-button>

        <uis-button
            :color="'success'">
            Success
        </uis-button>

        <uis-button
            :color="'warning'">
            Warning
        </uis-button>

        <uis-button
            :color="'danger'">
            Danger
        </uis-button>
    </div>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Full Width modifiers
Setting the ***:fillWidth*** prop as true it will apply a full width class.

```vue
<template>
    <uis-button
        :fullWidth="true">
        Full Width
    </uis-button>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Link modifiers
If you want anchor with a button style, create ***:href*** and pass a URL it will automatically convert anchor tag with a button style.

```vue
<template>
    <uis-button
        :href="'https://www.google.com'">
        Link Button
    </uis-button>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Loading modifiers
Make the ***:loading*** prop as true it will automatically disabled and change the label into loading icon.

```vue
<template>
    <uis-button
        :loading="true">
        Loading Button
    </uis-button>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Outline modifiers
If you want outline button style, just pass true boolean on ***:outline*** prop it will remove the background and change preserve the border. The color of border will be dependent on ***:color*** prop.

```vue
<template>
    <uis-button
        :color="'primary'"
        :outline="true">
        Outline Primary
    </uis-button>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Size modifiers
There are several size modifiers applied with the ***:size*** prop.

```vue
<template>
    <uis-button
        :size="'large'">
        Large Size
    </uis-button>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Text modifiers
These will remove the background and padding. The color will be dependent on ***:color*** prop.

```vue
<template>
    <uis-button
        :color="'primary'"
        :text="true">
        Text Button
    </uis-button>
</template>
```
