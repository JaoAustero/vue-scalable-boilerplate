<template>
    <div class="uis-auth-wrapper">
        <uis-grid
            class="uis-flex-middle"
            :gutter="'large'">
            <uis-width
                :xsmall="'1-1'"
                :small="'1-1'"
                :medium="'1-2'"
                :large="'1-2'"
                :xlarge="'1-2'">

                <div class="uis-text-center">
                    <img
                        width="200px"
                        height="auto"
                        src="/static/images/logo/WS-v.png"
                        alt="Sign in Illustration">
                </div>

                <div class="uis-margin-large-top">
                    <uis-form>
                        <uis-input
                            :label="'Username'"
                            type="text"
                            placeholder="ex: JDOE001"
                            required="true"/>

                        <uis-input
                            :label="'Password'"
                            type="password"
                            placeholder="ex: Your password"
                            required="true"/>

                        <uis-button
                            :color="'primary'"
                            :fullWidth="true">
                            Sign In
                        </uis-button>
                    </uis-form>
                </div>
            </uis-width>

            <uis-width
                class="uis-visible@m"
                :xsmall="'1-1'"
                :small="'1-1'"
                :medium="'1-2'"
                :large="'1-2'"
                :xlarge="'1-2'">
                <div class="uis-text-center">
                    <img
                        width="90%"
                        height="auto"
                        src="/static/images/illustrations/signin.svg"
                        alt="Sign in Illustration">
                </div>
            </uis-width>
        </uis-grid>
    </div>
</template>

<script>
export default {
    name: 'SignIn',
};
</script>
