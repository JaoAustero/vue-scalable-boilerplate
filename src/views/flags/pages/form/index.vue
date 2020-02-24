<template>
    <uis-container
        :size="'small'">
        <section class="uis-margin-medium">
            <h3 class="uis-text-title
                uis-margin-remove-top
                uis-margin-xsmall-bottom">
                New Flag
            </h3>
            <p class="uis-text-meta
                    uis-margin-remove">
                Raise a new flag to solve a problem in the company.
            </p>
        </section>

        <section>
            <uis-form>
                <main-fieldset />
                <members-fieldset />
                <financial-fieldset />
                <item-level-fieldset />
                <legal-fieldset />

                <div class="uis-margin-medium-top">
                    <uis-button
                        :color="'primary'"
                        :fullWidth="true"
                        :size="'medium'"
                        :disabled="true">
                        Save
                    </uis-button>
                </div>
            </uis-form>
        </section>
    </uis-container>
</template>

<script>
// Fielsets
import MainFieldset from './main';
import MembersFieldset from './members';
import FinancialFieldset from './financial';
import ItemLevelFieldset from './item-level';
import LegalFieldset from './legal';

export default {
    name: 'FormFlag',
    
    components:
    {
        MainFieldset,
        MembersFieldset,
        FinancialFieldset,
        ItemLevelFieldset,
        LegalFieldset,
    },
};
</script>
