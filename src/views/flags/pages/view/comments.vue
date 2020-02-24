<template>
    <div>
        <div class="uis-thread-comment">
            <div class="uis-thread-comment-body">
                <uis-grid
                    :gutter="'small'">
                    <uis-width>
                        <uis-avatar
                            :color="'secondary'"
                            :label="'JA'"/>
                    </uis-width>

                    <uis-width
                        :expand="true">
                        <textarea
                            class="uis-textarea uis-thread-textarea"
                            rows="8"
                            placeholder="Write your comment here..."></textarea>
                    </uis-width>
                </uis-grid>
            </div>

            <div class="uis-thread-footer">
                <uis-button
                    :color="'primary'"
                    :fullWidth="true">
                    Post Comment
                </uis-button>
            </div>
        </div>

        <div class="uis-margin-medium">
            <uis-list
                :size="'medium'">
                <li>
                    <div class="uis-thread-comment">
                        <div class="uis-thread-comment-body">
                            <uis-grid
                                :gutter="'small'">
                                <uis-width>
                                    <uis-avatar
                                        :label="'SB'"/>
                                </uis-width>

                                <uis-width
                                    :expand="true">
                                    <p class="uis-text-emhpasis
                                        uis-margin-remove">
                                        Sarah Nueue
                                    </p>
                                    <p class="uis-text-meta
                                        uis-margin-remove">
                                        1 hour ago
                                    </p>
                                    <p class="uis-margin-top">
                                        Have you seen the feedback of the lawyer? Kindly add to the
                                        information. Thanks.
                                    </p>
                                </uis-width>
                            </uis-grid>
                        </div>
                    </div>
                </li>

                <li>
                    <div class="uis-thread-comment">
                        <div class="uis-thread-comment-body">
                            <uis-grid
                                :gutter="'small'">
                                <uis-width>
                                    <uis-avatar
                                        :label="'MB'"/>
                                </uis-width>

                                <uis-width
                                    :expand="true">
                                    <p class="uis-text-emhpasis
                                        uis-margin-remove">
                                        Marques Brownlee
                                    </p>
                                    <p class="uis-text-meta
                                        uis-margin-remove">
                                        3 days ago
                                    </p>
                                    <p class="uis-margin-top">
                                        I already updated those information, kindly check the history for reference purpose. Thanks
                                    </p>
                                </uis-width>
                            </uis-grid>
                        </div>
                    </div>
                </li>

                <li>
                    <div class="uis-thread-comment">
                        <div class="uis-thread-comment-body">
                            <uis-grid
                                :gutter="'small'">
                                <uis-width>
                                    <uis-avatar
                                        :color="'secondary'"
                                        :label="'JA'"/>
                                </uis-width>

                                <uis-width
                                    :expand="true">
                                    <p class="uis-text-emhpasis
                                        uis-margin-remove">
                                        Jerald Austero
                                    </p>
                                    <p class="uis-text-meta
                                        uis-margin-remove">
                                        05 Jan 2020 at 13:45
                                    </p>
                                    <p class="uis-margin-top">
                                        Any updates?
                                    </p>
                                </uis-width>
                            </uis-grid>
                        </div>
                    </div>
                </li>
            </uis-list>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FlagComments',
};
</script>
