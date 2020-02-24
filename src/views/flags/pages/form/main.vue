<template>
    <uis-fieldset
        :legend="'Main Details'">
        <uis-grid>
            <uis-width
                :xsmall="'1-1'"
                :small="'1-1'"
                :medium="'1-1'"
                :large="'1-1'"
                :xlarge="'1-1'">
                <uis-input
                    :label="'Title'"
                    type="text"
                    placeholder="Ex: Tarbit Shipping warranty budget"
                    required="true"/>
            </uis-width>

            <uis-width
                :xsmall="'1-1'"
                :small="'1-1'"
                :medium="'1-1'"
                :large="'1-1'"
                :xlarge="'1-1'">
                <uis-autocomplete
                    :label="'Initiating Organization'"
                    :isOpen.sync="organizationAutocompleteOpen"
                    :items="items"
                    :doneTyping="requestOrganization"
                    :onSelect="selectOrganization"
                    v-model="initiatingOrganization"
                    type="text"
                    placeholder="Search organization..."/>
            </uis-width>


            <uis-width
                :xsmall="'1-1'"
                :small="'1-1'"
                :medium="'1-1'"
                :large="'1-3'"
                :xlarge="'1-3'">
                <uis-input
                    :label="'Planned Solving Date'"
                    type="text"
                    placeholder="-- Select a date --"
                    required="true"/>
            </uis-width>

            <uis-width
                :xsmall="'1-1'"
                :small="'1-1'"
                :medium="'1-1'"
                :large="'1-3'"
                :xlarge="'1-3'">
                <uis-input
                    :label="'Flag type'"
                    :icon="'search'"
                    :width="'1-1'"
                    type="text"
                    placeholder="Search type..."
                    required="true"/>
            </uis-width>

            <uis-width
                :xsmall="'1-1'"
                :small="'1-1'"
                :medium="'1-1'"
                :large="'1-3'"
                :xlarge="'1-3'">
                <uis-input
                    :label="'Reason for flag'"
                    :icon="'search'"
                    :width="'1-1'"
                    type="text"
                    placeholder="Search reason..."/>
            </uis-width>

            <uis-width
                :xsmall="'1-1'"
                :small="'1-1'"
                :medium="'1-1'"
                :large="'1-1'"
                :xlarge="'1-1'">
                <div class="uis-margin">
                    <label class="uis-form-label"
                        for="flag-description">
                        Describe the flag here
                    </label>
                    <textarea class="uis-textarea"
                        id="flag-description"
                        rows="10"
                        placeholder="Describe the flag here..."></textarea>
                </div>
            </uis-width>

            <uis-width
                :xsmall="'1-1'"
                :small="'1-1'"
                :medium="'1-1'"
                :large="'1-2'"
                :xlarge="'1-2'">
                <div class="uis-margin">
                    <label class="uis-form-label"
                        for="flag-status">
                        Status
                    </label>
                    <select class="uis-select"
                        id="flag-status">
                        <option value="1">Pending</option>
                        <option value="2">In progress</option>
                        <option value="3">Done</option>
                        <option value="4">Closed</option>
                    </select>
                </div>
            </uis-width>

            <uis-width
                :xsmall="'1-1'"
                :small="'1-1'"
                :medium="'1-1'"
                :large="'1-2'"
                :xlarge="'1-2'">
                <uis-input
                    :label="'SAP Order / Project ref'"
                    type="text"
                    placeholder="Ex: URL of websites"/>
            </uis-width>

            <uis-width
                :xsmall="'1-1'"
                :small="'1-1'"
                :medium="'1-1'"
                :large="'1-3'"
                :xlarge="'1-3'">
                <uis-input
                    :label="'Insurance Liability Type'"
                    :icon="'search'"
                    :width="'1-1'"
                    type="text"
                    placeholder="Search type..."
                    required="true"/>
            </uis-width>

            <uis-width
                :xsmall="'1-1'"
                :small="'1-1'"
                :medium="'1-1'"
                :large="'1-3'"
                :xlarge="'1-3'">
                <uis-input
                    :label="'Insurance Type'"
                    :icon="'search'"
                    :width="'1-1'"
                    type="text"
                    placeholder="Search type"
                    required="true"/>
            </uis-width>

            <uis-width
                :xsmall="'1-1'"
                :small="'1-1'"
                :medium="'1-1'"
                :large="'1-3'"
                :xlarge="'1-3'">
                <div class="uis-margin">
                    <label class="uis-form-label"
                        for="flag-insurance-status">
                        Insurance Status
                    </label>
                    <select class="uis-select"
                        id="flag-insurance-status">
                        <option value="1">Pending</option>
                        <option value="2">In progress</option>
                        <option value="3">Done</option>
                        <option value="4">Closed</option>
                    </select>
                </div>
            </uis-width>


            <uis-width
                :xlarge="'1-1'">
                <div class="uis-flex uis-flex-middle">
                    <div class="uis-flex-1">
                        <p class="uis-text-emphasis
                            uis-margin-xsmall-bottom">
                            Mark as red flag
                        </p>
                        <p class="uis-text-meta
                            uis-margin-remove">
                            Giving this makes the flag urgent or important
                            due to late actions.
                        </p>
                    </div>
                    <div class="uis-margin-left">
                        <label class="uis-toggle">
                            <input type="checkbox">
                            <span class="uis-toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </uis-width>
        </uis-grid>
    </uis-fieldset>
</template>

<script>
export default {
    name: 'MainDetails',

    data()
    {
        return {
            organizationAutocompleteOpen: false,
            items: [],
            initiatingOrganizationId: null,
            initiatingOrganization: null,
        };
    },

    methods:
    {
        requestOrganization()
        {
            console.log('requesting....');

            setTimeout(() =>
            {
                this.organizationAutocompleteOpen = true;

                this.items = [
                    {
                        id: 1,
                        title: 'SULAS',
                        label: 'Accountable by: William Krushitoma',
                    },
                    {
                        id: 2,
                        title: 'Finland project centre',
                        label: 'Accountable by: Azumiout Karlowst',
                    },
                    {
                        id: 3,
                        title: 'SUNAM',
                        label: 'Accountable by: Sean Carey',
                    },
                    {
                        id: 4,
                        title: 'EB Europe',
                        label: '',
                    },
                ];
            }, 1000);
        },

        selectOrganization(item)
        {
            console.log(`User selected ${item.id}`);
            this.initiatingOrganizationId = item.id;
            this.initiatingOrganization = item.title;
            this.organizationAutocompleteOpen = false;
        },
    },
};
</script>
