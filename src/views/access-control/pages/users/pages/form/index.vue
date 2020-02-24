<template>
    <uis-container
        :size="'small'">
        <div class="uis-margin-medium">
            <h3 class="uis-text-title
                    uis-margin-remove-top
                    uis-margin-xsmall-bottom">
                New User
            </h3>
            <p class="uis-text-meta
                    uis-margin-remove">
                Create a new user account by completing the form below. The account must be registered
                in your active directory to complete the form.
            </p>
        </div>
        <uis-form>
            <uis-fieldset
                :legend="'Account Information'">
                <uis-grid>
                    <uis-width
                        :xsmall="'1-1'">
                        <uis-input
                            :label="'Search account domain ID'"
                            type="text"
                            placeholder="Search active directory username..."/>
                    </uis-width>

                    <uis-width
                        :xsmall="'1-2'">
                        <uis-input
                            :label="'First name'"
                            type="text"
                            placeholder="John"/>
                    </uis-width>

                    <uis-width
                        :xsmall="'1-2'">
                        <uis-input
                            :label="'Last name'"
                            type="text"
                            placeholder="Doe"/>
                    </uis-width>

                    <uis-width
                        :xsmall="'1-1'">
                        <uis-input
                            :label="'Email address'"
                            type="email"
                            placeholder="john.doe@wartsila.com"/>
                    </uis-width>

                    <uis-width
                        :xsmall="'1-1'">
                        <uis-input
                            :label="'Organization'"
                            type="text"
                            placeholder="Search organization..."/>
                    </uis-width>
                </uis-grid>
            </uis-fieldset>

            <uis-fieldset
                :legend="'User Role'">
                <label class="uis-form-label
                        uis-form-label-button
                        uis-margin-small">
                    <input
                        class="uis-radio"
                        type="radio"
                        name="user-role">

                    <div class="uis-form-label-info">
                        <p class="uis-form-label-info-title">Administrator</p>
                        <p class="uis-form-label-info-description">
                            Full access; including editing, adding, deleting flags, and export reports.
                        </p>
                    </div>
                </label>

                <label class="uis-form-label
                        uis-form-label-button
                        uis-margin-small">
                    <input
                        class="uis-radio"
                        type="radio"
                        name="user-role">

                    <div class="uis-form-label-info">
                        <p class="uis-form-label-info-title">Moderator</p>
                        <p class="uis-form-label-info-description">
                            Can invite user, add, edit and export reports.
                        </p>
                    </div>
                </label>

                <label class="uis-form-label
                        uis-form-label-button
                        uis-margin-small">
                    <input
                        class="uis-radio"
                        type="radio"
                        name="user-role">

                    <div class="uis-form-label-info">
                        <p class="uis-form-label-info-title">Normal User</p>
                        <p class="uis-form-label-info-description">
                            Can view, comment.
                        </p>
                    </div>
                </label>

                <div class="uis-margin-small
                        uis-text-center">
                    <uis-button
                        :color="'primary'"
                        :text="true">
                        Show more (+5)
                    </uis-button>
                </div>
            </uis-fieldset>

            <uis-fieldset
                :legend="'Account Access Level'">
            
                <uis-grid>
                    <uis-width
                        :xsmall="'1-1'">
                        <uis-input
                            :label="'Select access level'"
                            type="text"
                            placeholder="Search organization..."/>
                    </uis-width>
                </uis-grid>

                <uis-grid
                    class="uis-flex
                        uis-flex
                        uis-margin-small">
                    <uis-width
                        :expand="true">
                        <p class="uis-text-emphasis uis-margin-remove">
                            Access to legal
                        </p>
                        <p class="uis-text-meta uis-margin-remove">
                            The user has right to access the legal cases; Can view, edit delete.
                        </p>
                    </uis-width>
                    <uis-width
                        class="uis-margin-small-left">
                        <label class="uis-toggle">
                            <input type="checkbox">
                            <span class="uis-toggle-slider"></span>
                        </label>
                    </uis-width>
                </uis-grid>

                <uis-grid
                    class="uis-flex
                        uis-flex-middle
                        uis-margin">
                    <uis-width
                        :expand="true">
                        <p class="uis-text-emphasis uis-margin-remove">
                            Access to 'own' Legal flags
                        </p>
                        <p class="uis-text-meta uis-margin-remove">
                            The user will have an authority to access its own legal cases.
                        </p>
                    </uis-width>
                    <uis-width
                        class="uis-margin-small-left">
                        <label class="uis-toggle">
                            <input type="checkbox">
                            <span class="uis-toggle-slider"></span>
                        </label>
                    </uis-width>
                </uis-grid>

                <uis-grid
                    class="uis-flex
                        uis-flex-middle
                        uis-margin">
                    <uis-width
                        :expand="true">
                        <p class="uis-text-emphasis uis-margin-remove">
                            Grant 'invite user' privellege
                        </p>
                        <p class="uis-text-meta uis-margin-remove">
                            This user can invite new user.
                        </p>
                    </uis-width>
                    <uis-width
                        class="uis-margin-small-left">
                        <label class="uis-toggle">
                            <input type="checkbox">
                            <span class="uis-toggle-slider"></span>
                        </label>
                    </uis-width>
                </uis-grid>
            </uis-fieldset>

            <uis-fieldset
                :legend="'Account Notification'">
                <uis-grid
                    class="uis-flex
                        uis-flex-middle
                        uis-margin-small">
                    <uis-width
                        :expand="true">
                        <p class="uis-text-emphasis uis-margin-remove">
                            E-mail Updates
                        </p>
                        <p class="uis-text-meta uis-margin-remove">
                            Receives an email notification from Wartsila FTT updates, Changes on
                            data when responsible or accountable, new comments on the thread.
                        </p>
                    </uis-width>
                    <uis-width
                        class="uis-margin-small-left">
                        <label class="uis-toggle">
                            <input type="checkbox">
                            <span class="uis-toggle-slider"></span>
                        </label>
                    </uis-width>
                </uis-grid>
            </uis-fieldset>

            <div class="uis-margin-large-top">
                <uis-button
                    :color="'primary'"
                    :fullWidth="true"
                    :size="'medium'"
                    :disabled="true">
                    Save
                </uis-button>
            </div>
        </uis-form>
    </uis-container>
</template>

<script>
export default {
    name: 'UserForm',
};
</script>
