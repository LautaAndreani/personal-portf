import {  HStack, Stack } from "@chakra-ui/react"
import { Projects } from "../types/types"
import { Title, CardProject } from "./index"
import content from '../utils/content.json'

const Project = ({ projects }: Projects) => {
	const { best_repos } = content

	const limitProjects = projects.filter(repo => best_repos.includes(repo.name.toUpperCase()))

	return (
		<Stack>
			<Title title="Proyectos" />
			<HStack overflowX="auto" padding={3}>
				{limitProjects.map((project, i) => <CardProject key={i} project={project}/>)}
			</HStack>
		</Stack>
	)
}

export default Project
