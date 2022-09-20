import { Box, Center, Divider, Heading, HStack, Link, Stack, Text, Tooltip } from "@chakra-ui/react"
import content from "../utils/content.json"

const Footer = () => {
	return (
		<Stack width="60%" m="2rem auto" gap={5}>
			<Center flexDirection="column" gap={2}>
				<Heading size="sm" fontWeight={400}>
					{content.footer.title}
				</Heading>
				<Text as="small" color="brand.footer">
					{content.footer.description}
				</Text>
				<Divider />
			</Center>
			<HStack justifyContent="space-between">
				<HStack gap={5}>
					{content.footer.links.map((link, i) => {
						if (link !== "Inicio") {
							return (
								<Tooltip label="Próximamente...">
									<Link key={i} textDecor="none" color={"whiteAlpha.400"} cursor="not-allowed">
										{link}
									</Link>
								</Tooltip>
							)
						}
						return <Link key={i}>{link}</Link>
					})}
				</HStack>
				<Link>Click 🥳</Link>
			</HStack>
		</Stack>
	)
}

export default Footer
