/**
 * Generates link adding a base URL and copy to
 * clipboard
 *
 * @param String URL
 * @return String of URL with base URL
 */
export const copyLink = function (url)
{
    const newLink = `${process.env.VUE_APP_BASE_URL}/${url}`;

    const el = document.createElement('textarea');
    el.value = newLink;

    document.body.appendChild(el);

    el.select();

    document.execCommand('copy');
    document.body.removeChild(el);
};
