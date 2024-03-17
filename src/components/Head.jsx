import { h } from 'preact'; // eslint-disable-line no-unused-vars

const Head = props => {

	const { documentTitle } = props;

	return (
		<head>
			<title>{`${documentTitle} | TheatreBase`}</title>
			<link rel="stylesheet" href="/main.css" />
			<script src="/main.js" />
		</head>
	);

};

export default Head;
