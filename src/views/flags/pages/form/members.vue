<template>
    <uis-fieldset
        :legend="'Members'">
        <uis-grid
            :gutter="'small'">
            <uis-width
                :xsmall="'1-1'"
                :small="'1-1'"
                :medium="'1-1'"
                :large="'1-1'"
                :xlarge="'1-1'">
                <p class="uis-text-meta
                    uis-margin-xsmall-bottom">
                    Accountable
                </p>

                <div class="uis-flex uis-flex-middle">
                    <uis-button
                        :icon="true"
                        :ghost="true"
                        :size="'large'"
                        type="button"
                        @click="isAccountableModalOpen = true">
                        +
                    </uis-button>

                    <p class="uis-text-meta
                        uis-margin-remove-vertical
                        uis-margin-xsmall-left">
                        Click to choose
                    </p>
                </div>

                <search-accountable-modal />
            </uis-width>

            <uis-width
                :margin="'medium'"
                :xsmall="'1-1'"
                :small="'1-1'"
                :medium="'1-1'"
                :large="'1-2'"
                :xlarge="'1-2'">
                <p class="uis-text-meta
                    uis-margin-xsmall-bottom">
                    Responsibles
                </p>

                <div class="uis-flex uis-flex-middle">
                    <uis-button
                        :icon="true"
                        :ghost="true"
                        :size="'large'"
                        type="button"
                        @click="isResponsibleModalOpen = true">
                        +
                    </uis-button>

                    <p class="uis-text-meta
                        uis-margin-remove-vertical
                        uis-margin-xsmall-left">
                        Click to choose
                    </p>
                </div>

                <search-responsible-modal />
            </uis-width>

            <uis-width
                :margin="'medium'"
                :xsmall="'1-1'"
                :small="'1-1'"
                :medium="'1-1'"
                :large="'1-2'"
                :xlarge="'1-2'">
                <p class="uis-text-meta
                    uis-margin-xsmall-bottom">
                    Informed
                </p>

                <div class="uis-flex uis-flex-middle">
                    <uis-button
                        :icon="true"
                        :ghost="true"
                        :size="'large'"
                        type="button"
                        @click="isInformedModalOpen = true">
                        +
                    </uis-button>

                    <p class="uis-text-meta
                        uis-margin-remove-vertical
                        uis-margin-xsmall-left">
                        Click to choose
                    </p>
                </div>

                <search-informed-modal />
            </uis-width>
        </uis-grid>
    </uis-fieldset>
</template>

<script>
// Components
import SearchAccountableModal from '../../components/modal/search-accountable';
import SearchResponsibleModal from '../../components/modal/search-responsible';
import SearchInformedModal from '../../components/modal/search-informed';

export default {
    name: 'MembersFieldset',

    components:
    {
        SearchAccountableModal,
        SearchResponsibleModal,
        SearchInformedModal,
    },

    data()
    {
        return {
            isAccountableModalOpen: false,
            isResponsibleModalOpen: false,
            isInformedModalOpen: false,
        };
    },
};
</script>
