import { ChakraProvider } from "@chakra-ui/react"
import type { AppProps } from "next/app"
import Layout from "../Layout/Layout"
import theme from "../Layout/theme"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	)
}

export default MyApp
