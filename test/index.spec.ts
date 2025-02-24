import { describe, it, expect } from 'vitest';
import worker from '../src/index';
import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('fetch', () => {
	beforeEach(() => {
		global.fetch = vi.fn();
	});

	it('should fetch and inject dark mode CSS for HTML responses', async () => {
		const mockHtmlResponse = new Response('<html><head></head><body></body></html>', {
			headers: { 'Content-Type': 'text/html' },
		});

		global.fetch.mockResolvedValueOnce(mockHtmlResponse);

		const request = new Request('https://news.ycombinator.com');
		const response = await worker.fetch(request);

		const text = await response.text();
		expect(text).toContain('<style>');
		expect(text).toContain('background-color: #121212');
		expect(text).toContain('</style></head>');
	});

	it('should fetch and return non-HTML responses without modification', async () => {
		const mockJsonResponse = new Response(JSON.stringify({ message: 'Bleep bloop' }), {
			headers: { 'Content-Type': 'application/json' },
		});

		global.fetch.mockResolvedValueOnce(mockJsonResponse);

		const request = new Request('https://news.ycombinator.com');
		const response = await worker.fetch(request);

		const json = await response.json();
		expect(json).toEqual({ message: 'Bleep bloop' });
	});
});
