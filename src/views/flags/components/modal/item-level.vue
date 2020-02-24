<template>
    <uis-modal
        class="uis-flag-item-level-modal"
        :isOpen.sync="$parent.$data.isViewItemLevelOpen">
        <uis-modal-header
            class="uis-background-default">

            <div class="uis-flag-item-level-modal-badge">
                #1 item
            </div>

            <uis-grid class="uis-flag-item-level-modal-header-content">
                <uis-width
                    :xsmall="'1-1'"
                    :medium="'1-2'">
                    <small class="uis-text-muted
                        uis-margin-remove">
                        Company
                    </small>
                    <p class="uis-margin-remove">
                        Energy Business
                    </p>
                    <p class="uis-margin-remove">
                        br10
                    </p>
                </uis-width>
                <uis-width
                    :xsmall="'1-1'"
                    :medium="'1-2'">
                    <small class="uis-text-muted
                        uis-margin-remove">
                        Estimated Settlement
                    </small>
                    <p class="uis-margin-remove">
                        Dec 2019
                    </p>
                </uis-width>

                <uis-width
                    class="uis-margin-top"
                    :xsmall="'1-1'">
                    <div>
                        <small class="uis-text-idle">
                            Created at 15 Jan 2020 at 13:45
                        </small>
                    </div>
                    <div>
                        <small class="uis-text-idle">
                            Created by Khurf Soupion
                        </small>
                    </div>
                </uis-width>
            </uis-grid>

        </uis-modal-header>
        <uis-modal-body>

            <uis-grid class="uis-margin-small">
                <uis-width
                    class="uis-visible@s"
                    :xsmall="'3-4'">
                    <p class="uis-margin-remove
                        uis-text-muted">
                        Description
                    </p>
                </uis-width>
                <uis-width
                    class="uis-visible@s"
                    :xsmall="'1-4'">
                    <p class="uis-margin-remove
                        uis-text-muted">
                        Amount
                    </p>
                </uis-width>
            </uis-grid>

            <uis-divider
                class="uis-visible@s"
                :dashed="true"/>

            <uis-grid class="uis-margin-small">
                <uis-width
                    :xsmall="'1-1'"
                    :medium="'3-4'">
                    <p class="uis-margin-remove">
                        Claim amount
                    </p>
                </uis-width>
                <uis-width
                    :xsmall="'1-1'"
                    :medium="'1-4'">
                    <p class="uis-margin-remove
                        uis-text-muted">
                        1,000,105.00
                    </p>
                </uis-width>
            </uis-grid>

            <uis-grid class="uis-margin-small">
                <uis-width
                    :xsmall="'1-1'"
                    :medium="'3-4'">
                    <p class="uis-margin-remove">
                        Total Estimation of Risk
                    </p>
                </uis-width>
                <uis-width
                    :xsmall="'1-1'"
                    :medium="'1-4'">
                    <p class="uis-margin-remove
                        uis-text-muted">
                        868,551.00
                    </p>
                </uis-width>
            </uis-grid>

            <uis-grid class="uis-margin-small">
                <uis-width
                    :xsmall="'1-1'"
                    :medium="'3-4'">
                    <p class="uis-margin-remove">
                        Actual costs booked YTD excl provisions
                    </p>
                </uis-width>
                <uis-width
                    :xsmall="'1-1'"
                    :medium="'1-4'">
                    <p class="uis-margin-remove
                        uis-text-muted">
                        0.00
                    </p>
                </uis-width>
            </uis-grid>

            <uis-grid class="uis-margin-small">
                <uis-width
                    :xsmall="'1-1'"
                    :medium="'3-4'">
                    <p class="uis-margin-remove">
                        Existing Provision
                    </p>
                </uis-width>
                <uis-width
                    :xsmall="'1-1'"
                    :medium="'1-4'">
                    <p class="uis-margin-remove">
                        868,551.00
                    </p>
                </uis-width>
            </uis-grid>

            <uis-grid class="uis-margin-small">
                <uis-width
                    :xsmall="'1-1'"
                    :medium="'3-4'">
                    <p class="uis-margin-remove">
                        Insurance Coverage
                    </p>
                </uis-width>
                <uis-width
                    :xsmall="'1-1'"
                    :medium="'1-4'">
                    <p class="uis-margin-remove">
                        0.00
                    </p>
                </uis-width>
            </uis-grid>

            <uis-divider
                class="uis-margin-top"
                :dashed="true"/>

            <uis-grid class="uis-margin-top">
                <uis-width
                    :xsmall="'1-1'"
                    :medium="'3-4'">
                    <p class="uis-margin-remove">
                        Currency
                    </p>
                </uis-width>
                <uis-width
                    :xsmall="'1-1'"
                    :medium="'1-4'">
                    <p class="uis-margin-remove">
                        EUR
                    </p>
                </uis-width>
            </uis-grid>
            <uis-grid class="uis-margin-small">
                <uis-width
                    :xsmall="'1-1'"
                    :medium="'3-4'">
                    <p class="uis-margin-remove">
                        Change Rate
                    </p>
                </uis-width>
                <uis-width
                    :xsmall="'1-1'"
                    :medium="'1-4'">
                    <p class="uis-margin-remove">
                        53.00
                    </p>
                </uis-width>
            </uis-grid>

            <uis-divider
                class="uis-margin-top"
                :dashed="true"/>

            <uis-grid class="uis-margin-top">
                <uis-width
                    :xsmall="'1-1'"
                    :medium="'3-4'">
                    <p class="uis-margin-remove">
                        Deviation
                    </p>
                </uis-width>
                <uis-width
                    :xsmall="'1-1'"
                    :medium="'1-4'">
                    <p class="uis-margin-remove">
                        625,232.00
                    </p>
                </uis-width>
            </uis-grid>
        </uis-modal-body>
    </uis-modal>
</template>

<script>
export default {
    name: 'ItemLevelModal',
};
</script>
