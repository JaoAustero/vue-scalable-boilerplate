<template>
    <uis-fieldset
        :legend="'Item Level Information'">
            <uis-list
                :divider="true"
                :size="'medium'">
                <li>
                    <uis-grid>
                        <uis-width
                            :xsmall="'1-2'">
                            Company
                        </uis-width>

                        <uis-width
                            :xsmall="'1-4'">
                            Controller
                        </uis-width>

                        <uis-width
                            :xsmall="'1-4'">
                            Estimated Settlement
                        </uis-width>
                    </uis-grid>
                </li>
                <li>
                    <uis-grid>
                        <uis-width
                            :xsmall="'1-2'">
                            Energy Business <br>
                            <span class="uis-text-meta">br10</span>
                        </uis-width>

                        <uis-width
                            :xsmall="'1-4'">
                            Khurf Soupion
                        </uis-width>

                        <uis-width
                            :xsmall="'1-4'">
                            Dec 2020
                        </uis-width>
                    </uis-grid>
                </li>

                <li>
                    <uis-grid>
                        <uis-width
                            :xsmall="'1-2'">
                            Energy Business <br>
                            <span class="uis-text-meta">br10</span>
                        </uis-width>

                        <uis-width
                            :xsmall="'1-4'">
                            Khurf Soupion
                        </uis-width>

                        <uis-width
                            :xsmall="'1-4'">
                            Dec 2020
                        </uis-width>
                    </uis-grid>
                </li>
            </uis-list>
            <uis-button
                :fullWidth="true"
                :ghost="true"
                :size="'large'"
                type="button"
                @click="isViewItemLevelOpen = true">
                +  New Item Level information
            </uis-button>
        <item-level-modal />
    </uis-fieldset>
</template>

<script>
// Components
import ItemLevelModal from '../../components/modal/item-level';

export default {
    name: 'ItemsLevelFieldset',

    data()
    {
        return {
            isViewItemLevelOpen: false,
        };
    },

    components:
    {
        ItemLevelModal,
    },
};
</script>
