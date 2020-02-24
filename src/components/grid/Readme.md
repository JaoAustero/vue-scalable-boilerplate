### Usage
To init the grid container, use the ***uis-grid*** component. Add child ***div***
elements to create the cells. By default, all grid are stacked. To place them
side by side, add one of the classes from the **Width component**. 

```vue
<template>
    <uis-grid>
        <div>
            <uis-button>
                Item
            </uis-button>
        </div>

        <div>
            <uis-button>
                Item
            </uis-button>
        </div>

        <div>
            <uis-button>
                Item
            </uis-button>
        </div>
    </uis-grid>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Gutter modifiers
The grid component comes with a default gutter, that is decreased automatically
from a certain breakpoint, usually on a small dekstop viewport width. To apply a
different gutter, use the ***:gutter*** prop.

```vue
<template>
    <div>
        <div class="uis-margin">
            <p>Small Gutter</p>
            <uis-grid
                class="uis-child-width-expand
                    uis-text-center"
                :gutter="'small'">
                <div>
                    <div
                        class="uis-card
                            uis-card-body
                            uis-card-default">
                        Item
                    </div>
                </div>

                <div>
                    <div
                        class="uis-card
                            uis-card-body
                            uis-card-default">
                        Item
                    </div>
                </div>

                <div>
                    <div
                        class="uis-card
                            uis-card-body
                            uis-card-default">
                        Item
                    </div>
                </div>
            </uis-grid>
        </div>

        <div class="uis-margin">
            <p>Medium Gutter</p>
            <uis-grid
                class="uis-child-width-expand
                    uis-text-center"
                :gutter="'medium'">
                <div>
                    <div
                        class="uis-card
                            uis-card-body
                            uis-card-default">
                        Item
                    </div>
                </div>

                <div>
                    <div
                        class="uis-card
                            uis-card-body
                            uis-card-default">
                        Item
                    </div>
                </div>

                <div>
                    <div
                        class="uis-card
                            uis-card-body
                            uis-card-default">
                        Item
                    </div>
                </div>
            </uis-grid>
        </div>

        <div class="uis-margin">
            <p>Large Gutter</p>
            <uis-grid
                class="uis-child-width-expand
                    uis-text-center"
                :gutter="'large'">
                <div>
                    <div
                        class="uis-card
                            uis-card-body
                            uis-card-default">
                        Item
                    </div>
                </div>

                <div>
                    <div
                        class="uis-card
                            uis-card-body
                            uis-card-default">
                        Item
                    </div>
                </div>

                <div>
                    <div
                        class="uis-card
                            uis-card-body
                            uis-card-default">
                        Item
                    </div>
                </div>
            </uis-grid>
        </div>

        <div class="uis-margin">
            <p>Collapse Gutter</p>
            <uis-grid
                class="uis-child-width-expand
                    uis-text-center"
                :gutter="'collapse'">
                <div>
                    <div
                        class="uis-card
                            uis-card-body
                            uis-card-default">
                        Item
                    </div>
                </div>

                <div>
                    <div
                        class="uis-card
                            uis-card-body
                            uis-card-default">
                        Item
                    </div>
                </div>

                <div>
                    <div
                        class="uis-card
                            uis-card-body
                            uis-card-default">
                        Item
                    </div>
                </div>
            </uis-grid>
        </div>
    </div>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Divider modifier
Set the ***:divider*** prop to true to seperate the grid cells with lines. This
option can combined with the ***:gutter*** prop. As soon as the grid stackes,
the divider lines will become horizontal.

```vue
<template>
    <uis-grid
        :divider="true"
        class="uis-child-width-expand">
        <div class="uis-first-column">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>

        <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>

        <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
    </uis-grid>
</template>
```