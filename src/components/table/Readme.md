### Usage
Use the ***uis-table*** component to enable the table component, the children
will be the same as plain HTML tags.

```vue
<template>
    <uis-table>
        <thead>
            <th>Table header</th>
            <th>Table header</th>
            <th>Table header</th>
        </thead>
        <tbody>
            <tr>
                <td>Table data 1</td>
                <td>Table data 1</td>
                <td>
                    <uis-button>
                        Button
                    </uis-button>
                </td>
            </tr>
            <tr>
                <td>Table data 2</td>
                <td>Table data 2</td>
                <td>
                    <uis-button>
                        Button
                    </uis-button>
                </td>
            </tr>
            <tr>
                <td>Table data 3</td>
                <td>Table data 3</td>
                <td>
                    <uis-button>
                        Button
                    </uis-button>
                </td>
            </tr>
        </tbody>
    </uis-table>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Divider modifier
The default configuration the ***:divider*** prop is already set to true,
you can remove it by passing false as boolean.

```vue
<template>
    <uis-table
        :divider="false">
        <thead>
            <th>Table header</th>
            <th>Table header</th>
            <th>Table header</th>
        </thead>
        <tbody>
            <tr>
                <td>Table data 1</td>
                <td>Table data 1</td>
                <td>
                    <uis-button>
                        Button
                    </uis-button>
                </td>
            </tr>
            <tr>
                <td>Table data 2</td>
                <td>Table data 2</td>
                <td>
                    <uis-button>
                        Button
                    </uis-button>
                </td>
            </tr>
            <tr>
                <td>Table data 3</td>
                <td>Table data 3</td>
                <td>
                    <uis-button>
                        Button
                    </uis-button>
                </td>
            </tr>
        </tbody>
    </uis-table>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Hover modifier
Set the ***:hover*** props as true, to enable the hoverable style on table row

```vue
<template>
    <uis-table
        :hover="true">
        <thead>
            <th>Table header</th>
            <th>Table header</th>
            <th>Table header</th>
        </thead>
        <tbody>
            <tr>
                <td>Table data 1</td>
                <td>Table data 1</td>
                <td>
                    <uis-button>
                        Button
                    </uis-button>
                </td>
            </tr>
            <tr>
                <td>Table data 2</td>
                <td>Table data 2</td>
                <td>
                    <uis-button>
                        Button
                    </uis-button>
                </td>
            </tr>
            <tr>
                <td>Table data 3</td>
                <td>Table data 3</td>
                <td>
                    <uis-button>
                        Button
                    </uis-button>
                </td>
            </tr>
        </tbody>
    </uis-table>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Justify modifier
Set the ***:justify*** props as true, to align the text in justify

```vue
<template>
    <uis-table
        :justify="true">
        <thead>
            <th class="uis-width-small">Table header</th>
            <th>Table header</th>
            <th>Table header</th>
        </thead>
        <tbody>
            <tr>
                <td>Table data</td>
                <td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </td>
                <td>
                    <uis-button>
                        Button
                    </uis-button>
                </td>
            </tr>
            <tr>
                <td>Table data</td>
                <td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </td>
                <td>
                    <uis-button>
                        Button
                    </uis-button>
                </td>
            </tr>
            <tr>
                <td>Table data</td>
                <td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </td>
                <td>
                    <uis-button>
                        Button
                    </uis-button>
                </td>
            </tr>
        </tbody>
    </uis-table>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Middle modifier
The default configuration the ***:middle*** prop is already set to true,
you can remove it by passing false as boolean.

```vue
<template>
    <uis-table
        :middle="false">
        <thead>
            <th>Table header</th>
            <th>Table header</th>
            <th>Table header</th>
        </thead>
        <tbody>
            <tr>
                <td>Table data 1</td>
                <td>Table data 1</td>
                <td>
                    <uis-button>
                        Button
                    </uis-button>
                </td>
            </tr>
            <tr>
                <td>Table data 2</td>
                <td>Table data 2</td>
                <td>
                    <uis-button>
                        Button
                    </uis-button>
                </td>
            </tr>
            <tr>
                <td>Table data 3</td>
                <td>Table data 3</td>
                <td>
                    <uis-button>
                        Button
                    </uis-button>
                </td>
            </tr>
        </tbody>
    </uis-table>
</template>
```


&nbsp;
&nbsp;
&nbsp;

### Responsive modifier
Set the ***:responsive*** props as true, When smaller devices it will remove
the table head and make the table data as stack layout.

```vue
<template>
    <uis-table
        :responsive="true">
        <thead>
            <th class="uis-width-small">Table header</th>
            <th>Table header</th>
            <th>Table header</th>
        </thead>
        <tbody>
            <tr>
                <td>Table data</td>
                <td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </td>
                <td>
                    <uis-button>
                        Button
                    </uis-button>
                </td>
            </tr>
            <tr>
                <td>Table data</td>
                <td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </td>
                <td>
                    <uis-button>
                        Button
                    </uis-button>
                </td>
            </tr>
            <tr>
                <td>Table data</td>
                <td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </td>
                <td>
                    <uis-button>
                        Button
                    </uis-button>
                </td>
            </tr>
        </tbody>
    </uis-table>
</template>
```

### Small modifier
Set the ***:small*** props as true, this will make the table into compact

```vue
<template>
    <uis-table
        :small="true">
        <thead>
            <thTable header</th>
            <th>Table header</th>
            <th>Table header</th>
        </thead>
        <tbody>
            <tr>
                <td>Table data</td>
                <td>Table data</td>
                <td>Table data</td>
            </tr>
            <tr>
                <td>Table data</td>
                <td>Table data</td>
                <td>Table data</td>
            </tr>
            <tr>
                <td>Table data</td>
                <td>Table data</td>
                <td>Table data</td>
            </tr>
        </tbody>
    </uis-table>
</template>
```

### Striped modifier
Set the ***:striped*** props as true, this will make every odd items has light
gray background.

```vue
<template>
    <uis-table
        :striped="true">
        <thead>
            <thTable header</th>
            <th>Table header</th>
            <th>Table header</th>
        </thead>
        <tbody>
            <tr>
                <td>Table data</td>
                <td>Table data</td>
                <td>Table data</td>
            </tr>
            <tr>
                <td>Table data</td>
                <td>Table data</td>
                <td>Table data</td>
            </tr>
            <tr>
                <td>Table data</td>
                <td>Table data</td>
                <td>Table data</td>
            </tr>
        </tbody>
    </uis-table>
</template>
```