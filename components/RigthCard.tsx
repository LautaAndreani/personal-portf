import { Box, Stack } from "@chakra-ui/react"
import content from "../utils/content.json"
import Content from "./Content"

const RightCard = () => {
	return (
		<Box minHeight="100vh">
			<Stack as="section" bg="brand.card_bg" borderRadius="10px" border="1px solid" borderColor="brand.border_color" p={5} position="sticky" top="10">
				{content.rightCard.map(info => (
					<Content info={info} key={info.content_key} />
				))}
			</Stack>
		</Box>
	)
}

export default RightCard
