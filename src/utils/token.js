import axios from 'axios';
import { Cookie } from './cookie';

export const Token = {
    get: () =>
    {
        const accessToken = Cookie.get(process.env.ACCESS_TOKEN);

        return accessToken;
    },

    set: (data) =>
    {
        if (data.access_token && data.refresh_token)
        {
            Cookie.set(process.env.ACCESS_TOKEN, data.access_token, 1);
            Cookie.set(process.env.REFRESH_TOKEN, data.refresh_token, 1);

            axios.defaults.headers.common.Authorization = `${data.token_type} ${data.access_token}`;
        }
    },

    destroy: () =>
    {
        Cookie.delete(process.env.ACCESS_TOKEN);
        Cookie.delete(process.env.REFRESH_TOKEN);
        delete axios.defaults.headers.common.Authorization;
    },
};
