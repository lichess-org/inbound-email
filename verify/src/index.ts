export default {
	async email(message, env, ctx) {
		const lichessHost = 'https://lichess.org';
		const url = new URL('/mod/email-confirm', lichessHost);
		const formData = new URLSearchParams({
			from: message.from,
			to: message.to,
		});
		await fetch(url, {
			method: 'POST',
			headers: {
				'Authorization': `Bearer ${env.LICHESS_API_KEY}`,
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: formData.toString(),
		});
	},
} satisfies ExportedHandler<Env, Error>;
