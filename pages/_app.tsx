import '../styles/main.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}
export default MyApp
