import { Stack } from "@chakra-ui/react"
import content from "../utils/content.json"
import Content from "./Content"

const RightCard = () => {
	return (
		<Stack as="section" bg="brand.card_bg" borderRadius="10px" border="1px solid" borderColor="brand.border_color" p={5}>
			{content.rightCard.map(info => (
				<Content title={info.title} description={info.description} link={info?.link} key={info.title} />
			))}
		</Stack>
	)
}

export default RightCard
