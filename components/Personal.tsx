import { Box, Divider, Heading, Text } from "@chakra-ui/react"
import content from "../utils/content.json"

const Personal = () => {
	return (
		<>
			<Box>
				<Heading fontWeight={500}>{content.profile.name}</Heading>
				<Text as="h1">{content.profile.position}</Text>
			</Box>
			<Divider pt="2rem" />
		</>
	)
}

export default Personal
