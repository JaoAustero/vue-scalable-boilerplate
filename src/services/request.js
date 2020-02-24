import axios from 'axios';

export function request(url, method, data = [])
{
    return axios({
        url: `${process.env.API_URL}/api${url}`,
        method,
        data,
    });
}
