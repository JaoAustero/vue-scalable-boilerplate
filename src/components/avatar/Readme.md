### Usage
To create a avatar, use the ***uis-avatar*** component.

&nbsp;
&nbsp;
&nbsp;

```vue
<template>
    <uis-avatar
        :label="'JA'"/>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Color Modifier
There are several style modifiers applied with the ***:color*** prop.
```vue
<template>
    <div>
        <uis-avatar
            :label="'PR'"
            :color="'primary'"/>

        <uis-avatar
            :label="'SE'"
            :color="'secondary'"/>
    </div>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Size Modifier
Use one of the following ***:size*** prop options for additional styles.

```vue
<template>
    <uis-avatar
        :label="'LG'"
        :size="'large'"/>
</template>
```