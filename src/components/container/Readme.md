### Usage
Block element to give it a max-width and wrap main content of you website. The element will be
centered and have apdding on the sides, that adapts automatically for large screens.

**NOTE** The padding of nested containers will be removed to avoid unnecessary spacing.

&nbsp;
&nbsp;
&nbsp;

```vue
<template>
    <uis-container>
        The quick brown fox jumps over the lazy dog.
    </uis-container>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Size modifiers
Add ***:size*** prop and define the size to apply different max-width

```html
<uis-container
    :size="'xsmall'">
    The quick brown fox jumps over the lazy dog.
</uis-container>

<uis-container
    :size="'small'">
    The quick brown fox jumps over the lazy dog.
</uis-container>

<uis-container
    :size="'large'">
    The quick brown fox jumps over the lazy dog.
</uis-container>

<uis-container
    :size="'xlarge'">
    The quick brown fox jumps over the lazy dog.
</uis-container>

<uis-container
    :size="'expand'">
    The quick brown fox jumps over the lazy dog.
</uis-container>
```
