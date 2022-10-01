import { Box, Flex, Stack, Img, keyframes } from "@chakra-ui/react"

const pulse = keyframes`
0% { transform: rotate(0deg) }
75% { transform: rotate(360deg) }`

const animation = `${pulse} 70s linear infinite alternate `

const Nav = () => {
	return (
		<Stack position="relative">
			<Box as="header" w="100%" bg="brand.background" borderBottom="1px solid" borderColor="brand.border_color" mb="-4rem">
				<Flex justifyContent="center" alignItems="center" minH="8rem" maxH="8rem" minW="100%" overflow="hidden">
					<Img src="/assets/banner-gradient.svg" width="3000" height="2500" alt="gradient banner" animation={animation} />
				</Flex>
			</Box>
		</Stack>
	)
}

export default Nav
