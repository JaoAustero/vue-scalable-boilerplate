import { request } from './request';

export const http = {
    get: (url, method = 'GET') =>
        request(url, method)
            .then((response) =>
            {
                if (process.env.APP_DEBUG) console.log(response);
                return response;
            })
            .catch((error) =>
            {
                console.log(error);
                return error;
            }),

    post: (url, data, method = 'POST') =>
        request(url, method, data)
            .then((response) =>
            {
                if (process.env.APP_DEBUG) console.log(response);
                return response;
            })
            .catch((error) =>
            {
                if (process.env.APP_DEBUG) console.log(error);
                return error;
            }),

    put: (url, data, method = 'PUT') =>
        request(url, method, data)
            .then((response) =>
            {
                if (process.env.APP_DEBUG) console.log(response);
                return response;
            })
            .catch((error) =>
            {
                if (process.env.APP_DEBUG) console.log(error);
                return error;
            }),
};
