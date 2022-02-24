// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-node';
export default {
	kit: {
		adapter: adapter({
			out: 'build',
			precompress: true,
			env: {
				host: 'HOST',
				port: 'PORT',
				origin: 'ORIGIN',
				headers: {
					protocol: 'PROTOCOL_HEADER',
					host: 'HOST_HEADER'
				}
			}
		}),
	}
};
