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
				{/* <meta property="og:image" content="https://res.cloudinary.com/dqp3lvyd0/image/upload/v1648516906/portfolio/Frame_1_pjbmwe.png" /> */}
				<meta
					property="og:description"
					content="Tengo 21 años, soy de Mendoza, Argentina. Actualmente me encuentro trabajando como desarrollador frontend en..."
				/>
			</Head>
			<Box as="main">{children}</Box>
		</>
	)
}

export default Layout
