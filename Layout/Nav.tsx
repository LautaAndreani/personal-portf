import { Box, Flex, Stack, Img } from "@chakra-ui/react"

const Nav = () => {
	return (
		<Stack position="relative">
			<Box as="header" w="100%" bg="brand.background" borderBottom="1px solid" borderColor="brand.border_color" mb="-4rem">
				<Flex justifyContent="center" alignItems="center" minH="8rem" maxH="8rem" minW="100%" overflow="hidden">
					<Img src="/assets/banner-gradient.svg" width="3000" height="2500" alt="gradient banner" />
				</Flex>
			</Box>
		</Stack>
	)
}

export default Nav
