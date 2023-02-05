import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter(),
		alias: {
			'$lib':'src/lib',
			'$components':'src/lib/components',
			'$types':'src/lib/types',
			'$interfaces':'src/lib/interfaces',
			'$classes':'src/lib/classes'
		}
	}
};

export default config;
