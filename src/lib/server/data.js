import { env } from '$env/dynamic/private';
export const greetings = () => {
   return {
	   'lang': env.LANGUAGE,
   }
};