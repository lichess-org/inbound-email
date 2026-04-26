export default {
	async email(message, env, ctx) {
		const lichessHost = env.LICHESS_HOST;
		const url = new URL('/mod/email-confirm', lichessHost);
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
			lichessHost,
			body,
			response: {
				status: resp.status,
				body: await resp.text(),
			}
		});
	},
} satisfies ExportedHandler<Env, Error>;
