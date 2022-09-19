import type { NextPage } from "next"
import { HomePage } from "../components"
import Nav from "../Layout/Nav"

const Home: NextPage = () => {
	return (
		<>
			<Nav />
			<HomePage />
		</>
	)
}

export default Home
