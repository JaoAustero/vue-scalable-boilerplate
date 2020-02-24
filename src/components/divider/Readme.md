### Usage
Use the ***uis-divider*** component to add horizontal line for dividing a
section.

```vue
<template>
    <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <uis-divider />

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Title modifier
Turn horizontal line to block element with light gray background with title,
use the ***:title*** and pass a string for label.

```vue
<template>
    <div>
        <h3 class="uis-text-headline
                uis-margin-remove">
            Headline
        </h3>

        <uis-divider
            :title="'Title modifier'"/>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
</template>
```
