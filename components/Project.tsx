import {  HStack, Stack } from "@chakra-ui/react"
import { Title, CardProject } from "./index"

const Project = () => {
	return (
		<Stack>
			<Title title="Proyectos" />
			<HStack overflowX="auto">
				<CardProject />
			</HStack>
		</Stack>
	)
}

export default Project
