import {  HStack, Stack } from "@chakra-ui/react"
import CardProject from "./CardProject"
import Title from "./Title"

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
