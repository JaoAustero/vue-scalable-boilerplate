export const Cookie = {
    set: (name, value, days = 1) =>
    {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));

        let cookie = `${name}=${value};`;

        cookie += `expires=${date.toGMTString()};`;

        cookie += 'path=/;';

        cookie += `domain=.${process.env.COOKIE_URL};`;

        document.cookie = cookie;
    },

    get: (name) =>
    {
        const cookieName = `${name}=`;

        let cookieValue = null;

        const cookies = document.cookie.split(';');

        for (let i = 0; i < cookies.length; i++)
        {
            let cookie = cookies[i];
            while (cookie.charAt(0) === ' ') cookie = cookie.substring(1, cookie.length);
            if (cookie.indexOf(cookieName) === 0)
            {
                cookieValue = cookie.substring(cookieName.length, cookie.length);
                break;
            }
        }
        return cookieValue;
    },

    delete: (name) =>
    {
        Cookie.set(name, '', -1);
    },
};
