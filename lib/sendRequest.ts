import fetch from 'node-fetch';

const makeParameters = (options: Object) =>
    Object.entries(options)
        .map((option) => option.join('='))
        .join('&');

type Options = string | string[] | boolean | undefined;
const get = (url: string, options?: Record<string, Options>, init?: any) => {
    const parameters = options ? makeParameters(options) : undefined;
    const requestUrl = `${url}${parameters ? `?${parameters}` : ''}`;
    return fetch(requestUrl, { ...(init || {}), method: 'GET' });
};

export const SendRequest = {
    get,
} as const;
