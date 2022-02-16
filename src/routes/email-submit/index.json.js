export async function post(event) {
	const { email } = JSON.parse(event.request.body);
	const MAILERLIT_API_KEY = process.env['MAILERLIT_API_KEY'];
	const mailer_api_url = 'https://api.mailerlite.com/api/v2/groups/id/subscribers';
	const options = {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'X-MailerLite-ApiDocs': 'true',
			'Content-Type': 'application/json',
			'X-MailerLite-ApiKey': `${MAILERLIT_API_KEY}`
		},
		body: JSON.stringify({
			email,
			name: 'null',
			resubscribe: false,
			autoresponders: true,
			type: 'null'
		})
	};
	try {
		const res = await fetch(mailer_api_url, options);
		if (res.status == 200 || res.status == 201) {
			return {
				status: 200,
				body: JSON.stringify({
					message: 'Thanks!'
				})
			};
		} else {
			let message = `Something went wrong. Please try again later. If the problem persists, please contact us (Error code: ${res.status}). Thank you.`;
			if (res.status == 204) {
				console.error('Bad request');
				console.error(
					'Docs guide: The server fulfilled the request but does not need to return an entity-body'
				);
			}
			if (res.status == 400) {
				console.error('Bad request');
				console.error(
					'Docs guide: The request could not be understood by the server due to malformed syntax.'
				);
			}
			if (res.status == 401) {
				console.error('Bad request');
				console.error('Docs guide: The request requires user authentication.');
			}
			if (res.status == 404) {
				console.error('Bad request');
				console.error(
					'Docs guide: The server has not found anything matching the Request-URI. No indication is given of whether the condition is temporary or permanent.'
				);
			}
			if (res.status == 500) {
				console.error('Bad request');
				console.error(
					'Docs guide: The server encountered an unexpected condition which prevented it from fulfilling the request.'
				);
			}
			console.error('res.error.code');
			console.error(res.error.code);
			console.error('res.error.message');
			console.error(res.error.message);
			return {
				status: 400,
				body: JSON.stringify({
					message
				})
			};
		}
	} catch (error) {
		console.error('try catch error on fetch - routes/email-submit/index.json.js');
		console.error(error);
		let message = `Something went wrong. Please try again later. If the problem persists, please contact us. Thank you.`;
		return {
			status: 500,
			body: JSON.stringify({
				message
			})
		};
	}
}
