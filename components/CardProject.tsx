import { Avatar, Badge, Button, Divider, Flex, Heading, HStack, Stack, Text } from "@chakra-ui/react"

const CardProject = () => {
	return (
		<Stack minW="30rem" bg="brand.card_bg" borderRadius="10px" border="1px solid" borderColor="brand.border_color" p={5} gap={4}>
			<HStack gap={2} className="title">
				<Avatar bg="brand.card_bg" />
				<Heading size="md" fontWeight={500}>
					alojamendo
				</Heading>
			</HStack>
			<Text fontWeight={400} className="description">
				Aplicación web donde subir anuncios de propiedades <br /> en alquiler o venta en Mendoza, Argentina.
			</Text>
			<HStack className="techs">
				{Array.from({ length: 4 }).map((badge, i) => (
					<Badge variant="subtle" colorScheme="cyan" key={i}>
						badge
					</Badge>
				))}
			</HStack>
			<Divider />
			<Flex justifyContent="flex-end">
				<Button color="brand.background" bg="brand.text">
					Proyecto &#8599;
				</Button>
			</Flex>
		</Stack>
	)
}

export default CardProject
