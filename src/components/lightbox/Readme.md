### Usage
To create Lightbox, use the ***uis-lightbox*** component and mount the data from
***:items*** prop their is specific structure object provided on the preview
code below.

&nbsp;
&nbsp;
&nbsp;

```vue
<template>
    <div>
        <uis-button
            @click="lightboxOpen = true">
            Open Lightbox
        </uis-button>

        <uis-lightbox
            :items="images"
            :isOpen.sync="lightboxOpen"/>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                lightboxOpen: false,
                images:
                [
                    {
                        src: '/static/liza-soberano.jpg',
                    },

                    {
                        src: '/static/liza-soberano-2.jpg',
                    },
                ],
            };
        }
    }
</script>
```

&nbsp;
&nbsp;
&nbsp;

### Caption modifiers
To modify add caption on the photo and alt just add ***caption*** property
to the data object.

```vue
<template>
    <div>
        <uis-button
            @click="lightboxOpen = true">
            Open Lightbox
        </uis-button>

        <uis-lightbox
            :items="images"
            :isOpen.sync="lightboxOpen"/>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                lightboxOpen: false,
                images:
                [
                    {
                        src: '/static/liza-soberano.jpg',
                        caption: 'Liza Soberano'
                    },

                    {
                        src: '/static/liza-soberano-2.jpg',
                        caption: 'Liza Soberano 2'
                    },
                ],
            };
        }
    }
</script>
```