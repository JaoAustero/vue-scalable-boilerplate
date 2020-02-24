<template>
    <div>
        <uis-list
            :size="'medium'">
            <li>
                <div class="uis-card uis-card-body uis-card-default">
                    <uis-grid
                        :gutter="'small'">
                        <uis-width>
                            <uis-avatar
                                :label="'JT'"/>
                        </uis-width>

                        <uis-width
                            :expand="true">
                            <p class="uis-text-emphasis
                                uis-margin-remove">
                                Jonathan Thomas
                            </p>
                            <p class="uis-text-meta
                                uis-margin-remove">
                                01 Jan 2020 at 08:36
                            </p>

                            <p class="uis-margin-top">
                                Has marked this flag as closed.
                            </p>
                        </uis-width>
                    </uis-grid>
                </div>
            </li>

            <li>
                <div class="uis-card uis-card-body uis-card-default">
                    <uis-grid
                        :gutter="'small'">
                        <uis-width>
                            <uis-avatar
                                :label="'JT'"/>
                        </uis-width>

                        <uis-width
                            :expand="true">
                            <p class="uis-text-emphasis
                                uis-margin-remove">
                                Jonathan Thomas
                            </p>
                            <p class="uis-text-meta
                                uis-margin-remove">
                                28 Dec 2019 at 00:01
                            </p>

                            <p class="uis-margin-top">
                                Has been started this flag.
                            </p>
                        </uis-width>
                    </uis-grid>
                </div>
            </li>
        </uis-list>
    </div>
</template>

<script>
export default {
    name: 'FlagHistory',
};
</script>
