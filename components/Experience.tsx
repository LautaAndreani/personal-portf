import { Avatar, Box, Flex, HStack, Stack, Text } from "@chakra-ui/react"
type Props = { company: string; position: string; date: string }

const Experience = ({ company, position, date }: Props) => {
	return (
		<>
			<HStack m="1rem 0">
				<Box as="span" minHeight=".2rem" position="relative" minW="15%" bg="brand.actual_company"></Box>
				<Stack minW="20rem" bg="brand.card_bg" borderRadius="10px" border="1px solid" borderColor="brand.border_color" p={5} gap={4}>
					<HStack gap={2}>
						<Avatar name="coderhouse" size="sm" src="/assets/logos/coderhouse.png" />
						<Flex flexDirection="column">
							<Text>{company}</Text>
							<Text as="small" color="lightgray">
								{position}
							</Text>
						</Flex>
					</HStack>
					<Text>{date}</Text>
				</Stack>
			</HStack>
		</>
	)
}

export default Experience
