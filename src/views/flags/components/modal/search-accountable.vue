<template>
    <uis-modal
        :isOpen.sync="$parent.$data.isAccountableModalOpen">
        <uis-modal-body>
            <uis-modal-title>
                Select Accountable
            </uis-modal-title>
            <p class="uis-text-meta uis-margin-remove-top">A person who will be incharge of the flag, and directly reporting on the superior
            and lead the responsibles on the flags action.</p>

            <uis-input
                :width="'1-1'"
                :icon="'search'"
                type="text"
                placeholder="Search domain id, or name"/>

            <div class="uis-margin-top">
                <uis-divider
                    :title="'Initiating Organization'"/>
                
                <uis-list
                    class="uis-margin-top">
                    <li>
                        <uis-grid
                            :gutter="'small'">
                            <uis-width>
                                <uis-avatar
                                    :label="'JA'"/>
                            </uis-width>

                            <uis-width
                                :expand="true">
                                <p class="uis-text-emphasis
                                    uis-margin-remove">
                                    Jerald Austero
                                </p>
                                <p class="uis-text-meta
                                    uis-margin-remove">
                                    Software Solution and Simulation Department
                                </p>
                            </uis-width>
                        </uis-grid>
                    </li>
                </uis-list>
            </div>

            <div class="uis-margin-top">
                <uis-divider
                    :title="'Other Users'"/>
                
                <uis-list
                    class="uis-margin-top">
                    <li>
                        <uis-grid
                            :gutter="'small'">
                            <uis-width>
                                <uis-avatar
                                    :label="'JO'"/>
                            </uis-width>

                            <uis-width
                                :expand="true">
                                <p class="uis-text-emphasis
                                    uis-margin-remove">
                                    Jewel Oswondo
                                </p>
                                <p class="uis-text-meta
                                    uis-margin-remove">
                                    Social Security Department
                                </p>
                            </uis-width>
                        </uis-grid>
                    </li>

                    <li>
                        <uis-grid
                            :gutter="'small'">
                            <uis-width>
                                <uis-avatar
                                    :color="'primary'"
                                    :label="'✓'"/>
                            </uis-width>

                            <uis-width
                                :expand="true">
                                <p class="uis-text-emphasis
                                    uis-margin-remove">
                                    Marques Brownlee
                                </p>
                                <p class="uis-text-meta
                                    uis-margin-remove">
                                    Learning Development Department
                                </p>
                            </uis-width>
                        </uis-grid>
                    </li>

                    <li>
                        <uis-grid
                            :gutter="'small'">
                            <uis-width>
                                <uis-avatar
                                    :label="'LV'"/>
                            </uis-width>

                            <uis-width
                                :expand="true">
                                <p class="uis-text-emphasis
                                    uis-margin-remove">
                                    Larry Voltopous
                                </p>
                                <p class="uis-text-meta
                                    uis-margin-remove">
                                    Learning Development Department
                                </p>
                            </uis-width>
                        </uis-grid>
                    </li>
                </uis-list>
            </div>
        </uis-modal-body>

        <uis-modal-footer
            class="uis-text-right">
            <uis-button
                class="uis-margin-small-right"
                :text="true"
                type="button"
                @click="$parent.$data.isAccountableModalOpen = false">
                Cancel
            </uis-button>
            <uis-button
                :disabled="true"
                :color="'primary'">
                Save
            </uis-button>
        </uis-modal-footer>
    </uis-modal>
</template>

<script>
export default {
    name: 'SearchAccountableModal',
};
</script>
