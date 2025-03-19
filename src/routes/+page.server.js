import { building } from '$app/environment';
import { greetings } from "$lib/server/data.js";
export async function load({ params }) {
    var message = {
        'lang': "default",
}
	if (!building) {
        message = await greetings()
  }
	return {
		greeting: message.lang
	};
}