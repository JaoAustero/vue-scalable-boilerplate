<template>
    <div>
        <div>
            <app-header>
                <h3 slot="left"
                    class="uis-text-title
                        uis-margin-remove">
                    Deleted Flags
                </h3>

                <div slot="right">
                    <uis-button
                        class="uis-margin-small-right"
                        :icon="true">
                        <uis-icon
                            :type="'filter_list'"/>
                    </uis-button>

                    <uis-button
                        class="uis-margin-small-right">
                        <div class="uis-flex uis-flex-middle">
                            <uis-icon
                                class="uis-margin-small-right"
                                :type="'cloud_download'"/>
                            <span>Export</span>
                        </div>
                    </uis-button>
                </div>
            </app-header>
        </div>
        <div>
            <div v-if="items.length > 0">
                <flag-table
                    :items="items"/>
            </div>

            <div v-else>
                <uis-state
                    :type="'empty'"
                    :title="'No results found'"
                    :description="'These page doesn\'t have any data.'"/>
            </div>
        </div>
    </div>
</template>

<script>
// Component
import AppHeader from '@/views/layouts/header';

// Items
import FlagTable from '../../components/table';

export default {
    name: 'FlagsDeleted',

    components:
    {
        AppHeader,
        FlagTable,
    },

    data()
    {
        return {
            items: [],
        };
    },
};
</script>
