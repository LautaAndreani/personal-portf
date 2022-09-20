import type { NextPage } from "next"
import { HomePage } from "../components/index"
import Footer from "../Layout/Footer"
import Nav from "../Layout/Nav"

const Home: NextPage = () => {
	return (
		<>
			<Nav />
			<HomePage />
			<Footer />
		</>
	)
}

export default Home
