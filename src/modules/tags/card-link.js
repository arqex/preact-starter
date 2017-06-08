import React from 'react';
import Link from 'urlhub/Link';

export default function (props) {
	return (
		<Link to={ props.href } className="card">{ props.children }</Link>
	)
};
