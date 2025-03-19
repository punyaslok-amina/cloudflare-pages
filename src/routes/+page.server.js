import { building } from '$app/environment';
import { env } from '$env/dynamic/private';
var greetings = {
	'lang': "bonjouur",
};
if (!building) {
	greetings = {
	'lang': env.LANGUAGE,
};
}
export function load({ params }) {
	return {
		greeting: greetings[params.lang ?? 'lang']
	};
}