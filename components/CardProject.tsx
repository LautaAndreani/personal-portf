import { Avatar, Badge, Button, Divider, Flex, Heading, HStack, Img, Link, Stack, Text } from "@chakra-ui/react"
import { Project } from "../types/types"
type Props = { project: Project }

const CardProject = ({ project }: Props) => {
	const filterDescription = (description: string = "") =>
		description?.length > 150 ? project.description?.slice(0, 150).concat("...") : project.description
	return (
		<Stack
			minW="100%"
			minH="20rem"
			justifyContent="space-between"
			bg="brand.card_bg"
			borderRadius="10px"
			border="1px solid"
			borderColor="brand.border_color"
			p={5}
			gap={4}>
			<HStack gap={2} className="title">
				<Avatar src={`/assets/icons/projects-avatar/${project.name}.svg`} />
				<Heading size="md" fontWeight={500}>
					{project.name}
				</Heading>
			</HStack>
			<Text fontWeight={400} className="description">
				{filterDescription(project.description)}
			</Text>
			<HStack className="techs">
				{project.topics.map((topic, i) => (
					<Badge variant="outline" colorScheme="gray" key={i} p={2} borderRadius="10px" color="brand.text" minW="15%" textAlign="center">
						{topic}
					</Badge>
				))}
			</HStack>
			<Divider />
			<Flex justifyContent="flex-end" alignItems="center">
				<Link href={project.homepage} isExternal>
					<Button color="brand.background" bg="brand.text">
						Proyecto &#8599;
					</Button>
				</Link>
				<Link href={project.html_url} target="_blank">
					<Img src='/assets/icons/github_iso.svg' width="1.2rem" ml={2}/>
				</Link>
			</Flex>
		</Stack>
	)
}

export default CardProject
