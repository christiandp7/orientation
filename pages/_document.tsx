import Document, { Html, Head, Main, NextScript } from 'next/document'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head />
				<body>
					<Main />
					<script
						src={`https://maps.googleapis.com/maps/api/js?key=${process.env.PLACES_API_KEY}&libraries=places`}></script>
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
