import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
	DocumentInitialProps,
} from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
	// static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
	// 	const initialProps = await Document.getInitialProps(ctx)
	// 	return { ...initialProps }
	// }
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
