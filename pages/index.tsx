import type { NextPage } from "next"
import { HomePage } from "../components/index"
import Footer from "../Layout/Footer"
import Nav from "../Layout/Nav"
import { Projects } from "../types/types"

const Home: NextPage<Projects> = ({ projects }) => {
	return (
		<>
			<Nav />
			<HomePage projects={projects} />
			<Footer />
		</>
	)
}

export default Home

export async function getStaticProps() {
	const getProjects = await fetch("https://api.github.com/users/LautaAndreani/repos")
		.then(res => res.json())
		.catch(e => {
			if (e instanceof Error) {
				return console.error(e.message)
			}
		})

	return {
		props: { projects: getProjects },
		revalidate: 60,
	}
}
