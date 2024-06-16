import ky from 'ky';

const prefixUrl = `${process.env.API_URL ? process.env.API_URL : ''}`;
const apiToken = process.env.API_TOKEN;

export const instance = ky.extend({
	prefixUrl,
	headers: {
		Accept: 'application/json',
		Authorization: `Bearer ${apiToken}`,
	},
});
