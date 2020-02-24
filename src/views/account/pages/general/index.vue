<template>
    <div>
        <h2 class="uis-text-header
            uis-margin-remove">
            General
        </h2>

        <section class="uis-margin-medium">
            <uis-divider
                :title="'Basic Information'"/>

            <uis-list
                class="uis-margin-medium-top"
                :divider="true"
                :size="'large'">
                <li>
                    <uis-grid>
                        <uis-width
                            :xsmall="'1-1'"
                            :small="'1-1'"
                            :medium="'1-2'"
                            :large="'1-2'"
                            :xlarge="'1-2'">
                            <div>
                                <p class="uis-margin-remove">
                                    Photo
                                </p>
                                <div>
                                    <uis-button
                                        class="uis-margin-small-right"
                                        :color="'primary'"
                                        :text="true">
                                        Upload
                                    </uis-button>
                                    <uis-button
                                        :disabled="true"
                                        :text="true">
                                        Remove
                                    </uis-button>
                                </div>
                            </div>
                        </uis-width>

                        <uis-width
                            class="uis-text-right@m"
                            :xsmall="'1-1'"
                            :small="'1-1'"
                            :medium="'1-2'"
                            :large="'1-2'"
                            :xlarge="'1-2'">
                            <uis-avatar
                                :label="'JD'"
                                :color="'secondary'"/>
                        </uis-width>
                    </uis-grid>
                </li>

                <li>
                    <uis-grid>
                        <uis-width
                            :xsmall="'1-1'"
                            :small="'1-1'"
                            :medium="'1-2'"
                            :large="'1-2'"
                            :xlarge="'1-2'">
                            <p class="uis-margin-remove">
                                Full name
                            </p>
                        </uis-width>

                        <uis-width
                            class="uis-text-right@m"
                            :xsmall="'1-1'"
                            :small="'1-1'"
                            :medium="'1-2'"
                            :large="'1-2'"
                            :xlarge="'1-2'">
                            <p class="uis-margin-remove
                                uis-text-muted">
                                John Doe
                            </p>
                        </uis-width>
                    </uis-grid>
                </li>
                <li>
                    <uis-grid>
                        <uis-width
                            :xsmall="'1-1'"
                            :small="'1-1'"
                            :medium="'1-2'"
                            :large="'1-2'"
                            :xlarge="'1-2'">
                            <p class="uis-margin-remove">
                                Email address
                            </p>
                        </uis-width>

                        <uis-width
                            class="uis-text-right@m"
                            :xsmall="'1-1'"
                            :small="'1-1'"
                            :medium="'1-2'"
                            :large="'1-2'"
                            :xlarge="'1-2'">
                            <p class="uis-margin-remove
                                uis-text-muted">
                                john.doe@gigamare.com
                            </p>
                        </uis-width>
                    </uis-grid>
                </li>
            </uis-list>
        </section>

        <section class="uis-margin-large">
            <uis-divider
                :title="'Company Information'"/>

            <uis-list
                class="uis-margin-medium-top"
                :divider="true"
                :size="'large'">
                <li>
                    <uis-grid>
                        <uis-width
                            :xsmall="'1-1'"
                            :small="'1-1'"
                            :medium="'1-2'"
                            :large="'1-2'"
                            :xlarge="'1-2'">
                            <p class="uis-margin-remove">
                                Company
                            </p>
                        </uis-width>

                        <uis-width
                            class="uis-text-right@m"
                            :xsmall="'1-1'"
                            :small="'1-1'"
                            :medium="'1-2'"
                            :large="'1-2'"
                            :xlarge="'1-2'">
                            <p class="uis-margin-remove
                                uis-text-muted">
                                Wartsila Brasil Ltda
                            </p>
                        </uis-width>
                    </uis-grid>
                </li>

                <li>
                    <uis-grid>
                        <uis-width
                            :xsmall="'1-1'"
                            :small="'1-1'"
                            :medium="'1-2'"
                            :large="'1-2'"
                            :xlarge="'1-2'">
                            <p class="uis-margin-remove">
                                Office Location
                            </p>
                        </uis-width>

                        <uis-width
                            class="uis-text-right@m"
                            :xsmall="'1-1'"
                            :small="'1-1'"
                            :medium="'1-2'"
                            :large="'1-2'"
                            :xlarge="'1-2'">
                            <p class="uis-margin-remove
                                uis-text-muted">
                                Barreto
                            </p>
                        </uis-width>
                    </uis-grid>
                </li>
                <li>
                    <uis-grid>
                        <uis-width
                            :xsmall="'1-1'"
                            :small="'1-1'"
                            :medium="'1-2'"
                            :large="'1-2'"
                            :xlarge="'1-2'">
                            <p class="uis-margin-remove">
                                Position
                            </p>
                        </uis-width>

                        <uis-width
                            class="uis-text-right@m"
                            :xsmall="'1-1'"
                            :small="'1-1'"
                            :medium="'1-2'"
                            :large="'1-2'"
                            :xlarge="'1-2'">
                            <p class="uis-margin-remove
                                uis-text-muted">
                                Operations GM, SULAS
                            </p>
                        </uis-width>
                    </uis-grid>
                </li>
            </uis-list>
        </section>

        <section class="uis-margin-large">
            <uis-divider
                :title="'Account Information'"/>

            <uis-list
                class="uis-margin-medium-top"
                :divider="true"
                :size="'large'">
                <li>
                    <uis-grid>
                        <uis-width
                            :xsmall="'1-1'"
                            :small="'1-1'"
                            :medium="'1-2'"
                            :large="'1-2'"
                            :xlarge="'1-2'">
                            <p class="uis-margin-remove">
                                Account Domain
                            </p>
                        </uis-width>

                        <uis-width
                            class="uis-text-right@m"
                            :xsmall="'1-1'"
                            :small="'1-1'"
                            :medium="'1-2'"
                            :large="'1-2'"
                            :xlarge="'1-2'">
                            <p class="uis-margin-remove
                                uis-text-muted">
                                JDOE001
                            </p>
                        </uis-width>
                    </uis-grid>
                </li>

                <li>
                    <uis-grid>
                        <uis-width
                            :xsmall="'1-1'"
                            :small="'1-1'"
                            :medium="'1-2'"
                            :large="'1-2'"
                            :xlarge="'1-2'">
                            <p class="uis-margin-remove">
                                Password
                            </p>
                        </uis-width>

                        <uis-width
                            class="uis-text-right@m"
                            :xsmall="'1-1'"
                            :small="'1-1'"
                            :medium="'1-2'"
                            :large="'1-2'"
                            :xlarge="'1-2'">
                            <p class="uis-margin-remove
                                uis-text-muted">
                                Last modifier Jan 08, 2020
                            </p>
                        </uis-width>
                    </uis-grid>
                </li>
                <li>
                    <uis-grid>
                        <uis-width
                            :xsmall="'1-1'"
                            :small="'1-1'"
                            :medium="'1-2'"
                            :large="'1-2'"
                            :xlarge="'1-2'">
                            <p class="uis-margin-remove">
                                Organization
                            </p>
                        </uis-width>

                        <uis-width
                            class="uis-text-right@m"
                            :xsmall="'1-1'"
                            :small="'1-1'"
                            :medium="'1-2'"
                            :large="'1-2'"
                            :xlarge="'1-2'">
                            <p class="uis-margin-remove
                                uis-text-muted">
                                SULAS
                            </p>
                        </uis-width>
                    </uis-grid>
                </li>
                <li>
                    <uis-grid>
                        <uis-width
                            :xsmall="'1-1'"
                            :small="'1-1'"
                            :medium="'1-2'"
                            :large="'1-2'"
                            :xlarge="'1-2'">
                            <p class="uis-margin-remove">
                                Access Level
                            </p>
                        </uis-width>

                        <uis-width
                            class="uis-text-right@m"
                            :xsmall="'1-1'"
                            :small="'1-1'"
                            :medium="'1-2'"
                            :large="'1-2'"
                            :xlarge="'1-2'">
                            <p class="uis-margin-remove
                                uis-text-muted">
                                EB Americas
                            </p>
                        </uis-width>
                    </uis-grid>
                </li>
                <li>
                    <uis-grid>
                        <uis-width
                            :xsmall="'1-1'"
                            :small="'1-1'"
                            :medium="'1-2'"
                            :large="'1-2'"
                            :xlarge="'1-2'">
                            <p class="uis-margin-remove">
                                User type
                            </p>
                        </uis-width>

                        <uis-width
                            class="uis-text-right@m"
                            :xsmall="'1-1'"
                            :small="'1-1'"
                            :medium="'1-2'"
                            :large="'1-2'"
                            :xlarge="'1-2'">
                            <p class="uis-margin-remove
                                uis-text-muted">
                                Normal User
                            </p>
                        </uis-width>
                    </uis-grid>
                </li>
            </uis-list>
        </section>
    </div>
</template>

<script>
export default {
    name: 'AccountGeneralSettings',
};
</script>
