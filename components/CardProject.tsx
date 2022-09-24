import { Avatar, Badge, Button, Divider, Flex, Heading, HStack, Link, Stack, Text } from "@chakra-ui/react"
import { Project } from "../types/types"
type BestProject = {project: Project}

const CardProject = ({ project }: BestProject) => {
	console.log("🚀 ~ file: CardProject.tsx ~ line 6 ~ CardProject ~ project", project)
	const filterDescription = (description:string = '') => description?.length > 150 ? project.description?.slice(0,150).concat('...') : project.description
	return (
		<Stack minW="30rem" minH="20rem" maxH="20rem" justifyContent='space-between' bg="brand.card_bg" borderRadius="10px" border="1px solid" borderColor="brand.border_color" p={5} gap={4}>
			<HStack gap={2} className="title">
				<Avatar bg="brand.card_bg" />
				<Heading size="md" fontWeight={500}>
					{project.name}
				</Heading>
			</HStack>
			<Text fontWeight={400} className="description">
				{filterDescription(project.description)}
			</Text>
			<HStack className="techs">
				{project.topics.map((topic, i) => (
					<Badge variant="outline" colorScheme="gray" key={i}>
						{ topic }
					</Badge>
				))}
			</HStack>
			<Divider />
			<Flex justifyContent="flex-end">
				<Link href={project.homepage} isExternal>
				<Button color="brand.background" bg="brand.text">
					Proyecto &#8599;
				</Button>
				</Link>
			</Flex>
		</Stack>
	)
}

export default CardProject
