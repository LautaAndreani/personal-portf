import { useState, useEffect } from "react"
import { HStack, Img, Stack } from "@chakra-ui/react"
import { Project, Projects } from "../types/types"
import { Title, CardProject } from "./index"
import content from "../utils/content.json"

const Project = ({ projects }: Projects) => {
	const limitedProjects = projects.filter(repo => content.best_repos.includes(repo.name.toUpperCase()))

	const [nextProject, setNextProject] = useState(0)
	const [filterProjects, setFilterProjects] = useState<Project>(limitedProjects[nextProject])

	const handleCarousel = () => setNextProject(prev => prev + 1)

	useEffect(() => {
		if (nextProject === limitedProjects.length) return setNextProject(0)
		setFilterProjects(limitedProjects[nextProject])
	}, [nextProject])

	return (
		<Stack>
			<Title title="Proyectos" />
			<HStack padding={3}>
				<CardProject project={filterProjects} />
				<Img
					src="/assets/icons/arrow-right-circle.svg"
					alt="arrow right button"
					width="2rem"
					filter="invert(1)"
					role="button"
					onClick={handleCarousel}
					boxSize="20px"
				/>
			</HStack>
		</Stack>
	)
}

export default Project
