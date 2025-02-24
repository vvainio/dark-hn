export default {
	async fetch(request: Request): Promise<Response> {
		const url = new URL(request.url);
		url.hostname = 'news.ycombinator.com';

		const response = await fetch(url.toString());
		const contentType = response.headers.get('Content-Type') || '';

		if (contentType.includes('text/html')) {
			let text = await response.text();

			// Inject Dark Mode CSS
			text = text.replace(
				'</head>',
				`<style>
          body { background-color: #121212 !important; color: #e0e0e0 !important; }
          table, td { background-color: #1e1e1e !important; color: #e0e0e0 !important; }
          a { color: #ff8c00 !important; }
          a:visited { color: #d48000 !important; }
          a:hover { color: #ffaa33 !important; }
          input, textarea { background-color: #1e1e1e; color: #e0e0e0 !important; }
          .subtext, .comment, .c00 { color: #bbbbbb !important; }
          .comhead { color: #888 !important; }
          .votearrow { filter: invert(1) !important; }
        </style></head>`
			);

			return new Response(text, {
				status: response.status,
				headers: response.headers,
			});
		}

		return response;
	},
};
