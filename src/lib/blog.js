import { readable } from 'svelte/store';
import parse from 'rss-to-json';
const proxyUrl = 'http://192.168.1.5:4000/',
	targetUrl = 'https://blog.fx.land/rss/';

export function initialValue() {
	return {
		blog: new Map()
	};
}
export function makeBlogStore(args) {
	let initial = initialValue();
	let store = readable(initial, makeSubscribe(initial, args));
	return store;
}

function unsubscribe() {}

function makeSubscribe(data, _args) {
	return (set) => {
		fetchBlogData(data, set);
		return unsubscribe;
	};
}

async function fetchBlogData(data, set) {
	try {
		parse(proxyUrl + targetUrl)
			.then((result) => {
				data.title = result.title;
				data.description = result.description;
				data.image = result.image;
				data.link = result.link;
				data.rssLink = result.rssLink;
				data.category = result.category;
				data.items = result.items;
				data.ready = true;
				set(data);
			})
			.catch((e) => {
				if (e.status === 400) {
					console.log('Bad request');
				} else if (e.status === 401) {
					console.log('Unauthorized');
				} else if (e.status === 403) {
					console.log('Forbidden');
				} else if (e.status === 404) {
					console.log('Not found');
				} else if (e.status === 500) {
					console.log('Internal server error');
				} else {
					console.log('Unknown error');
				}
				return e;
			});
	} catch (error) {
		data.error = error;
		set(data);
	}
}
