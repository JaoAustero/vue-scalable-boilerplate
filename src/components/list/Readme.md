### Usage
Use the ***uis-list*** to create a smart list with different modifiers

```vue
<template>
    <uis-list>
        <li>
            Item 1
        </li>
        <li>
            Item 2
        </li>
        <li>
            Item 3
        </li>
    </uis-list>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Bullet modifier
Set the ***:bullet*** to true, it will enable the bullet list style

```vue
<template>
    <uis-list
        :bullet="true">
        <li>
            Item 1
        </li>
        <li>
            Item 2
        </li>
        <li>
            Item 3
        </li>
    </uis-list>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Divider modifier
Set the ***:divider*** to true, This will add divider every after of itemse
except to the last item

```vue
<template>
    <uis-list
        :divider="true">
        <li>
            Item 1
        </li>
        <li>
            Item 2
        </li>
        <li>
            Item 3
        </li>
    </uis-list>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Size modifier
Use the ***:size*** prop, and set the value based on the values options on the
top, this can be mixed on other modifiers like divider.

```vue
<template>
    <uis-list
        :size="'medium'"
        :divider="true">
        <li>
            Item 1
        </li>
        <li>
            Item 2
        </li>
        <li>
            Item 3
        </li>
    </uis-list>
</template>
```

### Striped modifier
Set the ***:striped*** prop, it will add light gray background every Odd item

```vue
<template>
    <uis-list
        :striped="true">
        <li>
            Item 1
        </li>
        <li>
            Item 2
        </li>
        <li>
            Item 3
        </li>
    </uis-list>
</template>
```