### Usage
Use the ***uis-offcanvas*** component to render an offcanvas sidebar and an
optionally overlay that blanks out the page. The offcanvas display is controlled
with the ***:isOpen.sync*** prop.

```vue
<template>
    <div>
        <uis-button
            @click="offcanvasOpen = true">
            Open Offcanvas
        </uis-button>

        <uis-offcanvas
            :isOpen.sync="offcanvasOpen">
            <uis-offcanvas-title>
                Title
            </uis-offcanvas-title>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.</p>
        </uis-offcanvas>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                offcanvasOpen: false,
            };
        },
    };
</script>
```

&nbsp;
&nbsp;
&nbsp;

### Overlay modifier
To remove overlay, blanking out the page, set ***:isOverlay*** prop to false.
It also disabled the ***backDropClose*** event.

```vue
<template>
    <div>
        <uis-button
            @click="offcanvasOpen = true">
            Open Offcanvas
        </uis-button>

        <uis-offcanvas
            :isOpen.sync="offcanvasOpen"
            :isOverlay="false">
            <uis-offcanvas-title>
                Without Overlay
            </uis-offcanvas-title>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.</p>
        </uis-offcanvas>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                offcanvasOpen: false,
            };
        },
    };
</script>
```

&nbsp;
&nbsp;
&nbsp;

### Flip modifier
To show on the right side, set ***:isFlip*** to true.

```vue
<template>
    <div>
        <uis-button
            @click="offcanvasOpen = true">
            Open Offcanvas
        </uis-button>

        <uis-offcanvas
            :isOpen.sync="offcanvasOpen"
            :isFlip="true">
            <uis-offcanvas-title>
                Flip modifier
            </uis-offcanvas-title>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.</p>
        </uis-offcanvas>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                offcanvasOpen: false,
            };
        },
    };
</script>
```

&nbsp;
&nbsp;
&nbsp;

### Transition modifier
By default, the offcanvas slides in. But you can actually choose between
different animation modes for the offcanvas entrance. Just set the prop
***:transition*** with one of the following options.

```vue
<template>
    <div>
        <uis-button
            @click="noTransition = true">
            None
        </uis-button>

        <uis-offcanvas
            :isOpen.sync="noTransition"
            :transition="'none'">
            <uis-offcanvas-title>
                No transition
            </uis-offcanvas-title>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.</p>
        </uis-offcanvas>

        <uis-button
            @click="slideTransition = true">
            Slide
        </uis-button>

        <uis-offcanvas
            :isOpen.sync="slideTransition">
            <uis-offcanvas-title>
                Slide Transition
            </uis-offcanvas-title>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.</p>
        </uis-offcanvas>

        <uis-button
            @click="pushTransition = true">
            Push
        </uis-button>

        <uis-offcanvas
            :isOpen.sync="pushTransition"
            :transition="'push'">
            <uis-offcanvas-title>
                Push Transition
            </uis-offcanvas-title>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.</p>
        </uis-offcanvas>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                noTransition: false,
                slideTransition: false,
                pushTransition: false,
            };
        },
    };
</script>
```

