function subredditShortcut(details) {
	var parser = document.createElement('a');
	parser.href = details.url;
	if (parser.hostname === 'r') {
		browser.tabs.update(
			{
				url: 'https://reddit.com/r' + parser.pathname
			}
		);
	} else if (parser.hostname === 'u') {
		browser.tabs.update(
			{
				url: 'https://reddit.com/user' + parser.pathname
			}
		);
	}
}

browser.webNavigation.onBeforeNavigate.addListener(
	subredditShortcut,
	{
		url: [
			{
				urlMatches: '.*'
			}
		]
	}
);
