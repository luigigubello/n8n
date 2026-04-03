import { getCspReportOnlyDirectives } from '@/server';

describe('CSP helper', () => {
	test('includes nonce in script-src and other directives', () => {
		const nonce = 'abc123';
		const directives = getCspReportOnlyDirectives(nonce);
		expect(directives).toContain(`'nonce-${nonce}' 'strict-dynamic' 'unsafe-eval'`);
		expect(directives).toContain("style-src 'self' 'unsafe-inline'");
		expect(directives).toContain(`object-src 'none'`);
		expect(directives).toContain(`base-uri 'self'`);
	});

	test('replaces nonce placeholder in index html', () => {
		const indexHtml =
			'<html><head><script nonce="{{CSP_NONCE}}"></script></head><body></body></html>';
		const nonce = 'abc123';
		const content = indexHtml.replace(/nonce="\{\{CSP_NONCE\}\}"/g, `nonce="${nonce}"`);
		expect(content).toContain(`nonce="${nonce}"`);
		expect(content).not.toContain('{{CSP_NONCE}}');
	});
});
