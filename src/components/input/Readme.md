### Usage
Use ***uis-input*** component like ordinary ***input*** HTML tag, the attributes
are still the same.

&nbsp;
&nbsp;
&nbsp;

```vue
<template>
    <div>
        <uis-input
            type="text"
            placeholder="Default input"
            v-model="message"/>

        <p>Message is: {{message}}</p>
    </div>
</template>

<script>
    export default {
        data()
        {
            return{
                message: '',
            };
        }
    }
</script>
```

&nbsp;
&nbsp;
&nbsp;

### Blank modifiers
Set ***:blank*** prop to **true** to enable the blank modifier.

```vue
<template>
    <uis-input
        :blank="true"
        type="text"
        placeholder="Blank modifier"/>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Error modifiers
Set a error message in ***:error*** prop, and it will modify the border color
of the input into danger color. 

```vue
<template>
    <uis-input
        :error="'This is not a valid email'"
        type="email"
        placeholder="ex: Placeholder text"/>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Icon modifiers
If you want to add icon on the input, use the ***:icon*** prop.

```vue
<template>
    <uis-input
        :icon="'search'"
        type="text"
        placeholder="Search here..."/>
</template>
```

### Label modifiers
Define labels controls and apply a stacked or horizontal layout to form elements. Layout modifiers
can be added to any parent like the ***uis-fieldset*** component as static class. This makes to have
different form layouts for each fieldset.

```vue
<template>
    <form class="uis-form-stacked">
        <uis-input
            :label="'Label modifier'"
            type="text"
            placeholder="ex: Placeholder"/>
    </form>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Margin modifiers
Set ***:margin*** to true, this will apply vertical margin

```vue
<template>
    <form class="uis-form-stacked">
        <uis-input
            :label="'With margin'"
            type="text"
            placeholder="ex: Placeholder"/>
            
        <uis-input
            :label="'With Margin'"
            type="text"
            placeholder="ex: Placeholder"/>

        <uis-input
            :label="'Without Margin'"
            :margin="false"
            type="text"
            placeholder="ex: Placeholder"/>

        <uis-input
            :label="'Without Margin'"
            :margin="false"
            type="text"
            placeholder="ex: Placeholder"/>
    </form>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Size modifiers
Dimension of the input

```vue
<template>
    <form class="uis-form-stacked">
        <uis-input
            :size="'small'"
            type="text"
            placeholder="ex: Small size"/>

        <uis-input
            type="text"
            placeholder="ex: Default size"/>

        <uis-input
            :size="'large'"
            type="text"
            placeholder="ex: Large size"/>
    </form>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Success modifiers
Enable the success color

```vue
<template>
    <uis-input
        :success="true"
        type="text"
        placeholder="ex: Success modifier"/>
</template>
```