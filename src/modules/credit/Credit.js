import React from 'react';
import Card from 'modules/common/Card';

const links = [{
	name: 'lukeed/preact-starter',
	desc: 'A Webpack2 starter for building SPA / PWA / offline front-end apps with Preact',
	href: 'https://github.com/lukeed/preact-starter'
}, {
	name: 'developit/preact',
	desc: 'Fast 3kb React alternative with the same ES6 API. Components & Virtual DOM.',
	href: 'https://www.npmjs.com/package/preact'
}, {
	name: 'arqex/urlhub',
	desc: 'The simplest router for any browser app.',
	href: 'https://www.npmjs.com/package/urlhub'
}, {
	name: 'arqex/freezer-js',
	desc: 'App state manager to handle immutable data.',
	href: 'https://www.npmjs.com/package/freezer-js'
}, {
	name: 'webpack/webpack',
	desc: 'A bundler for javascript and friends. Allows for code splitting & asynchronous lazy-loading.',
	href: 'https://github.com/webpack/webpack'
}, {
	name: 'FormidableLabs/webpack-dashboard',
	desc: 'A CLI dashboard for webpack-dev-server',
	href: 'https://github.com/FormidableLabs/webpack-dashboard'
}, {
	name: 'zeit/now',
	desc: 'Free (OSS) realtime global deployments',
	href: 'https://zeit.co/now'
}, {
	name: 'zeit/serve',
	desc: 'Single-command HTTP directory listing and file serving',
	href: 'https://github.com/zeit/serve'
}];

export default function (props) {
	return (
		<div className="page page__credit">
			<Card>
				<h1>Credits:</h1>
				<p>Resources used within boilerplate:</p>
			</Card>

			<nav>
				{ links.map(obj =>
					<a className="card" href={ obj.href } target="_blank" rel="noopener">
						<strong>{ obj.name }</strong>
						<em>{ obj.desc }</em>
					</a>
				) }
			</nav>
		</div>
	)
}
