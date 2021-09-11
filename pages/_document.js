import Document, { Html, Head, Main, Next, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head />
				<body>
					<div id='overlays' />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
