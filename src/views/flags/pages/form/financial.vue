<template>
    <uis-fieldset
        :legend="'Financial Information'">
        <uis-grid
            :gutter="'small'">
            <uis-width
                :xsmall="'1-1'"
                :small="'1-1'"
                :medium="'1-1'"
                :large="'1-1'"
                :xlarge="'1-1'">
                <uis-input
                    :label="'Function'"
                    :icon="'search'"
                    :width="'1-1'"
                    type="text"
                    placeholder="Search here..."
                    required="true"/>
            </uis-width>

            <uis-width
                :xsmall="'1-1'"
                :small="'1-1'"
                :medium="'1-1'"
                :large="'1-1'"
                :xlarge="'1-1'">
                <div class="uis-margin">
                    <label for="financial-description"
                        class="uis-form-label">
                        Description
                    </label>
                    <textarea class="uis-textarea"
                        id="financial-description"
                        rows="10"
                        placeholder="Describe the reason"></textarea>
                </div>
            </uis-width>

            <uis-width
                :xsmall="'1-1'"
                :small="'1-1'"
                :medium="'1-1'"
                :large="'1-1'"
                :xlarge="'1-1'">
                <uis-input
                    :label="'Financial Risk Category'"
                    :icon="'search'"
                    :width="'1-1'"
                    type="text"
                    placeholder="Search risk category..."
                    required="true"/>
            </uis-width>

            <uis-width
                :xsmall="'1-1'"
                :small="'1-1'"
                :medium="'1-1'"
                :large="'1-1'"
                :xlarge="'1-1'">
                <uis-input
                    :label="'Customer name'"
                    type="text"
                    placeholder="Search customer name..."/>
            </uis-width>

            <uis-width
                :xsmall="'1-1'"
                :small="'1-1'"
                :medium="'1-1'"
                :large="'1-1'"
                :xlarge="'1-1'">
                <uis-input
                    :label="'GTV Country'"
                    :icon="'search'"
                    :width="'1-1'"
                    type="text"
                    placeholder="Search country..."/>
            </uis-width>

            <uis-width
                :xsmall="'1-1'"
                :small="'1-1'"
                :medium="'1-1'"
                :large="'1-1'"
                :xlarge="'1-1'">
                <uis-input
                    :label="'Installation name'"
                    type="text"
                    placeholder="Ex: Product Downpayment"/>
            </uis-width>

            <uis-width
                :xsmall="'1-1'"
                :small="'1-1'"
                :medium="'1-1'"
                :large="'1-1'"
                :xlarge="'1-1'">
                <uis-input
                    :label="'Product Line'"
                    :icon="'search'"
                    :width="'1-1'"
                    type="text"
                    placeholder="Search a country..."/>
            </uis-width>

            <uis-width
                :xsmall="'1-1'"
                :small="'1-1'"
                :medium="'1-1'"
                :large="'1-1'"
                :xlarge="'1-1'">
                <uis-input
                    :label="'Actual External Legal Cost'"
                    type="text"
                    placeholder="Ex: Describe the cost of the flag"/>
            </uis-width>
        </uis-grid>
    </uis-fieldset>
</template>

<script>
export default {
    name: 'FinancialFieldset',
};
</script>
