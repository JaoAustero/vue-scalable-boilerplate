### Usage
Wrap your ***uis-input***, ***uis-select***, ***uis-textarea*** components
into ***uis-form***.

```vue
<template>
    <div>
        <uis-form>
            <uis-input
                :label="'First name'"
                type="text"
                placeholder="your first name"/>

            <uis-input
                :label="'Last name'"
                type="text"
                placeholder="your last name"/>
        </uis-form>
    </div>
</template>
```