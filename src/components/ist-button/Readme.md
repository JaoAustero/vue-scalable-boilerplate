### Usage
To create a button, use the ***ist-button*** component.

&nbsp;
&nbsp;
&nbsp;

```vue
<template>
    <ist-button>Default</ist-button>
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
        <ist-button
            :color="'primary'">
            Primary
        </ist-button>

        <ist-button
            :color="'secondary'">
            Secondary
        </ist-button>

        <ist-button
            :color="'success'">
            Success
        </ist-button>

        <ist-button
            :color="'warning'">
            Warning
        </ist-button>

        <ist-button
            :color="'danger'">
            Danger
        </ist-button>
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
    <ist-button
        :fullWidth="true">
        Full Width
    </ist-button>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Link modifiers
If you want anchor with a button style, create ***:href*** and pass a URL it will automatically convert anchor tag with a button style.

```vue
<template>
    <ist-button
        :href="'https://www.google.com'">
        Link Button
    </ist-button>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Loading modifiers
Make the ***:loading*** prop as true it will automatically disabled and change the label into loading icon.

```vue
<template>
    <ist-button
        :loading="true">
        Loading Button
    </ist-button>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Outline modifiers
If you want outline button style, just pass true boolean on ***:outline*** prop it will remove the background and change preserve the border. The color of border will be dependent on ***:color*** prop.

```vue
<template>
    <ist-button
        :color="'primary'"
        :outline="true">
        Outline Primary
    </ist-button>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Size modifiers
There are several size modifiers applied with the ***:size*** prop.

```vue
<template>
    <ist-button
        :size="'large'">
        Large Size
    </ist-button>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Text modifiers
These will remove the background and padding. The color will be dependent on ***:color*** prop.

```vue
<template>
    <ist-button
        :color="'primary'"
        :text="true">
        Text Button
    </ist-button>
</template>
```
