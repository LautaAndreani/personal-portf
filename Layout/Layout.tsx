import { Box } from "@chakra-ui/react"
import Head from "next/head"
type Props = { children: JSX.Element }

const Layout = ({ children }: Props) => {
	return (
		<>
			<Head>
				<title>Lautaro Andreani - frontend developer</title>
				<link rel="icon" type="image/x-icon" href="/assets/next-profile.png" />
				<meta property="og:title" content="Lautaro Andreani - frontend developer" />
				<meta property="og:image" content="/assets/meta-header.png" />
				<meta
					name="description"
					content="Tengo 22 años, soy de Mendoza, Argentina. Actualmente me encuentro trabajando como desarrollador frontend en..."
				/>
			</Head>
			<Box as="main" bgImage="/assets/grain-dark.png" bgRepeat="repeat" bgPosition="center">
				{children}
			</Box>
		</>
	)
}

export default Layout
