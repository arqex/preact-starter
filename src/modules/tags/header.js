import React from 'react';
import Link from 'urlhub/Link';

export default function () {
	return (
		<header className="header">
			<h1>Preact Starter</h1>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/blog">Blog</Link>
				<Link to="/credit">Credit</Link>
			</nav>
		</header>
	)
}
