import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-node';
// import preprocess from 'svelte-preprocess';
// import importAssets from 'svelte-preprocess-import-assets';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	}
};

export default config;

// export default {
// 	kit: {
// 		adapter: adapter({
// 			// default options are shown
// 			out: 'build',
// 			precompress: false,
// 			env: {
// 				path: 'SOCKET_PATH',
// 				host: 'HOST',
// 				port: 'PORT',
// 				origin: 'ORIGIN',
// 				headers: {
// 					protocol: 'PROTOCOL_HEADER',
// 					host: 'HOST_HEADER'
// 				}
// 			}
// 		}),
// 		preprocess: preprocess({
// 			importAssets()
// 		}),
// 		preprocess: [importAssets()],
// 		vite: {
// 			define: {
// 				'process.env': process.env
// 			}
// 		}
// 	}
// };
