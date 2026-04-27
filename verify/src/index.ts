export default {
	async email(message, env, ctx) {
		const url = new URL('/mod/email-confirm', env.LICHESS_HOST);
		const body = (new URLSearchParams({
			sender: message.from,
			to: message.to,
		})).toString();
		const resp = await fetch(url, {
			method: 'POST',
			headers: {
				'Authorization': `Bearer ${env.LICHESS_API_KEY}`,
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body,
		});
		console.log({
			url: url.toString(),
			body,
			response: {
				status: resp.status,
				body: await resp.text(),
			}
		});
	},
	async fetch(request, env, ctx) {
		const url = new URL('/contact/email-confirm/help', env.LICHESS_HOST);
		return Response.redirect(url.toString(), 301);
	},
} satisfies ExportedHandler<Env, Error>;
