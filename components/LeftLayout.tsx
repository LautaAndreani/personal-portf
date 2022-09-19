import { Box, HStack, Stack, Text } from "@chakra-ui/react"
import content from "../utils/content.json"
import { Title, Techs, Project, Personal, Experience, ButtonComp } from './index'

const LeftLayout = () => {
	return (
		<Box width="90%">
			<Personal />
			<Stack mt="2rem">
				<Text className="about-me" dangerouslySetInnerHTML={{ __html: content.aboutMe }}></Text>
				<Project />
				<Techs />
				<Title title="Experiencia" />
				<HStack>
					{content.experience.map((job, i) => (
						<Experience company={job.company} position={job.position} date={job.description} key={i} />
					))}
				</HStack>
				<Title title="Mis redes" />
				<HStack p="1rem 0">
					{content.socials.map((social, i) => <ButtonComp link={social.link} social={social.social} key={i}/> )}
				</HStack>
			</Stack>
		</Box>
	)
}

export default LeftLayout
